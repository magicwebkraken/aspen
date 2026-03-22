(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [689],
  {
    181: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => n });
      var r = i(4232);
      let n = i(2205).B ? r.useLayoutEffect : r.useEffect;
    },
    1026: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(4232);
      function n(t, e) {
        let i = (0, r.useRef)(null),
          n = (0, r.useRef)(null);
        return (0, r.useCallback)(
          (r) => {
            if (null === r) {
              let t = i.current;
              t && ((i.current = null), t());
              let e = n.current;
              e && ((n.current = null), e());
            } else t && (i.current = s(t, r)), e && (n.current = s(e, r));
          },
          [t, e]
        );
      }
      function s(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let i = t(e);
          return "function" == typeof i ? i : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1147: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return a;
          },
          noSSR: function () {
            return o;
          },
        });
      let r = i(4252);
      i(7876), i(4232);
      let n = r._(i(2100));
      function s(t) {
        return { default: (null == t ? void 0 : t.default) || t };
      }
      function o(t, e) {
        return delete e.webpack, delete e.modules, t(e);
      }
      function a(t, e) {
        let i = n.default,
          r = {
            loading: (t) => {
              let { error: e, isLoading: i, pastDelay: r } = t;
              return null;
            },
          };
        t instanceof Promise
          ? (r.loader = () => t)
          : "function" == typeof t
          ? (r.loader = t)
          : "object" == typeof t && (r = { ...r, ...t });
        let a = (r = { ...r, ...e }).loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        "boolean" != typeof r.ssr || r.ssr)
          ? i({
              ...r,
              loader: () =>
                null != a ? a().then(s) : Promise.resolve(s(() => null)),
            })
          : (delete r.webpack, delete r.modules, o(i, r));
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1200: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => n });
      var r = i(4232);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    1650: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = i(4252)._(i(4232)).default.createContext(null);
    },
    1956: (t, e, i) => {
      "use strict";
      i.d(e, { x: () => l });
      var r = i(7876),
        n = i(4232),
        s = i(9751),
        o = i(5003),
        a = i(1200);
      function l({ children: t, isValidProp: e, ...i }) {
        e && (0, o.D)(e),
          ((i = { ...(0, n.useContext)(s.Q), ...i }).isStatic = (0, a.M)(
            () => i.isStatic
          ));
        let l = (0, n.useMemo)(
          () => i,
          [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]
        );
        return (0, r.jsx)(s.Q.Provider, { value: l, children: t });
      }
    },
    2100: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = i(4252)._(i(4232)),
        n = i(1650),
        s = [],
        o = [],
        a = !1;
      function l(t) {
        let e = t(),
          i = { loading: !0, loaded: null, error: null };
        return (
          (i.promise = e
            .then((t) => ((i.loading = !1), (i.loaded = t), t))
            .catch((t) => {
              throw ((i.loading = !1), (i.error = t), t);
            })),
          i
        );
      }
      class u {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: t, _opts: e } = this;
          t.loading &&
            ("number" == typeof e.delay &&
              (0 === e.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, e.delay))),
            "number" == typeof e.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, e.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((t) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(t) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...t,
          }),
            this._callbacks.forEach((t) => t());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(t) {
          return (
            this._callbacks.add(t),
            () => {
              this._callbacks.delete(t);
            }
          );
        }
        constructor(t, e) {
          (this._loadFn = t),
            (this._opts = e),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function h(t) {
        return (function (t, e) {
          let i = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              e
            ),
            s = null;
          function l() {
            if (!s) {
              let e = new u(t, i);
              s = {
                getCurrentValue: e.getCurrentValue.bind(e),
                subscribe: e.subscribe.bind(e),
                retry: e.retry.bind(e),
                promise: e.promise.bind(e),
              };
            }
            return s.promise();
          }
          if (!a) {
            let t = i.webpack ? i.webpack() : i.modules;
            t &&
              o.push((e) => {
                for (let i of t) if (e.includes(i)) return l();
              });
          }
          function h(t, e) {
            !(function () {
              l();
              let t = r.default.useContext(n.LoadableContext);
              t &&
                Array.isArray(i.modules) &&
                i.modules.forEach((e) => {
                  t(e);
                });
            })();
            let o = r.default.useSyncExternalStore(
              s.subscribe,
              s.getCurrentValue,
              s.getCurrentValue
            );
            return (
              r.default.useImperativeHandle(e, () => ({ retry: s.retry }), []),
              r.default.useMemo(() => {
                var e;
                return o.loading || o.error
                  ? r.default.createElement(i.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: s.retry,
                    })
                  : o.loaded
                  ? r.default.createElement(
                      (e = o.loaded) && e.default ? e.default : e,
                      t
                    )
                  : null;
              }, [t, o])
            );
          }
          return (
            (h.preload = () => l()),
            (h.displayName = "LoadableComponent"),
            r.default.forwardRef(h)
          );
        })(l, t);
      }
      function d(t, e) {
        let i = [];
        for (; t.length; ) {
          let r = t.pop();
          i.push(r(e));
        }
        return Promise.all(i).then(() => {
          if (t.length) return d(t, e);
        });
      }
      (h.preloadAll = () =>
        new Promise((t, e) => {
          d(s).then(t, e);
        })),
        (h.preloadReady = (t) => (
          void 0 === t && (t = []),
          new Promise((e) => {
            let i = () => ((a = !0), e());
            d(o, t).then(i, i);
          })
        )),
        (window.__NEXT_PRELOADREADY = h.preloadReady);
      let c = h;
    },
    2205: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => r });
      let r = "undefined" != typeof window;
    },
    2439: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = i(4252),
        n = i(8365),
        s = i(7876),
        o = n._(i(4232)),
        a = r._(i(8477)),
        l = r._(i(9836)),
        u = i(4915),
        h = i(6904),
        d = i(72);
      i(546);
      let c = i(8265),
        p = r._(i(3829)),
        m = i(1026),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "custom",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function v(t, e, i, r, n, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && n(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let r = !1,
                    n = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), e.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(t);
              }
            }));
      }
      function g(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      let y = (0, o.forwardRef)((t, e) => {
        let {
            src: i,
            srcSet: r,
            sizes: n,
            height: a,
            width: l,
            decoding: u,
            className: h,
            style: d,
            fetchPriority: c,
            placeholder: p,
            loading: f,
            unoptimized: y,
            fill: b,
            onLoadRef: x,
            onLoadingCompleteRef: w,
            setBlurComplete: P,
            setShowAltText: S,
            sizesInput: T,
            onLoad: A,
            onError: E,
            ...M
          } = t,
          C = (0, o.useCallback)(
            (t) => {
              t && (E && (t.src = t.src), t.complete && v(t, p, x, w, P, y, T));
            },
            [i, p, x, w, P, E, y, T]
          ),
          j = (0, m.useMergedRef)(e, C);
        return (0, s.jsx)("img", {
          ...M,
          ...g(c),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: h,
          style: d,
          sizes: n,
          srcSet: r,
          src: i,
          ref: j,
          onLoad: (t) => {
            v(t.currentTarget, p, x, w, P, y, T);
          },
          onError: (t) => {
            S(!0), "empty" !== p && P(!0), E && E(t);
          },
        });
      });
      function b(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          r = {
            as: "image",

            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, r), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          r = (0, o.useContext)(d.ImageConfigContext),
          n = (0, o.useMemo)(() => {
            var t;
            let e = f || r || h.imageConfigDefault,
              i = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
              n = e.deviceSizes.sort((t, e) => t - e),
              s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
            return { ...e, allSizes: i, deviceSizes: n, qualities: s };
          }, [r]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let v = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [g, x] = (0, o.useState)(!1),
          [w, P] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: g,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(y, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: x,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(b, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2594: (t, e, i) => {
      "use strict";
      let r;
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { P: () => sC });
      let o = (t) => t,
        a = { skipAnimations: !1, useManualTiming: !1 };
      function l(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let u = (t, e, i) => {
        let r = e - t;
        return 0 === r ? 1 : (i - t) / r;
      };
      class h {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return n(this.subscriptions, t), () => s(this.subscriptions, t);
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let d = (t) => 1e3 * t,
        c = (t) => t / 1e3;
      function p(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function m(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function f(t, e, i, r) {
        if ("function" == typeof e) {
          let [n, s] = m(r);
          e = e(void 0 !== i ? i : t.custom, n, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, s] = m(r);
          e = e(void 0 !== i ? i : t.custom, n, s);
        }
        return e;
      }
      function v(t, e, i) {
        let r = t.getProps();
        return f(r, e, void 0 !== i ? i : r.custom, t);
      }
      let g = l(() => void 0 !== window.ScrollTimeline);
      class y {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            g() && i.attachTimeline
              ? i.attachTimeline(t)
              : "function" == typeof e
              ? e(i)
              : void 0
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class b extends y {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function x(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      function w(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function P(t) {
        return "function" == typeof t;
      }
      function S(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let T = (t) => Array.isArray(t) && "number" == typeof t[0],
        A = { linearEasing: void 0 },
        E = (function (t, e) {
          let i = l(t);
          return () => {
            var t;
            return null !== (t = A[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        M = (t, e, i = 10) => {
          let r = "",
            n = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < n; e++) r += t(u(0, n - 1, e)) + ", ";
          return `linear(${r.substring(0, r.length - 2)})`;
        },
        C = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        j = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: C([0, 0.65, 0.55, 1]),
          circOut: C([0.55, 0, 1, 0.45]),
          backIn: C([0.31, 0.01, 0.66, -0.59]),
          backOut: C([0.33, 1.53, 0.69, 0.99]),
        },
        D = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        V = { value: null, addProjectionMetrics: null };
      function R(t, e) {
        let i = !1,
          r = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = D.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  r = new Set(),
                  n = !1,
                  s = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  o.has(e) && (h.schedule(e), t()), l++, e(a);
                }
                let h = {
                  schedule: (t, e = !1, s = !1) => {
                    let a = s && n ? i : r;
                    return e && o.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    r.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), n)) {
                      s = !0;
                      return;
                    }
                    (n = !0),
                      ([i, r] = [r, i]),
                      i.forEach(u),
                      e && V.value && V.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (n = !1),
                      s && ((s = !1), h.process(t));
                  },
                };
                return h;
              })(s, e ? i : void 0)),
              t
            ),
            {}
          ),
          {
            read: l,
            resolveKeyframes: u,
            update: h,
            preRender: d,
            render: c,
            postRender: p,
          } = o,
          m = () => {
            let s = a.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              a.useManualTiming ||
                (n.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(s - n.timestamp, 40), 1)),
              (n.timestamp = s),
              (n.isProcessing = !0),
              l.process(n),
              u.process(n),
              h.process(n),
              d.process(n),
              c.process(n),
              p.process(n),
              (n.isProcessing = !1),
              i && e && ((r = !1), t(m));
          },
          f = () => {
            (i = !0), (r = !0), n.isProcessing || t(m);
          };
        return {
          schedule: D.reduce((t, e) => {
            let r = o[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || f(), r.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < D.length; e++) o[D[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let {
          schedule: k,
          cancel: O,
          state: L,
          steps: F,
        } = R(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : o,
          !0
        ),
        { schedule: B } = R(queueMicrotask, !1);
      function _() {
        r = void 0;
      }
      let I = {
          now: () => (
            void 0 === r &&
              I.set(
                L.isProcessing || a.useManualTiming
                  ? L.timestamp
                  : performance.now()
              ),
            r
          ),
          set: (t) => {
            (r = t), queueMicrotask(_);
          },
        },
        U = { x: !1, y: !1 };
      function N(t, e) {
        let i = (function (t, e, i) {
            var r;
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = ((r = void 0), e.querySelectorAll(t));
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          r = new AbortController();
        return [i, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
      }
      function z(t) {
        return !("touch" === t.pointerType || U.x || U.y);
      }
      function W(t, e) {
        let i = `${e}PointerCapture`;
        if (
          t.target instanceof Element &&
          i in t.target &&
          void 0 !== t.pointerId
        )
          try {
            t.target[i](t.pointerId);
          } catch (t) {}
      }
      let $ = (t, e) => !!e && (t === e || $(t, e.parentElement)),
        Y = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        X = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        H = new WeakSet();
      function q(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function G(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let K = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let r = q(() => {
          if (H.has(i)) return;
          G(i, "down");
          let t = q(() => {
            G(i, "up");
          });
          i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => G(i, "cancel"), e);
        });
        i.addEventListener("keydown", r, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", r),
            e
          );
      };
      function Z(t) {
        return Y(t) && !(U.x || U.y);
      }
      let J = { layout: 0, mainThread: 0, waapi: 0 };
      function Q() {
        let { value: t } = statsBuffer;
        if (null === t) {
          cancelFrame(Q);
          return;
        }
        t.frameloop.rate.push(frameData.delta),
          t.animations.mainThread.push(activeAnimations.mainThread),
          t.animations.waapi.push(activeAnimations.waapi),
          t.animations.layout.push(activeAnimations.layout);
      }
      function tt(t) {
        return t.reduce((t, e) => t + e, 0) / t.length;
      }
      function te(t, e = tt) {
        return 0 === t.length
          ? { min: 0, max: 0, avg: 0 }
          : { min: Math.min(...t), max: Math.max(...t), avg: e(t) };
      }
      let ti = (t) => Math.round(1e3 / t),
        tr = (t) => !isNaN(parseFloat(t)),
        tn = { current: void 0 };
      class ts {
        constructor(t, e = {}) {
          (this.version = "12.5.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = I.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = I.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = tr(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new h());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  k.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return tn.current && tn.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = I.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function to(t, e) {
        return new ts(t, e);
      }
      let ta = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        tl = new Set(ta),
        tu = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...ta,
        ]),
        th = (t) => Array.isArray(t),
        td = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tc = (t) => (th(t) ? t[t.length - 1] || 0 : t),
        tp = (t) => !!(t && t.getVelocity);
      function tm(t, e) {
        let i = t.getValue("willChange");
        if (tp(i) && i.add) return i.add(e);
      }
      let tf = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        tv = "data-" + tf("framerAppearId"),
        tg = { current: !1 },
        ty = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function tb(t, e, i, r) {
        if (t === e && i === r) return o;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do
              (s = ty((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ty(n(t), e, r));
      }
      let tx = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tw = (t) => (e) => 1 - t(1 - e),
        tP = tb(0.33, 1.53, 0.69, 0.99),
        tS = tw(tP),
        tT = tx(tS),
        tA = (t) =>
          (t *= 2) < 1 ? 0.5 * tS(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        tE = (t) => 1 - Math.sin(Math.acos(t)),
        tM = tw(tE),
        tC = tx(tE),
        tj = (t) => /^0[^.\s]+$/u.test(t),
        tD = (t, e, i) => (i > e ? e : i < t ? t : i),
        tV = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tR = { ...tV, transform: (t) => tD(0, 1, t) },
        tk = { ...tV, default: 1 },
        tO = (t) => Math.round(1e5 * t) / 1e5,
        tL = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tF =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tB = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tF.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        t_ = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [n, s, o, a] = r.match(tL);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tI = (t) => tD(0, 255, t),
        tU = { ...tV, transform: (t) => Math.round(tI(t)) },
        tN = {
          test: tB("rgb", "red"),
          parse: t_("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            tU.transform(t) +
            ", " +
            tU.transform(e) +
            ", " +
            tU.transform(i) +
            ", " +
            tO(tR.transform(r)) +
            ")",
        },
        tz = {
          test: tB("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tN.transform,
        },
        tW = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        t$ = tW("deg"),
        tY = tW("%"),
        tX = tW("px"),
        tH = tW("vh"),
        tq = tW("vw"),
        tG = {
          ...tY,
          parse: (t) => tY.parse(t) / 100,
          transform: (t) => tY.transform(100 * t),
        },
        tK = {
          test: tB("hsl", "hue"),
          parse: t_("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tY.transform(tO(e)) +
            ", " +
            tY.transform(tO(i)) +
            ", " +
            tO(tR.transform(r)) +
            ")",
        },
        tZ = {
          test: (t) => tN.test(t) || tz.test(t) || tK.test(t),
          parse: (t) =>
            tN.test(t) ? tN.parse(t) : tK.test(t) ? tK.parse(t) : tz.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tN.transform(t)
              : tK.transform(t),
        },
        tJ =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tQ = "number",
        t0 = "color",
        t1 =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function t2(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          n = [],
          s = 0,
          o = e
            .replace(
              t1,
              (t) => (
                tZ.test(t)
                  ? (r.color.push(s), n.push(t0), i.push(tZ.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(s), n.push("var"), i.push(t))
                  : (r.number.push(s), n.push(tQ), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: r, types: n };
      }
      function t5(t) {
        return t2(t).values;
      }
      function t3(t) {
        let { split: e, types: i } = t2(t),
          r = e.length;
        return (t) => {
          let n = "";
          for (let s = 0; s < r; s++)
            if (((n += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tQ
                ? (n += tO(t[s]))
                : e === t0
                ? (n += tZ.transform(t[s]))
                : (n += t[s]);
            }
          return n;
        };
      }
      let t4 = (t) => ("number" == typeof t ? 0 : t),
        t6 = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tL)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tJ)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: t5,
          createTransformer: t3,
          getAnimatableNone: function (t) {
            let e = t5(t);
            return t3(t)(e.map(t4));
          },
        },
        t9 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function t8(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(tL) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = +!!t9.has(e);
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let t7 = /\b([a-z-]*)\(.*?\)/gu,
        et = {
          ...t6,
          getAnimatableNone: (t) => {
            let e = t.match(t7);
            return e ? e.map(t8).join(" ") : t;
          },
        },
        ee = { ...tV, transform: Math.round },
        ei = {
          borderWidth: tX,
          borderTopWidth: tX,
          borderRightWidth: tX,
          borderBottomWidth: tX,
          borderLeftWidth: tX,
          borderRadius: tX,
          radius: tX,
          borderTopLeftRadius: tX,
          borderTopRightRadius: tX,
          borderBottomRightRadius: tX,
          borderBottomLeftRadius: tX,
          width: tX,
          maxWidth: tX,
          height: tX,
          maxHeight: tX,
          top: tX,
          right: tX,
          bottom: tX,
          left: tX,
          padding: tX,
          paddingTop: tX,
          paddingRight: tX,
          paddingBottom: tX,
          paddingLeft: tX,
          margin: tX,
          marginTop: tX,
          marginRight: tX,
          marginBottom: tX,
          marginLeft: tX,
          backgroundPositionX: tX,
          backgroundPositionY: tX,
          rotate: t$,
          rotateX: t$,
          rotateY: t$,
          rotateZ: t$,
          scale: tk,
          scaleX: tk,
          scaleY: tk,
          scaleZ: tk,
          skew: t$,
          skewX: t$,
          skewY: t$,
          distance: tX,
          translateX: tX,
          translateY: tX,
          translateZ: tX,
          x: tX,
          y: tX,
          z: tX,
          perspective: tX,
          transformPerspective: tX,
          opacity: tR,
          originX: tG,
          originY: tG,
          originZ: tX,
          zIndex: ee,
          size: tX,
          fillOpacity: tR,
          strokeOpacity: tR,
          numOctaves: ee,
        },
        er = {
          ...ei,
          color: tZ,
          backgroundColor: tZ,
          outlineColor: tZ,
          fill: tZ,
          stroke: tZ,
          borderColor: tZ,
          borderTopColor: tZ,
          borderRightColor: tZ,
          borderBottomColor: tZ,
          borderLeftColor: tZ,
          filter: et,
          WebkitFilter: et,
        },
        en = (t) => er[t];
      function es(t, e) {
        let i = en(t);
        return (
          i !== et && (i = t6),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let eo = new Set(["auto", "none", "0"]),
        ea = (t) => (180 * t) / Math.PI,
        el = (t) => eh(ea(Math.atan2(t[1], t[0]))),
        eu = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: el,
          rotateZ: el,
          skewX: (t) => ea(Math.atan(t[1])),
          skewY: (t) => ea(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        eh = (t) => ((t %= 360) < 0 && (t += 360), t),
        ed = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        ec = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        ep = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: ed,
          scaleY: ec,
          scale: (t) => (ed(t) + ec(t)) / 2,
          rotateX: (t) => eh(ea(Math.atan2(t[6], t[5]))),
          rotateY: (t) => eh(ea(Math.atan2(-t[2], t[0]))),
          rotateZ: el,
          rotate: el,
          skewX: (t) => ea(Math.atan(t[4])),
          skewY: (t) => ea(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function em(t) {
        return +!!t.includes("scale");
      }
      function ef(t, e) {
        let i, r;
        if (!t || "none" === t) return em(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) (i = ep), (r = n);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = eu), (r = e);
        }
        if (!r) return em(e);
        let s = i[e],
          o = r[1].split(",").map(eg);
        return "function" == typeof s ? s(o) : o[s];
      }
      let ev = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return ef(i, e);
      };
      function eg(t) {
        return parseFloat(t.trim());
      }
      let ey = (t) => t === tV || t === tX,
        eb = new Set(["x", "y", "z"]),
        ex = ta.filter((t) => !eb.has(t)),
        ew = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => ef(e, "x"),
          y: (t, { transform: e }) => ef(e, "y"),
        };
      (ew.translateX = ew.x), (ew.translateY = ew.y);
      let eP = new Set(),
        eS = !1,
        eT = !1;
      function eA() {
        if (eT) {
          let t = Array.from(eP).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ex.forEach((i) => {
                  let r = t.getValue(i);
                  void 0 !== r &&
                    (e.push([i, r.get()]), r.set(+!!i.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eT = !1), (eS = !1), eP.forEach((t) => t.complete()), eP.clear();
      }
      function eE() {
        eP.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eT = !0);
        });
      }
      class eM {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eP.add(this),
                eS || ((eS = !0), k.read(eE), k.resolveKeyframes(eA)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eP.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eP.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eC = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        ej = (t) => (e) => "string" == typeof e && e.startsWith(t),
        eD = ej("--"),
        eV = ej("var(--"),
        eR = (t) => !!eV(t) && ek.test(t.split("/*")[0].trim()),
        ek =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        eO = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eL = (t) => (e) => e.test(t),
        eF = [
          tV,
          tX,
          tY,
          t$,
          tq,
          tH,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eB = (t) => eF.find(eL(t));
      class e_ extends eM {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && eR((r = r.trim()))) {
              let n = (function t(e, i, r = 1) {
                o(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (t) {
                  let e = eO.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!n) return;
                let a = window.getComputedStyle(i).getPropertyValue(n);
                if (a) {
                  let t = a.trim();
                  return eC(t) ? parseFloat(t) : t;
                }
                return eR(s) ? t(s, i, r + 1) : s;
              })(r, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !tu.has(i) || 2 !== t.length))
            return;
          let [r, n] = t,
            s = eB(r),
            a = eB(n);
          if (s !== a) {
            if (ey(s) && ey(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || tj(r)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                "string" == typeof e &&
                  !eo.has(e) &&
                  t2(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = es(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = ew[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = ew[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let eI = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (t6.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        eU = (t) => null !== t;
      function eN(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(eU),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      class ez {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = I.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eE(), eA()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = I.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: r,
            velocity: n,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u,
          } = this.options;
          if (
            !u &&
            !(function (t, e, i, r) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                a = eI(n, e),
                l = eI(s, e);
              return (
                o(
                  a === l,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!a &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || P(i)) && r))
              );
            })(t, i, r, n)
          ) {
            if (tg.current || !s) {
              l && l(eN(t, this.options, e)),
                a && a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let h = this.initPlayback(t, e);
          !1 !== h &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"), (this.options.ease = "linear"));
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let eW = (t, e, i) => t + (e - t) * i;
      function e$(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function eY(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let eX = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        eH = [tz, tN, tK],
        eq = (t) => eH.find((e) => e.test(t));
      function eG(t) {
        let e = eq(t);
        if (
          (o(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tK &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = e$(a, r, t + 1 / 3)),
                  (s = e$(a, r, t)),
                  (o = e$(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let eK = (t, e) => {
          let i = eG(t),
            r = eG(e);
          if (!i || !r) return eY(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = eX(i.red, r.red, t)),
            (n.green = eX(i.green, r.green, t)),
            (n.blue = eX(i.blue, r.blue, t)),
            (n.alpha = eW(i.alpha, r.alpha, t)),
            tN.transform(n)
          );
        },
        eZ = (t, e) => (i) => e(t(i)),
        eJ = (...t) => t.reduce(eZ),
        eQ = new Set(["none", "hidden"]);
      function e0(t, e) {
        return (i) => eW(t, e, i);
      }
      function e1(t) {
        return "number" == typeof t
          ? e0
          : "string" == typeof t
          ? eR(t)
            ? eY
            : tZ.test(t)
            ? eK
            : e3
          : Array.isArray(t)
          ? e2
          : "object" == typeof t
          ? tZ.test(t)
            ? eK
            : e5
          : eY;
      }
      function e2(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => e1(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function e5(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = e1(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let e3 = (t, e) => {
        let i = t6.createTransformer(e),
          r = t2(t),
          n = t2(e);
        return r.indexes.var.length === n.indexes.var.length &&
          r.indexes.color.length === n.indexes.color.length &&
          r.indexes.number.length >= n.indexes.number.length
          ? (eQ.has(t) && !n.values.length) || (eQ.has(e) && !r.values.length)
            ? (function (t, e) {
                return eQ.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : eJ(
                e2(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (r[s] = l), n[o]++;
                    }
                    return r;
                  })(r, n),
                  n.values
                ),
                i
              )
          : (o(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eY(t, e));
      };
      function e4(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? eW(t, e, i)
          : e1(t)(t, e);
      }
      function e6(t, e, i) {
        var r, n;
        let s = Math.max(e - 5, 0);
        return (r = i - t(s)), (n = e - s) ? (1e3 / n) * r : 0;
      }
      let e9 = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function e8(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let e7 = ["duration", "bounce"],
        it = ["stiffness", "damping", "mass"];
      function ie(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ii(t = e9.visualDuration, e = e9.bounce) {
        let i;
        let r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: n, restDelta: s } = r,
          a = r.keyframes[0],
          l = r.keyframes[r.keyframes.length - 1],
          u = { done: !1, value: a },
          {
            stiffness: h,
            damping: p,
            mass: m,
            duration: f,
            velocity: v,
            isResolvedFromDuration: g,
          } = (function (t) {
            let e = {
              velocity: e9.velocity,
              stiffness: e9.stiffness,
              damping: e9.damping,
              mass: e9.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ie(t, it) && ie(t, e7)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  n = 2 * tD(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: e9.mass, stiffness: r, damping: n };
              } else {
                let i = (function ({
                  duration: t = e9.duration,
                  bounce: e = e9.bounce,
                  velocity: i = e9.velocity,
                  mass: r = e9.mass,
                }) {
                  let n, s;
                  o(
                    t <= d(e9.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let a = 1 - e;
                  (a = tD(e9.minDamping, e9.maxDamping, a)),
                    (t = tD(e9.minDuration, e9.maxDuration, c(t))),
                    a < 1
                      ? ((n = (e) => {
                          let r = e * a,
                            n = r * t;
                          return 0.001 - ((r - i) / e8(e, a)) * Math.exp(-n);
                        }),
                        (s = (e) => {
                          let r = e * a * t,
                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-r),
                            l = e8(Math.pow(e, 2), a);
                          return (
                            ((r * i + i - s) *
                              o *
                              (-n(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let l = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(n, s, 5 / t);
                  if (((t = d(t)), isNaN(l)))
                    return {
                      stiffness: e9.stiffness,
                      damping: e9.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: e9.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...r, velocity: -c(r.velocity || 0) }),
          y = v || 0,
          b = p / (2 * Math.sqrt(h * m)),
          x = l - a,
          P = c(Math.sqrt(h / m)),
          S = 5 > Math.abs(x);
        if (
          (n || (n = S ? e9.restSpeed.granular : e9.restSpeed.default),
          s || (s = S ? e9.restDelta.granular : e9.restDelta.default),
          b < 1)
        ) {
          let t = e8(P, b);
          i = (e) =>
            l -
            Math.exp(-b * P * e) *
              (((y + b * P * x) / t) * Math.sin(t * e) + x * Math.cos(t * e));
        } else if (1 === b)
          i = (t) => l - Math.exp(-P * t) * (x + (y + P * x) * t);
        else {
          let t = P * Math.sqrt(b * b - 1);
          i = (e) => {
            let i = Math.exp(-b * P * e),
              r = Math.min(t * e, 300);
            return (
              l -
              (i * ((y + b * P * x) * Math.sinh(r) + t * x * Math.cosh(r))) / t
            );
          };
        }
        let T = {
          calculatedDuration: (g && f) || null,
          next: (t) => {
            let e = i(t);
            if (g) u.done = t >= f;
            else {
              let r = 0;
              b < 1 && (r = 0 === t ? d(y) : e6(i, t, e));
              let o = Math.abs(l - e) <= s;
              u.done = Math.abs(r) <= n && o;
            }
            return (u.value = u.done ? l : e), u;
          },
          toString: () => {
            let t = Math.min(w(T), 2e4),
              e = M((e) => T.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return T;
      }
      function ir({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          b = void 0 === o ? y : o(y);
        b !== y && (g = b - p);
        let x = (t) => -g * Math.exp(-t / r),
          w = (t) => b + x(t),
          P = (t) => {
            let e = x(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? b : i);
          },
          S = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ii({
                keyframes: [m.value, v(m.value)],
                velocity: e6(w, t, m.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), P(t), S(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || P(t), m);
            },
          }
        );
      }
      let is = tb(0.42, 0, 1, 1),
        io = tb(0, 0, 0.58, 1),
        ia = tb(0.42, 0, 0.58, 1),
        il = (t) => Array.isArray(t) && "number" != typeof t[0],
        iu = {
          linear: o,
          easeIn: is,
          easeInOut: ia,
          easeOut: io,
          circIn: tE,
          circInOut: tC,
          circOut: tM,
          backIn: tS,
          backInOut: tT,
          backOut: tP,
          anticipate: tA,
        },
        ih = (t) => {
          if (T(t)) {
            o(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return tb(e, i, r, n);
          }
          return "string" == typeof t
            ? (o(void 0 !== iu[t], `Invalid easing type '${t}'`), iu[t])
            : t;
        };
      function id({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = il(r) ? r.map(ih) : ih(r),
          s = { done: !1, value: e[0] },
          a = (function (t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
            let s = t.length;
            if (
              (o(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let a = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let l = (function (t, e, i) {
                let r = [],
                  n = i || e4,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = n(t[i], t[i + 1]);
                  e && (s = eJ(Array.isArray(e) ? e[i] || o : e, s)), r.push(s);
                }
                return r;
              })(e, r, n),
              h = l.length,
              d = (i) => {
                if (a && i < t[0]) return e[0];
                let r = 0;
                if (h > 1) for (; r < t.length - 2 && !(i < t[r + 1]); r++);
                let n = u(t[r], t[r + 1], i);
                return l[r](n);
              };
            return i ? (e) => d(tD(t[0], t[s - 1], e)) : d;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = u(0, e, r);
                        t.push(eW(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || ia).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      let ic = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => k.update(e, !0),
            stop: () => O(e),
            now: () => (L.isProcessing ? L.timestamp : I.now()),
          };
        },
        ip = { decay: ir, inertia: ir, tween: id, keyframes: id, spring: ii },
        im = (t) => t / 100;
      class iv extends ez {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: r,
              keyframes: n,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || eM;
          (this.resolver = new s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: r = "keyframes",
              repeat: n = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = P(r) ? r : ip[r] || id;
          l !== id &&
            "number" != typeof t[0] &&
            ((e = eJ(im, e4(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = w(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          J.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = n;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (b = s)),
              (y = tD(0, 1, i) * h);
          }
          let x = g ? { done: !1, value: a[0] } : b.next(y);
          o && (x.value = o(x.value));
          let { done: w } = x;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== r && (x.value = eN(a, this.options, r)),
            f && f(x.value),
            P && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? c(t.calculatedDuration) : 0;
        }
        get time() {
          return c(this.currentTime);
        }
        set time(t) {
          (t = d(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = c(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = ic, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            J.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let ig = new Set(["opacity", "clipPath", "filter", "transform"]),
        iy = l(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        ib = { anticipate: tA, backInOut: tT, circInOut: tC };
      class ix extends ez {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: n,
          } = this.options;
          (this.resolver = new e_(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: r = 300,
            times: n,
            ease: s,
            type: o,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ("string" == typeof s && E() && s in ib && (s = ib[s]),
            P((i = this.options).type) ||
              "spring" === i.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && E()) ||
                  !e ||
                  ("string" == typeof e && (e in j || E())) ||
                  T(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new iv({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (n = h.times),
              (s = h.ease),
              (o = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && E()
                  ? M(e, i)
                  : T(e)
                  ? C(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || j.easeOut)
                  : j[e];
            })(a, n);
            Array.isArray(h) && (u.easing = h), V.value && J.waapi++;
            let d = t.animate(u, {
              delay: r,
              duration: n,
              easing: Array.isArray(h) ? "linear" : h,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            });
            return (
              V.value &&
                d.finished.finally(() => {
                  J.waapi--;
                }),
              d
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: r,
            times: n,
            ease: s,
          });
          return (
            (h.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (S(h, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  a.set(eN(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: n,
              type: o,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return c(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return c(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = d(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return o;
            let { animation: i } = e;
            S(i, t);
          } else this.pendingTimeline = t;
          return o;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: n,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new iv({
                ...u,
                keyframes: i,
                duration: r,
                type: n,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              c = d(this.time);
            t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            iy() &&
            i &&
            ig.has(i) &&
            !a &&
            !l &&
            !r &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let iw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        iP = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        iS = { type: "keyframes", duration: 0.8 },
        iT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        iA = (t, { keyframes: e }) =>
          e.length > 2
            ? iS
            : tl.has(t)
            ? t.startsWith("scale")
              ? iP(e[1])
              : iw
            : iT,
        iE =
          (t, e, i, r = {}, n, s) =>
          (o) => {
            let l = x(r, t) || {},
              u = l.delay || r.delay || 0,
              { elapsed: h = 0 } = r;
            h -= d(u);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -h,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                o(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && (c = { ...c, ...iA(t, c) }),
              c.duration && (c.duration = d(c.duration)),
              c.repeatDelay && (c.repeatDelay = d(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let p = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (p = !0)),
              (tg.current || a.skipAnimations) &&
                ((p = !0), (c.duration = 0), (c.delay = 0)),
              (c.allowFlatten = !l.type && !l.ease),
              p && !s && void 0 !== e.get())
            ) {
              let t = eN(c.keyframes, l);
              if (void 0 !== t)
                return (
                  k.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new b([])
                );
            }
            return !s && ix.supports(c) ? new ix(c) : new iv(c);
          };
      function iM(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        r && (o = r);
        let u = [],
          h = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let r = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(h, e))
          )
            continue;
          let a = { delay: i, ...x(o || {}, e) },
            d = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[tv];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, k);
              null !== t && ((a.startTime = t), (d = !0));
            }
          }
          tm(t, e),
            r.start(
              iE(
                e,
                r,
                n,
                t.shouldReduceMotion && tu.has(e) ? { type: !1 } : a,
                t,
                d
              )
            );
          let c = r.animation;
          c && u.push(c);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              k.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...n
                    } = v(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = tc(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, to(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function iC(t, e, i = {}) {
        var r;
        let n = v(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = n ? () => Promise.all(iM(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ij)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              iC(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ij(t, e) {
        return t.sortNodePosition(e);
      }
      function iD(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function iV(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let iR = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        ik = ["initial", ...iR],
        iO = ik.length,
        iL = [...iR].reverse(),
        iF = iR.length;
      function iB(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function i_() {
        return {
          animate: iB(!0),
          whileInView: iB(),
          whileHover: iB(),
          whileTap: iB(),
          whileDrag: iB(),
          whileFocus: iB(),
          exit: iB(),
        };
      }
      class iI {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class iU extends iI {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => iC(t, e, i)));
                          else if ("string" == typeof e) r = iC(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? v(t, e, i.custom) : e;
                            r = Promise.all(iM(t, n, i));
                          }
                          return r.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = i_(),
                  r = !0,
                  n = (e) => (i, r) => {
                    var n;
                    let s = v(
                      t,
                      r,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let { props: o } = t,
                    a =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < iO; t++) {
                          let r = ik[t],
                            n = e.props[r];
                          (iV(n) || !1 === n) && (i[r] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    d = 1 / 0;
                  for (let e = 0; e < iF; e++) {
                    var c, m;
                    let f = iL[e],
                      v = i[f],
                      g = void 0 !== o[f] ? o[f] : a[f],
                      y = iV(g),
                      b = f === s ? v.isActive : null;
                    !1 === b && (d = e);
                    let x = g === a[f] && g !== o[f] && y;
                    if (
                      (x && r && t.manuallyAnimateOnMount && (x = !1),
                      (v.protectedKeys = { ...h }),
                      (!v.isActive && null === b) ||
                        (!g && !v.prevProp) ||
                        p(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let w =
                        ((c = v.prevProp),
                        "string" == typeof (m = g)
                          ? m !== c
                          : !!Array.isArray(m) && !iD(m, c)),
                      P =
                        w || (f === s && v.isActive && !x && y) || (e > d && y),
                      S = !1,
                      T = Array.isArray(g) ? g : [g],
                      A = T.reduce(n(f), {});
                    !1 === b && (A = {});
                    let { prevResolvedValues: E = {} } = v,
                      M = { ...E, ...A },
                      C = (e) => {
                        (P = !0),
                          u.has(e) && ((S = !0), u.delete(e)),
                          (v.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = A[t],
                        i = E[t];
                      if (h.hasOwnProperty(t)) continue;
                      let r = !1;
                      (th(e) && th(i) ? iD(e, i) : e === i)
                        ? void 0 !== e && u.has(t)
                          ? C(t)
                          : (v.protectedKeys[t] = !0)
                        : null != e
                        ? C(t)
                        : u.add(t);
                    }
                    (v.prevProp = g),
                      (v.prevResolvedValues = A),
                      v.isActive && (h = { ...h, ...A }),
                      r && t.blockInitialAnimation && (P = !1);
                    let j = !(x && w) || S;
                    P &&
                      j &&
                      l.push(
                        ...T.map((t) => ({
                          animation: t,
                          options: { type: f },
                        }))
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ("boolean" != typeof o.initial) {
                      let i = v(
                        t,
                        Array.isArray(o.initial) ? o.initial[0] : o.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    u.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      l.push({ animation: e });
                  }
                  let f = !!l.length;
                  return (
                    r &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (r = !1),
                    f ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = i_()), (r = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          p(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let iN = 0;
      class iz extends iI {
        constructor() {
          super(...arguments), (this.id = iN++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            r.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function iW(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      function i$(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iY = (t) => (e) => Y(e) && t(e, i$(e));
      function iX(t, e, i, r) {
        return iW(t, e, iY(i), r);
      }
      function iH({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function iq(t) {
        return t.max - t.min;
      }
      function iG(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = eW(e.min, e.max, t.origin)),
          (t.scale = iq(i) / iq(e)),
          (t.translate = eW(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iK(t, e, i, r) {
        iG(t.x, e.x, i.x, r ? r.originX : void 0),
          iG(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function iZ(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iq(e));
      }
      function iJ(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iq(e));
      }
      function iQ(t, e, i) {
        iJ(t.x, e.x, i.x), iJ(t.y, e.y, i.y);
      }
      let i0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i1 = () => ({ x: i0(), y: i0() }),
        i2 = () => ({ min: 0, max: 0 }),
        i5 = () => ({ x: i2(), y: i2() });
      function i3(t) {
        return [t("x"), t("y")];
      }
      function i4(t) {
        return void 0 === t || 1 === t;
      }
      function i6({ scale: t, scaleX: e, scaleY: i }) {
        return !i4(t) || !i4(e) || !i4(i);
      }
      function i9(t) {
        return (
          i6(t) ||
          i8(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function i8(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function i7(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function rt(t, e = 0, i = 1, r, n) {
        (t.min = i7(t.min, e, i, r, n)), (t.max = i7(t.max, e, i, r, n));
      }
      function re(t, { x: e, y: i }) {
        rt(t.x, e.translate, e.scale, e.originPoint),
          rt(t.y, i.translate, i.scale, i.originPoint);
      }
      function ri(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function rr(t, e, i, r, n = 0.5) {
        let s = eW(t.min, t.max, n);
        rt(t, e, i, s, r);
      }
      function rn(t, e) {
        rr(t.x, e.x, e.scaleX, e.scale, e.originX),
          rr(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function rs(t, e) {
        return iH(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ro = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function ra(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let rl = (t, e) => Math.abs(t - e);
      class ru {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = rc(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(rl(t.x, e.x) ** 2 + rl(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = L;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = rh(e, this.transformPagePoint)),
                k.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = rc(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : rh(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), r && r(t, s);
            }),
            !Y(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window);
          let s = rh(i$(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = L;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, rc(s, this.history)),
            (this.removeListeners = eJ(
              iX(this.contextWindow, "pointermove", this.handlePointerMove),
              iX(this.contextWindow, "pointerup", this.handlePointerUp),
              iX(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), O(this.updatePoint);
        }
      }
      function rh(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function rd(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function rc({ point: t }, e) {
        return {
          point: t,
          delta: rd(t, rp(e)),
          offset: rd(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = rp(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > d(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = c(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function rp(t) {
        return t[t.length - 1];
      }
      function rm(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function rf(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function rv(t, e, i) {
        return { min: rg(t, e), max: rg(t, i) };
      }
      function rg(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let ry = new WeakMap();
      class rb {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i5()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new ru(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(i$(t).point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: r,
                  dragPropagation: n,
                  onDragStart: s,
                } = this.getProps();
                if (
                  r &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === (i = r) || "y" === i
                      ? U[i]
                        ? null
                        : ((U[i] = !0),
                          () => {
                            U[i] = !1;
                          })
                      : U.x || U.y
                      ? null
                      : ((U.x = U.y = !0),
                        () => {
                          U.x = U.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  i3((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tY.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let r = i.layout.layoutBox[t];
                        r && (e = iq(r) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && k.postRender(() => s(t, e)),
                  tm(this.visualElement, "transform");
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: r,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                i3((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: ro(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && k.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !rx(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? eW(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? eW(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && ra(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: rm(t.x, i, n), y: rm(t.y, e, r) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: rv(t, "left", "right"), y: rv(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              i3((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !ra(e)) return !1;
          let r = e.current;
          o(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = rs(t, i),
                { scroll: n } = e;
              return n && (ri(r.x, n.offset.x), ri(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            a = { x: rf((t = n.layout.layoutBox).x, s.x), y: rf(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!t), t && (a = iH(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            i3((o) => {
              if (!rx(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            tm(this.visualElement, t),
            i.start(iE(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          i3((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          i3((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          i3((e) => {
            let { drag: i } = this.getProps();
            if (!rx(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - eW(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!ra(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          i3((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = iq(t),
                  n = iq(e);
                return (
                  n > r
                    ? (i = u(e.min, e.max - r, t.min))
                    : r > n && (i = u(t.min, t.max - n, e.min)),
                  tD(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            i3((e) => {
              if (!rx(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(eW(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ry.set(this.visualElement, this);
          let t = iX(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              ra(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            k.read(e);
          let n = iW(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (i3((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function rx(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class rw extends iI {
        constructor(t) {
          super(t),
            (this.removeGroupControls = o),
            (this.removeListeners = o),
            (this.controls = new rb(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || o);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let rP = (t) => (e, i) => {
        t && k.postRender(() => t(e, i));
      };
      class rS extends iI {
        constructor() {
          super(...arguments), (this.removePointerDownListener = o);
        }
        onPointerDown(t) {
          this.session = new ru(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ro(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: rP(t),
            onStart: rP(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, r && k.postRender(() => r(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iX(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var rT,
        rA,
        rE = i(7876),
        rM = i(4232),
        rC = i(3885),
        rj = i(5048);
      let rD = (0, rM.createContext)({}),
        rV = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rR(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rk = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tX.test(t)) return t;
              t = parseFloat(t);
            }
            let i = rR(t, e.target.x),
              r = rR(t, e.target.y);
            return `${i}% ${r}%`;
          },
        },
        rO = {};
      class rL extends rM.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          !(function (t) {
            for (let e in t)
              (rO[e] = t[e]), eD(e) && (rO[e].isCSSVariable = !0);
          })(rB),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rV.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    k.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            B.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rF(t) {
        let [e, i] = (0, rC.xQ)(),
          r = (0, rM.useContext)(rj.L);
        return (0, rE.jsx)(rL, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, rM.useContext)(rD),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let rB = {
          borderRadius: {
            ...rk,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rk,
          borderTopRightRadius: rk,
          borderBottomLeftRadius: rk,
          borderBottomRightRadius: rk,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = t6.parse(t);
              if (r.length > 5) return t;
              let n = t6.createTransformer(t),
                s = +("number" != typeof r[0]),
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (r[0 + s] /= o), (r[1 + s] /= a);
              let l = eW(o, a, 0.5);
              return (
                "number" == typeof r[2 + s] && (r[2 + s] /= l),
                "number" == typeof r[3 + s] && (r[3 + s] /= l),
                n(r)
              );
            },
          },
        },
        r_ = (t, e) => t.depth - e.depth;
      class rI {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          n(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          s(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(r_),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function rU(t) {
        let e = tp(t) ? t.get() : t;
        return td(e) ? e.toValue() : e;
      }
      let rN = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rz = rN.length,
        rW = (t) => ("string" == typeof t ? parseFloat(t) : t),
        r$ = (t) => "number" == typeof t || tX.test(t);
      function rY(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rX = rq(0, 0.5, tM),
        rH = rq(0.5, 0.95, o);
      function rq(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(u(t, e, r)));
      }
      function rG(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rK(t, e) {
        rG(t.x, e.x), rG(t.y, e.y);
      }
      function rZ(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function rJ(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function rQ(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (tY.test(e) &&
              ((e = parseFloat(e)), (e = eW(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = eW(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = rJ(t.min, e, i, a, n)),
            (t.max = rJ(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let r0 = ["x", "scaleX", "originX"],
        r1 = ["y", "scaleY", "originY"];
      function r2(t, e, i, r) {
        rQ(t.x, e, r0, i ? i.x : void 0, r ? r.x : void 0),
          rQ(t.y, e, r1, i ? i.y : void 0, r ? r.y : void 0);
      }
      function r5(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function r3(t) {
        return r5(t.x) && r5(t.y);
      }
      function r4(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function r6(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function r9(t, e) {
        return r6(t.x, e.x) && r6(t.y, e.y);
      }
      function r8(t) {
        return iq(t.x) / iq(t.y);
      }
      function r7(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nt {
        constructor() {
          this.members = [];
        }
        add(t) {
          n(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (s(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ne = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        ni = ["", "X", "Y", "Z"],
        nr = { visibility: "hidden" },
        nn = 0;
      function ns(t, e, i, r) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function no({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nn++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  V.value &&
                    (ne.nodes =
                      ne.calculatedTargetDeltas =
                      ne.calculatedProjections =
                        0),
                  this.nodes.forEach(nu),
                  this.nodes.forEach(nv),
                  this.nodes.forEach(ng),
                  this.nodes.forEach(nh),
                  V.addProjectionMetrics && V.addProjectionMetrics(ne);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rI());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new h()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = I.now(),
                      r = ({ timestamp: n }) => {
                        let s = n - i;
                        s >= 250 && (O(r), t(s - e));
                      };
                    return k.read(r, !0), () => O(r);
                  })(r, 250)),
                  rV.hasAnimatedSinceResize &&
                    ((rV.hasAnimatedSinceResize = !1), this.nodes.forEach(nf));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nS,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !r9(this.targetLayout, r),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...x(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nf(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              O(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ny),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let r = i.props[tv];
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      k,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nc);
              return;
            }
            this.isUpdating || this.nodes.forEach(np),
              (this.isUpdating = !1),
              this.nodes.forEach(nm),
              this.nodes.forEach(na),
              this.nodes.forEach(nl),
              this.clearAllSnapshots();
            let t = I.now();
            (L.delta = tD(0, 1e3 / 60, t - L.timestamp)),
              (L.timestamp = t),
              (L.isProcessing = !0),
              F.update.process(L),
              F.preRender.process(L),
              F.render.process(L),
              (L.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), B.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nd), this.sharedNodes.forEach(nb);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              k.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            k.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                iq(this.snapshot.measuredBox.x) ||
                iq(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i5()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !r3(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || i9(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              nE((e = r).x),
              nE(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return i5();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(nC)
              )
            ) {
              let { scroll: t } = this.root;
              t && (ri(i.x, t.offset.x), ri(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = i5();
            if (
              (rK(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e],
                { scroll: n, options: s } = r;
              r !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && rK(i, t),
                ri(i.x, n.offset.x),
                ri(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = i5();
            rK(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rn(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                i9(r.latestValues) && rn(i, r.latestValues);
            }
            return i9(this.latestValues) && rn(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i5();
            rK(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !i9(i.latestValues)) continue;
              i6(i.latestValues) && i.updateSnapshot();
              let r = i5();
              rK(r, i.measurePageBox()),
                r2(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return i9(this.latestValues) && r2(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== L.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = L.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i5()),
                    (this.relativeTargetOrigin = i5()),
                    iQ(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    rK(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i5()), (this.targetWithTransforms = i5())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      iZ(i.x, r.x, n.x),
                      iZ(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rK(this.target, this.layout.layoutBox),
                      re(this.target, this.targetDelta))
                    : rK(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i5()),
                      (this.relativeTargetOrigin = i5()),
                      iQ(this.relativeTargetOrigin, this.target, t.target),
                      rK(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                V.value && ne.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              i6(this.parent.latestValues) ||
              i8(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === L.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            rK(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      rn(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), re(t, s)),
                    r && i9(n.latestValues) && rn(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = i5()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (rZ(this.prevProjectionDelta.x, this.projectionDelta.x),
                rZ(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iK(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                r7(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                r7(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              V.value && ne.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = i1()),
              (this.projectionDelta = i1()),
              (this.projectionDeltaWithTransform = i1());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = i1();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = i5(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(nP)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (nx(o.x, t.x, r),
                  nx(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m, f, v;
                  if (
                    (iQ(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    (f = a),
                    (v = r),
                    nw(p.x, m.x, f.x, v),
                    nw(p.y, m.y, f.y, v),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      r4(u.x, c.x) && r4(u.y, c.y)))
                  )
                    this.isProjectionDirty = !1;
                  i || (i = i5()), rK(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = eW(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          rX(r)
                        )),
                        (t.opacityExit = eW(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          rH(r)
                        )))
                      : s &&
                        (t.opacity = eW(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r
                        ));
                    for (let n = 0; n < rz; n++) {
                      let s = `border${rN[n]}Radius`,
                        o = rY(e, s),
                        a = rY(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || r$(o) === r$(a)
                          ? ((t[s] = Math.max(eW(rW(o), rW(a), r), 0)),
                            (tY.test(a) || tY.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = eW(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (O(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = k.update(() => {
                (rV.hasAnimatedSinceResize = !0),
                  J.layout++,
                  (this.currentAnimation = (function (t, e, i) {
                    let r = tp(0) ? 0 : to(t);
                    return r.start(iE("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      J.layout--;
                    },
                    onComplete: () => {
                      J.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                nM(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || i5();
                let e = iq(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = iq(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              rK(e, i),
                rn(e, n),
                iK(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nt()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            i.z && ns("z", t, r, this.animationValues);
            for (let e = 0; e < ni.length; e++)
              ns(`rotate${ni[e]}`, t, r, this.animationValues),
                ns(`skew${ni[e]}`, t, r, this.animationValues);
            for (let e in (t.render(), r))
              t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nr;
            let r = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  rU(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    rU(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !i9(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = (function (t, e, i) {
                let r = "",
                  n = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || s || o) &&
                    (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    n && (r += `rotateX(${n}deg) `),
                    s && (r += `rotateY(${s}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            rO)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i, isCSSVariable: n } = rO[t],
                a = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = a;
              } else
                n
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (r[t] = a);
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? rU(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nc),
              this.root.sharedNodes.clear();
          }
        };
      }
      function na(t) {
        t.updateLayout();
      }
      function nl(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? i3((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = iq(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : nM(n, i.layoutBox, e) &&
              i3((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = iq(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = i1();
          iK(o, e, i.layoutBox);
          let a = i1();
          s
            ? iK(a, t.applyTransform(r, !0), i.measuredBox)
            : iK(a, e, i.layoutBox);
          let l = !r3(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = i5();
                iQ(o, i.layoutBox, n.layoutBox);
                let a = i5();
                iQ(a, e, s.layoutBox),
                  r9(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nu(t) {
        V.value && ne.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nh(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nd(t) {
        t.clearSnapshot();
      }
      function nc(t) {
        t.clearMeasurements();
      }
      function np(t) {
        t.isLayoutDirty = !1;
      }
      function nm(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nf(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nv(t) {
        t.resolveTargetDelta();
      }
      function ng(t) {
        t.calcProjection();
      }
      function ny(t) {
        t.resetSkewAndRotation();
      }
      function nb(t) {
        t.removeLeadSnapshot();
      }
      function nx(t, e, i) {
        (t.translate = eW(e.translate, 0, i)),
          (t.scale = eW(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nw(t, e, i, r) {
        (t.min = eW(e.min, i.min, r)), (t.max = eW(e.max, i.max, r));
      }
      function nP(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nT = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nA = nT("applewebkit/") && !nT("chrome/") ? Math.round : o;
      function nE(t) {
        (t.min = nA(t.min)), (t.max = nA(t.max));
      }
      function nM(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(r8(e) - r8(i))))
        );
      }
      function nC(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let nj = no({
          attachResizeListener: (t, e) => iW(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nD = { current: void 0 },
        nV = no({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nD.current) {
              let t = new nj({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nD.current = t);
            }
            return nD.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function nR(t, e, i) {
        let { props: r } = t;
        t.animationState &&
          r.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let n = r["onHover" + i];
        n && k.postRender(() => n(e, i$(e)));
      }
      class nk extends iI {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [r, n, s] = N(t, i),
                o = (t) => {
                  if (!z(t)) return;
                  let { target: i } = t,
                    r = e(i, t);
                  if ("function" != typeof r || !i) return;
                  let s = (t) => {
                    z(t) && (r(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, n);
                };
              return (
                r.forEach((t) => {
                  t.addEventListener("pointerenter", o, n);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                nR(this.node, e, "Start"), (t) => nR(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class nO extends iI {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = eJ(
            iW(this.node.current, "focus", () => this.onFocus()),
            iW(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function nL(t, e, i) {
        let { props: r } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          r.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let n = r["onTap" + ("End" === i ? "" : i)];
        n && k.postRender(() => n(e, i$(e)));
      }
      class nF extends iI {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [r, n, s] = N(t, i),
                o = (t) => {
                  let i = t.currentTarget;
                  if (!i || !Z(t) || H.has(i)) return;
                  H.add(i), W(t, "set");
                  let r = e(i, t),
                    s = (t, e) => {
                      i.removeEventListener("pointerup", o),
                        i.removeEventListener("pointercancel", a),
                        W(t, "release"),
                        Z(t) &&
                          H.has(i) &&
                          (H.delete(i),
                          "function" == typeof r && r(t, { success: e }));
                    },
                    o = (t) => {
                      var e, r;
                      t.isTrusted &&
                      ((e = t),
                      (r =
                        i instanceof Element
                          ? i.getBoundingClientRect()
                          : {
                              left: 0,
                              top: 0,
                              right: window.innerWidth,
                              bottom: window.innerHeight,
                            }),
                      e.clientX < r.left ||
                        e.clientX > r.right ||
                        e.clientY < r.top ||
                        e.clientY > r.bottom)
                        ? s(t, !1)
                        : s(t, !(i instanceof Element) || $(i, t.target));
                    },
                    a = (t) => {
                      s(t, !1);
                    };
                  i.addEventListener("pointerup", o, n),
                    i.addEventListener("pointercancel", a, n),
                    i.addEventListener("lostpointercapture", a, n);
                };
              return (
                r.forEach((t) => {
                  t = i.useGlobalTarget ? window : t;
                  let e = !1;
                  if (t instanceof HTMLElement) {
                    var r;
                    (e = !0),
                      (r = t),
                      !X.has(r.tagName) &&
                        -1 === r.tabIndex &&
                        null === t.getAttribute("tabindex") &&
                        (t.tabIndex = 0);
                  }
                  t.addEventListener("pointerdown", o, n),
                    e && t.addEventListener("focus", (t) => K(t, n), n);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                nL(this.node, e, "Start"),
                (t, { success: e }) => nL(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let nB = new WeakMap(),
        n_ = new WeakMap(),
        nI = (t) => {
          let e = nB.get(t.target);
          e && e(t);
        },
        nU = (t) => {
          t.forEach(nI);
        },
        nN = { some: 0, all: 1 };
      class nz extends iI {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : nN[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              n_.has(i) || n_.set(i, {});
              let r = n_.get(i),
                n = JSON.stringify(e);
              return (
                r[n] ||
                  (r[n] = new IntersectionObserver(nU, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              nB.set(t, i),
              r.observe(t),
              () => {
                nB.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nW = (0, rM.createContext)({ strict: !1 });
      var n$ = i(9751);
      let nY = (0, rM.createContext)({});
      function nX(t) {
        return p(t.animate) || ik.some((e) => iV(t[e]));
      }
      function nH(t) {
        return !!(nX(t) || t.variants);
      }
      function nq(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var nG = i(2205);
      let nK = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nZ = {};
      for (let t in nK) nZ[t] = { isEnabled: (e) => nK[t].some((t) => !!e[t]) };
      let nJ = Symbol.for("motionComponentSymbol");
      var nQ = i(3866),
        n0 = i(181);
      function n1(t, { layout: e, layoutId: i }) {
        return (
          tl.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!rO[t] || "opacity" === t))
        );
      }
      let n2 = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        n5 = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        n3 = ta.length;
      function n4(t, e, i) {
        let { style: r, vars: n, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (tl.has(t)) {
            o = !0;
            continue;
          }
          if (eD(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = n2(i, ei[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (r.transform = (function (t, e, i) {
                  let r = "",
                    n = !0;
                  for (let s = 0; s < n3; s++) {
                    let o = ta[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!o.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = n2(a, ei[o]);
                      if (!l) {
                        n = !1;
                        let e = n5[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, n ? "" : r)) : n && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let n6 = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function n9(t, e, i) {
        for (let r in e) tp(e[r]) || n1(r, i) || (t[r] = e[r]);
      }
      var n8 = i(5003);
      let n7 = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function st(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (n7.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let se = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        si = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function sr(t, e, i) {
        return "string" == typeof t ? t : tX.transform(e + i * t);
      }
      function sn(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((n4(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let r = sr(e, t.x, t.width),
                n = sr(i, t.y, t.height);
              return `${r} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== r && (c.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? se : si;
              t[s.offset] = tX.transform(-r);
              let o = tX.transform(e),
                a = tX.transform(i);
              t[s.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let ss = () => ({ ...n6(), attrs: {} }),
        so = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var sa = i(1200);
      let sl = (t) => (e, i) => {
        let r = (0, rM.useContext)(nY),
          n = (0, rM.useContext)(nQ.t),
          s = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: i,
              },
              r,
              n,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, r) {
                  let n = {},
                    s = r(t, {});
                  for (let t in s) n[t] = rU(s[t]);
                  let { initial: o, animate: a } = t,
                    l = nX(t),
                    u = nH(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    d = (h = h || !1 === o) ? a : o;
                  if (d && "boolean" != typeof d && !p(d)) {
                    let e = Array.isArray(d) ? d : [d];
                    for (let i = 0; i < e.length; i++) {
                      let r = f(t, e[i]);
                      if (r) {
                        let { transitionEnd: t, transition: e, ...i } = r;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (n[t] = e);
                        }
                        for (let e in t) n[e] = t[e];
                      }
                    }
                  }
                  return n;
                })(r, n, s, t),
                renderState: e(),
              };
              return (
                i &&
                  ((o.onMount = (t) => i({ props: r, current: t, ...o })),
                  (o.onUpdate = (t) => i(t))),
                o
              );
            })(t, e, r, n);
        return i ? s() : (0, sa.M)(s);
      };
      function su(t, e, i) {
        var r;
        let { style: n } = t,
          s = {};
        for (let o in n)
          (tp(n[o]) ||
            (e.style && tp(e.style[o])) ||
            n1(o, t) ||
            (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (s[o] = n[o]);
        return s;
      }
      let sh = {
        useVisualState: sl({
          scrapeMotionValuesFromProps: su,
          createRenderState: n6,
        }),
      };
      function sd(t, e) {
        try {
          e.dimensions =
            "function" == typeof t.getBBox
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch (t) {
          e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
      function sc(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let sp = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function sm(t, e, i, r) {
        for (let i in (sc(t, e, void 0, r), e.attrs))
          t.setAttribute(sp.has(i) ? i : tf(i), e.attrs[i]);
      }
      function sf(t, e, i) {
        let r = su(t, e, i);
        for (let i in t)
          (tp(t[i]) || tp(e[i])) &&
            (r[
              -1 !== ta.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      let sv = ["x", "y", "width", "height", "cx", "cy", "r"],
        sg = {
          useVisualState: sl({
            scrapeMotionValuesFromProps: sf,
            createRenderState: ss,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: i,
              renderState: r,
              latestValues: n,
            }) => {
              if (!i) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in n)
                  if (tl.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let i = 0; i < sv.length; i++) {
                  let r = sv[i];
                  t[r] !== e[r] && (o = !0);
                }
              o &&
                k.read(() => {
                  sd(i, r),
                    k.render(() => {
                      sn(r, n, so(i.tagName), t.transformTemplate), sm(i, r);
                    });
                });
            },
          }),
        },
        sy = { current: null },
        sb = { current: !1 },
        sx = [...eF, tZ, t6],
        sw = (t) => sx.find(eL(t)),
        sP = new WeakMap(),
        sS = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sT {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eM),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = I.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), k.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = nX(e)),
            (this.isVariantNode = nH(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && tp(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            sP.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sb.current ||
              (function () {
                if (((sb.current = !0), nG.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (sy.current = t.matches);
                    t.addListener(e), e();
                  } else sy.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || sy.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          O(this.notifyUpdate),
          O(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = tl.has(t);
          r && this.onBindTransform && this.onBindTransform();
          let n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && k.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nZ) {
            let e = nZ[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i5();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < sS.length; e++) {
            let i = sS[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                s = i[r];
              if (tp(n)) t.addValue(r, n);
              else if (tp(s)) t.addValue(r, to(n, { owner: t }));
              else if (s !== n) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, to(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = to(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && (eC(r) || tj(r))
                ? (r = parseFloat(r))
                : !sw(r) && t6.test(e) && (r = es(t, e)),
              this.setBaseTarget(t, tp(r) ? r.get() : r)),
            tp(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let n = f(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || tp(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new h()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class sA extends sT {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e_);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          tp(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sE extends sA {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = sc);
        }
        readValueFromInstance(t, e) {
          if (tl.has(e)) return ev(t, e);
          {
            let i = window.getComputedStyle(t),
              r = (eD(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return rs(t, e);
        }
        build(t, e, i) {
          n4(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return su(t, e, i);
        }
      }
      class sM extends sA {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = i5),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                sd(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (tl.has(e)) {
            let t = en(e);
            return (t && t.default) || 0;
          }
          return (e = sp.has(e) ? e : tf(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sf(t, e, i);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            k.postRender(this.updateDimensions);
        }
        build(t, e, i) {
          sn(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          sm(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = so(t.tagName)), super.mount(t);
        }
      }
      let sC = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((rT = {
          animation: { Feature: iU },
          exit: { Feature: iz },
          inView: { Feature: nz },
          tap: { Feature: nF },
          focus: { Feature: nO },
          hover: { Feature: nk },
          pan: { Feature: rS },
          drag: { Feature: rw, ProjectionNode: nV, MeasureLayout: rF },
          layout: { ProjectionNode: nV, MeasureLayout: rF },
        }),
        (rA = (t, e) =>
          st(t)
            ? new sM(e)
            : new sE(e, { allowProjection: t !== rM.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: i,
            useVisualState: r,
            Component: n,
          }) {
            var s, o;
            function a(t, s) {
              var o, a, l;
              let u;
              let h = {
                  ...(0, rM.useContext)(n$.Q),
                  ...t,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, rM.useContext)(rj.L).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(t),
                },
                { isStatic: d } = h,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nX(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || iV(e) ? e : void 0,
                        animate: iV(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, rM.useContext)(nY));
                  return (0, rM.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [nq(e), nq(i)]
                  );
                })(t),
                p = r(t, d);
              if (!d && nG.B) {
                (a = 0), (l = 0), (0, rM.useContext)(nW).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nZ;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(h);
                (u = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, r, n) {
                    var s, o;
                    let { visualElement: a } = (0, rM.useContext)(nY),
                      l = (0, rM.useContext)(nW),
                      u = (0, rM.useContext)(nQ.t),
                      h = (0, rM.useContext)(n$.Q).reducedMotion,
                      d = (0, rM.useRef)(null);
                    (r = r || l.renderer),
                      !d.current &&
                        r &&
                        (d.current = r(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, rM.useContext)(rD);
                    c &&
                      !c.projection &&
                      n &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && ra(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, n, p);
                    let m = (0, rM.useRef)(!1);
                    (0, rM.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[tv],
                      v = (0, rM.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      (0, n0.E)(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          B.render(c.render),
                          v.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, rM.useEffect)(() => {
                        c &&
                          (!v.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (v.current = !1)));
                      }),
                      c
                    );
                  })(n, p, h, e, t.ProjectionNode));
              }
              return (0, rE.jsxs)(nY.Provider, {
                value: c,
                children: [
                  u && c.visualElement
                    ? (0, rE.jsx)(u, { visualElement: c.visualElement, ...h })
                    : null,
                  i(
                    n,
                    t,
                    ((o = c.visualElement),
                    (0, rM.useCallback)(
                      (t) => {
                        t && p.onMount && p.onMount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          s &&
                            ("function" == typeof s
                              ? s(t)
                              : ra(s) && (s.current = t));
                      },
                      [o]
                    )),
                    p,
                    d,
                    c.visualElement
                  ),
                ],
              });
            }
            t &&
              (function (t) {
                for (let e in t) nZ[e] = { ...nZ[e], ...t[e] };
              })(t),
              (a.displayName = `motion.${
                "string" == typeof n
                  ? n
                  : `create(${
                      null !==
                        (o =
                          null !== (s = n.displayName) && void 0 !== s
                            ? s
                            : n.name) && void 0 !== o
                        ? o
                        : ""
                    })`
              }`);
            let l = (0, rM.forwardRef)(a);
            return (l[nJ] = n), l;
          })({
            ...(st(t) ? sg : sh),
            preloadedFeatures: rT,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: n }, s) => {
                let o = (
                    st(e)
                      ? function (t, e, i, r) {
                          let n = (0, rM.useMemo)(() => {
                            let i = ss();
                            return (
                              sn(i, e, so(r), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            n9(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                n9(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, rM.useMemo)(() => {
                                      let i = n6();
                                      return (
                                        n4(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, n, s, e),
                  a = (0, n8.J)(i, "string" == typeof e, t),
                  l = e !== rM.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = i,
                  h = (0, rM.useMemo)(() => (tp(u) ? u.get() : u), [u]);
                return (0, rM.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: rA,
            Component: t,
          });
        })
      );
    },
    2622: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "A", {
        enumerable: !0,
        get: function () {
          return c;
        },
      });
      var r = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(i(4587)),
        n = (function (t, e) {
          if (t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var i = a(e);
          if (i && i.has(t)) return i.get(t);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
              var o = n ? Object.getOwnPropertyDescriptor(t, s) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, s, o)
                : (r[s] = t[s]);
            }
          return (r.default = t), i && i.set(t, r), r;
        })(i(4232));
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function a(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          i = new WeakMap();
        return (a = function (t) {
          return t ? i : e;
        })(t);
      }
      var l = function (t) {
          var e,
            i = t.filePath,
            r =
              (null === (e = i.split("\\").pop()) || void 0 === e
                ? void 0
                : e.split("/").pop()) || "",
            n = i.split(r).shift(),
            s = i.split(".").pop();
          return {
            path: n,
            filename: r.substring(0, r.lastIndexOf(".")) || r,
            extension: s || "",
          };
        },
        u = function (t, e, i) {
          var r = l({ filePath: t }),
            n = r.filename,
            s = r.path,
            o = r.extension;
          if (!["JPG", "JPEG", "WEBP", "PNG", "AVIF"].includes(o.toUpperCase()))
            return t;
          var a = o;
          i && ["JPG", "JPEG", "PNG"].includes(o.toUpperCase()) && (a = "WEBP");
          var u = s;
          "/" != (null == u ? void 0 : u.substr(-1)) && (u += "/");
          var h = t.includes("_next/static/media"),
            d = ""
              .concat(h ? "" : u, "nextImageExportOptimizer/")
              .concat(n, "-opt-")
              .concat(e, ".")
              .concat(a.toUpperCase());
          return "/" !== d.charAt(0) && (d = "/" + d), d;
        },
        h = function (t) {
          var e = t.src,
            i = t.width,
            r = t.useWebp;
          return u("object" == typeof e ? e.src : e, i, r);
        },
        d = function (t) {
          var e = t.src;
          return "object" == typeof e ? e.src : e;
        },
        c = function (t) {
          var e,
            i = t.src,
            a = t.priority,
            l = void 0 !== a && a,
            c = t.loading,
            p = t.lazyRoot,
            m = void 0 === p ? null : p,
            f = t.lazyBoundary,
            v = void 0 === f ? "200px" : f,
            g = t.className,
            y = t.quality,
            b = t.width,
            x = t.height,
            w = t.objectFit,
            P = t.objectPosition,
            S = t.useWebp,
            T = void 0 === S || S,
            A = t.onLoadingComplete,
            E = t.unoptimized,
            M = t.placeholder,
            C = void 0 === M ? "blur" : M,
            j = t.blurDataURL,
            D = t.onError,
            V = (function (t, e) {
              if (null == t) return {};
              var i,
                r,
                n = (function (t, e) {
                  if (null == t) return {};
                  var i,
                    r,
                    n = {},
                    s = Object.keys(t);
                  for (r = 0; r < s.length; r++)
                    (i = s[r]), e.indexOf(i) >= 0 || (n[i] = t[i]);
                  return n;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (r = 0; r < s.length; r++)
                  (i = s[r]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (n[i] = t[i]);
              }
              return n;
            })(t, [
              "src",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "objectFit",
              "objectPosition",
              "useWebp",
              "onLoadingComplete",
              "unoptimized",
              "placeholder",
              "blurDataURL",
              "onError",
            ]),
            R =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, n.useState)(!1))) ||
              (function (t, e) {
                var i,
                  r,
                  n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                if (null != n) {
                  var s = [],
                    o = !0,
                    a = !1;
                  try {
                    for (
                      n = n.call(t);
                      !(o = (i = n.next()).done) &&
                      (s.push(i.value), s.length !== e);
                      o = !0
                    );
                  } catch (t) {
                    (a = !0), (r = t);
                  } finally {
                    try {
                      o || null == n.return || n.return();
                    } finally {
                      if (a) throw r;
                    }
                  }
                  return s;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return s(t, 2);
                  var i = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === i &&
                      t.constructor &&
                      (i = t.constructor.name),
                    "Map" === i || "Set" === i)
                  )
                    return Array.from(i);
                  if (
                    "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  )
                    return s(t, e);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            k = R[0],
            O = R[1],
            L = (0, n.useMemo)(
              function () {
                if (j) return j;
                var t = "object" == typeof i ? i.src : i;
                return !0 === E ? t : u(t, 10, T);
              },
              [j, i, E]
            );
          return n.default.createElement(
            r.default,
            o(
              {},
              V,
              "object" == typeof i && i.width && { width: i.width },
              "object" == typeof i && i.height && { height: i.height },
              b && { width: b },
              x && { height: x },
              c && { loading: c },
              m && { lazyRoot: m },
              v && { lazyBoundary: v },
              g && { className: g },
              y && { quality: y },
              w && { objectFit: w },
              P && { objectPosition: P },
              A && { onLoadingComplete: A },
              C && { placeholder: C },
              E && { unoptimized: E },
              l && { priority: l },
              k && { unoptimized: !0 },
              {
                loader:
                  k || !0 === E
                    ? d
                    : function (t) {
                        return h({ src: i, width: t.width, useWebp: T });
                      },
                blurDataURL: L,
                onError: function (t) {
                  O(!0), D && D(t);
                },
                onLoadingComplete: function (t) {
                  0 === t.naturalWidth && O(!0), A && A(t);
                },
                src: "object" == typeof i ? i.src : i,
              }
            )
          );
        };
    },
    3620: (t, e, i) => {
      "use strict";
      i.d(e, { k5: () => h });
      var r = i(4232),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = r.createContext && r.createContext(n),
        o = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var r, n, s;
                (r = t),
                  (n = e),
                  (s = i[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var r = i.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(n)) in r
                    ? Object.defineProperty(r, n, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[n] = s);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function h(t) {
        return (e) =>
          r.createElement(
            d,
            a({ attr: u({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  r.createElement(e.tag, u({ key: i }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function d(t) {
        var e = (e) => {
          var i,
            { attr: n, size: s, title: l } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var i,
                r,
                n = (function (t, e) {
                  if (null == t) return {};
                  var i = {};
                  for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                      if (e.indexOf(r) >= 0) continue;
                      i[r] = t[r];
                    }
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (r = 0; r < s.length; r++)
                  (i = s[r]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (n[i] = t[i]);
              }
              return n;
            })(t, o),
            d = s || e.size || "1em";
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + " " : "") + t.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                n,
                h,
                {
                  className: i,
                  style: u(u({ color: t.color || e.color }, e.style), t.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && r.createElement("title", null, l),
              t.children
            )
          );
        };
        return void 0 !== s
          ? r.createElement(s.Consumer, null, (t) => e(t))
          : e(n);
      }
    },
    3657: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = i(4252),
        n = i(4915),
        s = i(2439),
        o = r._(i(3829));
      function a(t) {
        let { props: e } = (0, n.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "custom",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    3829: (t, e) => {
      "use strict";
      function i(t) {
        var e;
        let { config: i, src: r, width: n, quality: s } = t,
          o =
            s ||
            (null == (e = i.qualities)
              ? void 0
              : e.reduce((t, e) =>
                  Math.abs(e - 75) < Math.abs(t - 75) ? e : t
                )) ||
            75;
        return (
          i.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          o +
          (r.startsWith("/_next/static/media/")
            ? "&dpl=dpl_CL4AU1Dz7NhyCpBqXgjB4HTpQpVS"
            : "")
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i.__next_img_default = !0);
      let r = i;
    },
    3866: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => r });
      let r = (0, i(4232).createContext)(null);
    },
    3885: (t, e, i) => {
      "use strict";
      i.d(e, { xQ: () => s });
      var r = i(4232),
        n = i(3866);
      function s(t = !0) {
        let e = (0, r.useContext)(n.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: o, register: a } = e,
          l = (0, r.useId)();
        (0, r.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, r.useCallback)(() => t && o && o(l), [l, o, t]);
        return !i && o ? [!1, u] : [!0];
      }
    },
    4587: (t, e, i) => {
      t.exports = i(3657);
    },
    4915: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(546);
      let r = i(5284),
        n = i(6904);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i, a;
        let l,
          u,
          h,
          {
            src: d,
            sizes: c,
            unoptimized: p = !1,
            priority: m = !1,
            loading: f,
            className: v,
            quality: g,
            width: y,
            height: b,
            fill: x = !1,
            style: w,
            overrideSrc: P,
            onLoad: S,
            onLoadingComplete: T,
            placeholder: A = "empty",
            blurDataURL: E,
            fetchPriority: M,
            decoding: C = "async",
            layout: j,
            objectFit: D,
            objectPosition: V,
            lazyBoundary: R,
            lazyRoot: k,
            ...O
          } = t,
          { imgConf: L, showAltText: F, blurComplete: B, defaultLoader: _ } = e,
          I = L || n.imageConfigDefault;
        if ("allSizes" in I) l = I;
        else {
          let t = [...I.deviceSizes, ...I.imageSizes].sort((t, e) => t - e),
            e = I.deviceSizes.sort((t, e) => t - e),
            r = null == (i = I.qualities) ? void 0 : i.sort((t, e) => t - e);
          l = { ...I, allSizes: t, deviceSizes: e, qualities: r };
        }
        if (void 0 === _)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let U = O.loader || _;
        delete O.loader, delete O.srcSet;
        let N = "__next_img_default" in U;
        if (N) {
          if ("custom" === l.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  d +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let t = U;
          U = (e) => {
            let { config: i, ...r } = e;
            return t(r);
          };
        }
        if (j) {
          "fill" === j && (x = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[j];
          t && (w = { ...w, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[j];
          e && !c && (c = e);
        }
        let z = "",
          W = o(y),
          $ = o(b);
        if ((a = d) && "object" == typeof a && (s(a) || void 0 !== a.src)) {
          let t = s(d) ? d.default : d;
          if (!t.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(t)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!t.height || !t.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(t)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((u = t.blurWidth),
            (h = t.blurHeight),
            (E = E || t.blurDataURL),
            (z = t.src),
            !x)
          ) {
            if (W || $) {
              if (W && !$) {
                let e = W / t.width;
                $ = Math.round(t.height * e);
              } else if (!W && $) {
                let e = $ / t.height;
                W = Math.round(t.width * e);
              }
            } else (W = t.width), ($ = t.height);
          }
        }
        let Y = !m && ("lazy" === f || void 0 === f);
        (!(d = "string" == typeof d ? d : z) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((p = !0), (Y = !1)),
          l.unoptimized && (p = !0),
          N &&
            !l.dangerouslyAllowSVG &&
            d.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let X = o(g),
          H = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: D,
                  objectPosition: V,
                }
              : {},
            F ? {} : { color: "transparent" },
            w
          ),
          q =
            B || "empty" === A
              ? null
              : "blur" === A
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: W,
                  heightInt: $,
                  blurWidth: u,
                  blurHeight: h,
                  blurDataURL: E || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + A + '")',
          G = q
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          K = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: r,
              width: n,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (r) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: r, allSizes: n } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let r; (r = t.exec(i)); r) e.push(parseInt(r[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: n.filter((e) => e >= r[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => n.find((e) => e >= t) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, n, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, r) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : r + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: l,
            src: d,
            unoptimized: p,
            width: W,
            quality: X,
            sizes: c,
            loader: U,
          });
        return {
          props: {
            ...O,
            loading: Y ? "lazy" : f,
            fetchPriority: M,
            width: W,
            height: $,
            decoding: C,
            className: v,
            style: { ...H, ...G },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: P || K.src,
          },
          meta: { unoptimized: p, priority: m, placeholder: A, fill: x },
        };
      }
    },
    5003: (t, e, i) => {
      "use strict";
      i.d(e, { J: () => a, D: () => o });
      let r = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function n(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          r.has(t)
        );
      }
      let s = (t) => !n(t);
      function o(t) {
        t && (s = (e) => (e.startsWith("on") ? !n(e) : t(e)));
      }
      try {
        o(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function a(t, e, i) {
        let r = {};
        for (let o in t)
          ("values" !== o || "object" != typeof t.values) &&
            (s(o) ||
              (!0 === i && n(o)) ||
              (!e && !n(o)) ||
              (t.draggable && o.startsWith("onDrag"))) &&
            (r[o] = t[o]);
        return r;
      }
    },
    5048: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => r });
      let r = (0, i(4232).createContext)({});
    },
    5284: (t, e) => {
      "use strict";
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: r,
            blurHeight: n,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = r ? 40 * r : e,
          l = n ? 40 * n : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    8847: (t, e, i) => {
      t.exports = i(1147);
    },
    9751: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => r });
      let r = (0, i(4232).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
  },
]);
