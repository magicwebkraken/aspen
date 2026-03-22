(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    1944: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      let i = {
        src: "/_next/static/media/logo.47fd9edb.png",
        height: 1024,
        width: 1024,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEX///+zUVHcW1rZkXW3iXzWycSdPjrFqILHr6ns6uqWXkzUkETRkVTDk4e3ekfBo57Ru7quZWbnqKnAbFGwZVC0gWnRk2rLmYrQpHDm3a76sFDauoHGi1K+mHXn39nJc0vro0zXiUPjkE6sdXHhzrfLrZYcUtivAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAARElEQVR4nAXBBQKAIAAAsVNawO7O/3/RDd4vym0HZ/L7WqXD5v6cw2GRYRm96SNPNpnMiAGlRZe2jQKbpIkuAFxdlfADjhEDTC4irLMAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    4169: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      var i = a(7876),
        n = a(4232),
        s = a(2594);
      let o = n.memo((e) => {
        let {
            children: t,
            rootMargin: a = "50px",
            runOnce: o = !0,
            usePlaceholder: l = !1,
            defaultAnimation: r,
            className: d,
            as: c = "div",
            ...m
          } = e,
          [x, h] = (function () {
            let {
                threshold: e = 0.1,
                rootMargin: t = "0px",
                freezeOnceVisible: a = !1,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              i = (0, n.useRef)(null),
              [s, o] = (0, n.useState)(!1);
            return (
              (0, n.useEffect)(() => {
                if (!i.current || "function" != typeof IntersectionObserver)
                  return;
                let n = i.current;
                if (a && s) return;
                let l = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      o(e.isIntersecting);
                    });
                  },
                  { threshold: e, rootMargin: t }
                );
                return (
                  l.observe(n),
                  () => {
                    n && l.unobserve(n);
                  }
                );
              }, [e, t, a, s]),
              [i, s]
            );
          })({ rootMargin: a, freezeOnceVisible: o }),
          p = r
            ? {
                initial: "hidden",
                animate: h ? "visible" : "hidden",
                variants: r,
                ...m,
              }
            : { ...m, animate: h ? m.animate : m.initial || {} };
        return !h && l
          ? (0, i.jsx)("div", {
              ref: x,
              className: d,
              style: { minHeight: "100px" },
            })
          : (0, i.jsx)(s.P.div, {
              ref: x,
              className: d,
              ...p,
              style: {
                ...p.style,
                willChange: h ? "transform, opacity" : "auto",
                transform: "translateZ(0)",
              },
              children: t,
            });
      });
    },
    6760: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(9685);
        },
      ]);
    },
    9157: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          AnimationPerformanceContext: () => o,
          OptimizedAnimationWrapper: () => r,
          default: () => d,
          useAnimationPerformance: () => l,
        });
      var i = a(7876),
        n = a(4232),
        s = a(1956);
      let o = (0, n.createContext)({
          enableHeavyAnimations: !0,
          enableBackgroundAnimations: !0,
          enableHoverEffects: !0,
          enableTransitions: !0,
          enableParallaxEffects: !0,
          highQualityAnimations: !0,
          reducedMotion: !1,
          viewportRenderOnly: !0,
          viewportMargin: "100px",
        }),
        l = () => (0, n.useContext)(o),
        r = (e) => {
          let { children: t, priority: n = "high", viewportOnly: s } = e,
            o = l();
          if (
            !(
              "high" === n ||
              ("low" === n && o.enableHeavyAnimations) ||
              ("background" === n && o.enableBackgroundAnimations)
            )
          )
            return null;
          if (!(void 0 !== s ? s : o.viewportRenderOnly))
            return (0, i.jsx)("div", {
              className: "".concat(
                o.highQualityAnimations ? "high-quality" : "optimized-quality"
              ),
              children: t,
            });
          let r = a(4169).A;
          return (0, i.jsx)(r, {
            rootMargin: o.viewportMargin,
            className: "".concat(
              o.highQualityAnimations ? "high-quality" : "optimized-quality"
            ),
            runOnce: !1,
            children: t,
          });
        },
        d = (e) => {
          let { children: t, viewportRenderOnly: a = !0 } = e,
            [l, r] = (0, n.useState)({
              enableHeavyAnimations: !0,
              enableBackgroundAnimations: !0,
              enableHoverEffects: !0,
              enableTransitions: !0,
              enableParallaxEffects: !0,
              highQualityAnimations: !0,
              reducedMotion: !1,
              viewportRenderOnly: a,
              viewportMargin: "100px",
            }),
            [d, c] = (0, n.useState)([]),
            [m, x] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              (() => {
                let e = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches,
                  t =
                    navigator.hardwareConcurrency <= 4 ||
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ) ||
                    (navigator.deviceMemory && navigator.deviceMemory <= 2);
                r({
                  enableHeavyAnimations: !e,
                  enableBackgroundAnimations: !t && !e,
                  enableHoverEffects: !e,
                  enableTransitions: !0,
                  enableParallaxEffects: !t && !e,
                  highQualityAnimations: !t,
                  reducedMotion: e,
                  viewportRenderOnly: !0,
                  viewportMargin: t ? "50px" : "100px",
                });
              })();
              let e = performance.now(),
                t = 0,
                a = () => {
                  let i = performance.now(),
                    n = i - e;
                  t % 30 == 0 &&
                    (n > 50 &&
                      (x(!0),
                      r((e) => ({
                        ...e,
                        highQualityAnimations: !1,
                        enableParallaxEffects: !1,
                        enableBackgroundAnimations: !1,
                      }))),
                    c((e) => [...e, n].slice(-20))),
                    (e = i),
                    t++,
                    requestAnimationFrame(a);
                },
                i = requestAnimationFrame(a);
              try {
                let e;
                let t = console.error;
                console.error = function () {
                  for (
                    var e = arguments.length, a = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    a[i] = arguments[i];
                  !(
                    a[0] &&
                    "string" == typeof a[0] &&
                    (a[0].includes("Only two keyframes currently supported") ||
                      a[0].includes("Trying to animate"))
                  ) && t.apply(console, a);
                };
                let a = window;
                return (
                  a.FramerMotion &&
                    ((e = a.FramerMotion.animate),
                    (a.FramerMotion.animate = function (t) {
                      for (
                        var a,
                          i,
                          n = arguments.length,
                          s = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        s[o - 1] = arguments[o];
                      if (s[0]) {
                        let e = s[0];
                        Object.keys(e).forEach((t) => {
                          let a = e[t];
                          Array.isArray(a) &&
                            a.length > 2 &&
                            (e[t] = [a[0], a[a.length - 1]]);
                        }),
                          (null === (a = s[1]) || void 0 === a
                            ? void 0
                            : a.type) === "spring" &&
                            (s[1] = {
                              ...s[1],
                              stiffness: Math.min(s[1].stiffness || 100, 200),
                              damping: Math.max(s[1].damping || 10, 10),
                              mass: Math.min(s[1].mass || 1, 1),
                            }),
                          (null === (i = s[1]) || void 0 === i
                            ? void 0
                            : i.type) === "inertia" &&
                            (s[1] = {
                              ...s[1],
                              power: Math.min(s[1].power || 0.8, 0.5),
                              timeConstant: Math.min(
                                s[1].timeConstant || 700,
                                400
                              ),
                            });
                      }
                      return e(t, ...s);
                    })),
                  () => {
                    (console.error = t),
                      a.FramerMotion && (a.FramerMotion.animate = e),
                      cancelAnimationFrame(i);
                  }
                );
              } catch (e) {
                console.warn("Error optimizing Framer Motion:", e);
              }
            }, []),
            (0, i.jsx)(o.Provider, {
              value: l,
              children: (0, i.jsx)(s.x, {
                transition: {
                  type: l.highQualityAnimations ? "spring" : "tween",
                  duration: 0.4,
                  ease: "easeOut",
                },
                reducedMotion: l.reducedMotion ? "user" : "never",
                children: t,
              }),
            })
          );
        };
    },
    9685: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => M });
      var i = a(7876),
        n = a(4232);
      let s = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className:
            "flex flex-col items-center justify-center w-full max-w-full overflow-hidden bg-pattern",
          children: (0, i.jsx)("main", {
            className: "w-full max-w-full overflow-hidden",
            children: t,
          }),
        });
      };
      var o = a(8847),
        l = a.n(o),
        r = a(3679),
        d = a(2594),
        c = a(2622),
        m = a(1944);
      let x = {
        src: "/_next/static/media/tweet1.d35dd6d9.png",
        height: 631,
        width: 460,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAthL/xAAaEAACAgMAAAAAAAAAAAAAAAABAgMFAAQR/9oACAEBAAE/ADcWkczoKXaZABwqpz//xAAYEQACAwAAAAAAAAAAAAAAAAAAARESQf/aAAgBAgEBPwCs6z//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAEDAQE/AIsP/9k=",
        blurWidth: 6,
        blurHeight: 8,
      };
      var h = a(4169),
        p = a(9157),
        u = a(9749);
      let A = () => {
          let { highQualityAnimations: e } = (0, p.useAnimationPerformance)(),
            t = () => {},
            a = {
              hover: {
                scale: 1.1,
                y: -8,
                rotate: [-2, 2],
                transition: { duration: 0.4, ease: "backOut" },
              },
              tap: { scale: 0.92, transition: { duration: 0.2 } },
            },
            n = {
              hidden: { opacity: 0, y: 30, rotate: 10 },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 9,
                  ease: "backOut",
                },
              },
            };
          return (
            u.tZq,
            r.hFS,
            (0, i.jsxs)("section", {
              className:
                "relative min-h-screen w-full overflow-hidden z-10 pt-32",
              id: "home",
              style: {
                background:
                  "linear-gradient(135deg, #fff9e6 0%, #fef3cd 50%, #fde68a 100%)",
              },
              children: [
                (0, i.jsxs)("div", {
                  className: "absolute inset-0 z-0",
                  children: [
                    (0, i.jsx)("div", {
                      className: "absolute inset-0",
                      style: {
                        background:
                          "radial-gradient(circle at center, #fef3cd 0%, #fed7aa 70%, #fdba74 100%)",
                      },
                    }),
                    (0, i.jsx)("div", {
                      className: "absolute inset-0",
                      children: Array.from({ length: 15 }).map((e, t) =>
                        (0, i.jsx)(
                          d.P.div,
                          {
                            className: "absolute rounded-full",
                            style: {
                              background:
                                "linear-gradient(45deg, #FD8A1B, #FFD700)",
                              opacity: 0.3,
                              width: 80 * Math.random() + 20,
                              height: 80 * Math.random() + 20,
                              left: "".concat(100 * Math.random(), "%"),
                              top: "".concat(100 * Math.random(), "%"),
                            },
                            animate: { y: [0, -100], opacity: [0, 0.5, 0] },
                            transition: {
                              repeat: 1 / 0,
                              duration: 5 * Math.random() + 5,
                              delay: 5 * Math.random(),
                              ease: "easeInOut",
                            },
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "relative h-full w-full flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-24 py-20",
                  children: [
                    (0, i.jsx)(h.A, {
                      className: "w-full md:w-1/2",
                      variants: {
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 8,
                          },
                        },
                      },
                      children: (0, i.jsx)(d.P.div, {
                        className: "relative rounded-full overflow-hidden",
                        variants: {
                          hidden: { scale: 1 },
                          visible: {
                            scale: [1, 1.05, 1],
                            transition: {
                              duration: 1.5,
                              repeat: 1 / 0,
                              ease: "easeInOut",
                              type: "tween",
                            },
                          },
                        },
                        initial: "hidden",
                        animate: "visible",
                        style: {
                          border: "8px solid #fff",
                          boxShadow: "0 0 30px rgba(253, 138, 27, 0.5)",
                          background:
                            "linear-gradient(135deg, #FD8A1B, #FFD700)",
                          padding: "8px",
                          maxWidth: "400px",
                          margin: "0 auto",
                        },
                        children: (0, i.jsx)("div", {
                          className: "rounded-full overflow-hidden",
                          children: (0, i.jsx)(c.A, {
                            src: m.A,
                            alt: "ASPEN - The Adorable Rice Companion",
                            layout: "responsive",
                            className: "object-cover",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(h.A, {
                      className:
                        "md:w-1/2 text-center md:text-left mt-12 md:mt-0 md:pl-12",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.8 },
                      children: [
                        (0, i.jsx)(d.P.div, {
                          initial: "hidden",
                          animate: "visible",
                          variants: {
                            hidden: { scale: 0, opacity: 0, rotate: -15 },
                            visible: {
                              scale: 1,
                              opacity: 1,
                              rotate: 0,
                              transition: {
                                type: "spring",
                                stiffness: 150,
                                damping: 12,
                                ease: "backOut",
                              },
                            },
                          },
                          className: "relative inline-block mb-8",
                          children: (0, i.jsx)("div", {
                            className:
                              "text-6xl md:text-7xl font-extrabold mb-6 relative",
                            children: "$ASPEN"
                              .split("")
                              .map((e, t) =>
                                (0, i.jsx)(
                                  d.P.span,
                                  {
                                    variants: n,
                                    custom: t,
                                    initial: "hidden",
                                    animate: "visible",
                                    transition: { delay: 0.15 * t },
                                    className: "inline-block",
                                    style: {
                                      color: "#FD8A1B",
                                      textShadow:
                                        "3px 3px 0px #FF8C00, 6px 6px 0px #FF6347",
                                      fontFamily: "ponke, cursive",
                                    },
                                    children: e,
                                  },
                                  t
                                )
                              ),
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "flex flex-col items-center md:items-start",
                          children: [
                            (0, i.jsx)(d.P.div, {
                              className:
                                "text-xl md:text-3xl font-bold mb-8 inline-block",
                              initial: { x: -30, opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { delay: 0.4, duration: 0.6 },
                              children: (0, i.jsx)(d.P.span, {
                                variants: {
                                  hidden: { rotate: 0 },
                                  visible: {
                                    rotate: [-2, 2, -2],
                                    transition: {
                                      duration: 0.5,
                                      repeat: 1 / 0,
                                      ease: "easeInOut",
                                      type: "tween",
                                    },
                                  },
                                },
                                initial: "hidden",
                                animate: "visible",
                                className:
                                  "relative z-10 px-4 py-2 rounded-lg block",
                                style: {
                                  background: "rgba(255, 255, 255, 0.95)",
                                  border: "3px solid #FD8A1B",
                                  boxShadow: "5px 5px 0 #FF8C00",
                                  fontFamily: "Chewy, cursive",
                                  color: "#D2691E",
                                },
                                children: "Meet ASPEN",
                              }),
                            }),
                            (0, i.jsx)(d.P.div, {
                              className:
                                "text-md md:text-lg mb-8 rounded-lg p-6 max-w-lg w-full",
                              initial: { y: 30, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { delay: 0.6, duration: 0.6 },
                              style: {
                                background: "rgba(255, 255, 255, 0.95)",
                                border: "3px solid #FD8A1B",
                                boxShadow: "8px 8px 0 #FF8C00",
                              },
                              children: (0, i.jsx)(c.A, {
                                src: x,
                                alt: "ASPEN - The Adorable Rice Companion",
                                layout: "responsive",
                                className: "object-cover",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "flex  justify-center md:justify-start gap-4 mb-8",
                              children: [
                                (0, i.jsx)(d.P.button, {
                                  variants: a,
                                  whileHover: "hover",
                                  whileTap: "tap",
                                  className:
                                    "px-6 py-4 rounded-lg text-white font-bold md:text-xl relative overflow-hidden",
                                  onClick: t,
                                  style: {
                                    background:
                                      "linear-gradient(135deg, #FD8A1B, #FFD700)",
                                    border: "3px solid #fff",
                                    boxShadow: "5px 5px 0 #FF8C00",
                                    fontFamily: "Chewy, cursive",
                                  },
                                  children: (0, i.jsx)("span", {
                                    className: "z-30 relative flex items-center",
                                    onClick: () => {
                                      window.open(
                                        "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x6ed3c9072f06f1f00fa3e0e9791e006f56d4eaac",
                                        "_blank"
                                      );
                                    },
                                    style: { cursor: "pointer" },
                                    children: "Buy Now",
                                  }),
                                }),
                                (0, i.jsx)(d.P.button, {
                                  variants: a,
                                  whileHover: "hover",
                                  whileTap: "tap",
                                  className:
                                    "px-6 py-4 rounded-lg text-white font-bold md:text-xl relative overflow-hidden",
                                  onClick: () => {
                                    t(),
                                      window.open(
                                        "https://dexscreener.com/ethereum/0x7d61145c21089f3a63aa777013aed66a29f2ff02",
                                        "_blank"
                                      );
                                  },
                                  style: {
                                    background:
                                      "linear-gradient(135deg, #FF8C00, #FFA500)",
                                    border: "3px solid #fff",
                                    boxShadow: "5px 5px 0 #D2691E",
                                    fontFamily: "Chewy, cursive",
                                  },
                                  children: (0, i.jsx)("span", {
                                    className: "z-30 relative",
                                    children: "View Chart",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)(d.P.div, {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: 0.8, duration: 0.6 },
                              className:
                                "bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 mb-6 border-2 border-orange-500 text-black/80 overflow-hidden",
                              children: [
                                (0, i.jsx)("p", {
                                  className: "text-sm font-bold mb-1",
                                  children: "Contract Address:",
                                }),
                                (0, i.jsx)("p", {
                                  className: "text-xs md:text-sm font-mono",
                                  children:
                                    "0x6ed3c9072f06f1f00fa3e0e9791e006f56d4eaac",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        y = {
          src: "/_next/static/media/tweet2.ddd566d8.jpg",
          height: 800,
          width: 436,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAAArxOv/8QAHRAAAAUFAAAAAAAAAAAAAAAAAAECBBMGESEy0f/aAAgBAQABPwBu4qKO0qsGZaK4P//EABcRAAMBAAAAAAAAAAAAAAAAAAABIVL/2gAIAQIBAT8Aumf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",
          blurWidth: 4,
          blurHeight: 8,
        },
        f = () =>
          (0, i.jsxs)("section", {
            className: "relative py-16 md:py-24 overflow-hidden z-10",
            id: "about",
            children: [
              (0, i.jsxs)("div", {
                className: "absolute inset-0 z-0",
                children: [
                  (0, i.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                      background:
                        "linear-gradient(135deg, #fff9e6 0%, #fef3cd 80%, #fed7aa 100%)",
                      opacity: 0.9,
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: "absolute top-0 left-0 w-full h-24",
                    children: (0, i.jsx)("svg", {
                      viewBox: "0 0 1200 100",
                      preserveAspectRatio: "none",
                      className: "w-full h-full",
                      children: (0, i.jsx)("path", {
                        d: "M0,0 C150,90 350,5 500,30 C650,55 700,5 850,40 C1000,75 1200,20 1200,20 L1200,0 L0,0 Z",
                        fill: "#FD8A1B",
                        opacity: "0.3",
                      }),
                    }),
                  }),
                  Array.from({ length: 20 }).map((e, t) =>
                    (0, i.jsx)(
                      d.P.div,
                      {
                        className: "absolute rounded-full opacity-20",
                        style: {
                          background:
                            "linear-gradient(45deg, #FD8A1B, #FFD700)",
                          width: 200 * Math.random() + 50,
                          height: 200 * Math.random() + 50,
                          left: "".concat(100 * Math.random(), "%"),
                          top: "".concat(100 * Math.random(), "%"),
                        },
                        animate: { scale: [1, 1.2, 1], rotate: [0, 10, 0] },
                        transition: {
                          repeat: 1 / 0,
                          duration: 8 * Math.random() + 5,
                          delay: 5 * Math.random(),
                        },
                      },
                      t
                    )
                  ),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "container mx-auto relative z-10 px-6",
                children: [
                  (0, i.jsxs)(h.A, {
                    className: "mb-16 text-center",
                    children: [
                      (0, i.jsx)(d.P.h2, {
                        className:
                          "text-5xl md:text-6xl font-extrabold mb-6 relative inline-block",
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        style: {
                          color: "#FD8A1B",
                          textShadow:
                            "3px 3px 0px #FF8C00, 6px 6px 0px #FF6347",
                          fontFamily: "ponke, cursive",
                        },
                        children: "Meet ASPEN",
                      }),
                      (0, i.jsx)(d.P.div, {
                        className: "h-2 w-48 mx-auto rounded-full",
                        initial: { width: 0 },
                        animate: { width: "12rem" },
                        transition: { duration: 0.8, delay: 0.3 },
                        style: { background: "#FD8A1B" },
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-3 gap-12 items-start",
                    children: [
                      (0, i.jsx)(h.A, {
                        className: "relative",
                        children: (0, i.jsxs)(d.P.div, {
                          className: "relative rounded-2xl overflow-hidden",
                          initial: { opacity: 0, x: -50 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.8 },
                          style: {
                            border: "5px solid #fff",
                            boxShadow: "10px 10px 0 #FF8C00",
                          },
                          children: [
                            (0, i.jsx)(c.A, {
                              src: "/images/about.png",
                              alt: "ASPEN",
                              width: 600,
                              height: 400,
                              layout: "responsive",
                              className: "object-cover",
                            }),
                            (0, i.jsx)(d.P.div, {
                              className:
                                "absolute -bottom-4 -right-4 w-20 h-20 rounded-full",
                              initial: { scale: 0 },
                              animate: { scale: 1 },
                              transition: {
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.6,
                              },
                              style: {
                                background:
                                  "linear-gradient(135deg, #FD8A1B, #FFD700)",
                                border: "3px solid #fff",
                              },
                              children: (0, i.jsx)(d.P.div, {
                                className:
                                  "absolute -top-5 left-1/2 w-10 h-8 rounded-tr-full rounded-tl-full",
                                initial: { rotate: 0 },
                                animate: { rotate: [-5, 5, -5] },
                                transition: { duration: 3, repeat: 1 / 0 },
                                style: {
                                  transformOrigin: "bottom",
                                  marginLeft: "-5px",
                                  background: "#FFD700",
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(h.A, {
                        children: (0, i.jsxs)(d.P.div, {
                          className: "bg-white rounded-xl p-8",
                          initial: { opacity: 0, x: 30 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.6, delay: 0.2 },
                          style: {
                            border: "3px solid #FD8A1B",
                            boxShadow: "8px 8px 0 #FF8C00",
                          },
                          children: [
                            (0, i.jsx)("h3", {
                              className: "text-2xl md:text-3xl font-bold mb-6",
                              style: { color: "#D2691E" },
                              children:
                                "We love you Aspen 🐶💗",
                            }),
                            (0, i.jsxs)("div", {
                              className: "space-y-4 text-gray-700",
                              children: [
                                (0, i.jsxs)("p", {
                                  children: [
                                    " Welcome to the Trump's Family!!💗💗",
                                    (0, i.jsx)("span", {
                                      className: "font-bold",
                                      children: "ASPEN",
                                    }),
                                    "",
                                  ],
                                }),
                                (0, i.jsxs)("p", {
                                  children: [
                                    "This pretty much sums up the narrative. This is a fucking Trump dog. Easiest layup for bonk/USD1 ever. Best coin we have had all month.",
                                    " ",
                                    (0, i.jsx)("span", {
                                      className: "font-bold",
                                      style: { color: "#FD8A1B" },
                                      children: "irresistible",
                                    }),
                                    ".",
                                  ],
                                }),
                                (0, i.jsxs)("p", {
                                  children: [
                                    "A new Trump dog for the first time since modern memecoins began, interesting to see what its peak ath goes to.",
                                    " ",
                                    (0, i.jsx)("span", {
                                      className: "font-bold",
                                      style: { color: "#B8860B" },
                                      children: "",
                                    }),
                                    " ",
                                    "Gut says this is Bonk teams wildcard, if there ever was a coin to crime this is it",
                                  ],
                                }),
                                (0, i.jsx)("p", {
                                  children:
                                    'The Trumps just got a new dog.',
                                }),
                                (0, i.jsx)("p", {
                                  className: "font-bold",
                                  style: { color: "#FD8A1B" },
                                  children:
                                    "Aspen the Dog!",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(d.P.div, {
                        className:
                          "text-md md:text-lg mb-8 rounded-lg p-6 max-w-lg w-full",
                        initial: { y: 30, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.6, duration: 0.6 },
                        style: {
                          background: "rgba(255, 255, 255, 0.95)",
                          border: "3px solid #FD8A1B",
                          boxShadow: "8px 8px 0 #FF8C00",
                        },
                        children: (0, i.jsx)(c.A, {
                          src: y,
                          alt: "ASPEN - The Adorable Rice Companion",
                          layout: "responsive",
                          className: "object-cover",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      var g = a(8102),
        b = a(3340);
      let v = () => {F
          let e = [
            {
              title: "Total Supply",
              value: "1B",
              icon: (0, i.jsx)(b.L$J, { size: 36 }),
              color: "#FD8A1B",
            },
            {
              title: "Ticker",
              value: "$ASPEN",
              icon: (0, i.jsx)(g.oi2, { size: 36 }),
              color: "#FFD700",
            },
            {
              title: "Tax",
              value: "0% Buy / 0% Sell",
              icon: (0, i.jsx)(b.i9S, { size: 36 }),
              color: "#FF8C00",
            },
            {
              title: "Contract Renounced",
              value: "Yes",
              icon: (0, i.jsx)(b._cq, { size: 36 }),
              color: "#FFA500",
            },
            {
              title: "Locked",
              value: "Yes",
              icon: (0, i.jsx)(b.u6O, { size: 36 }),
              color: "#D2691E",
            },
          ];
          return (0, i.jsxs)("section", {
            className: "relative py-24 overflow-hidden z-10",
            id: "tokenomics",
            children: [
              (0, i.jsxs)("div", {
                className: "absolute inset-0 z-0",
                children: [
                  (0, i.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                      background:
                        "linear-gradient(135deg, #fff9e6 0%, #fef3cd 100%)",
                      opacity: 0.9,
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: "absolute inset-0 overflow-hidden",
                    children: Array.from({ length: 50 }).map((e, t) =>
                      (0, i.jsx)(
                        d.P.div,
                        {
                          className: "absolute w-2 h-2 rounded-full opacity-30",
                          style: {
                            background: "#FD8A1B",
                            left: "".concat(100 * Math.random(), "%"),
                            top: "".concat(100 * Math.random(), "%"),
                          },
                          animate: {
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.3, 0.1],
                          },
                          transition: {
                            repeat: 1 / 0,
                            duration: 5 * Math.random() + 3,
                            delay: 5 * Math.random(),
                          },
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "container mx-auto relative z-10 px-6",
                children: [
                  (0, i.jsxs)(h.A, {
                    className: "text-center mb-16",
                    children: [
                      (0, i.jsx)(d.P.h2, {
                        className: "text-5xl md:text-6xl font-extrabold mb-6",
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        style: {
                          color: "#FD8A1B",
                          textShadow:
                            "3px 3px 0px #FF8C00, 6px 6px 0px #FF6347",
                          fontFamily: "ponke, cursive",
                        },
                        children: "Tokenomics",
                      }),
                      (0, i.jsx)(d.P.div, {
                        className: "h-2 w-48 mx-auto rounded-full",
                        style: { background: "#FD8A1B" },
                        initial: { width: 0 },
                        animate: { width: "12rem" },
                        transition: { duration: 0.8, delay: 0.3 },
                      }),
                      (0, i.jsx)(d.P.p, {
                        className: "text-xl mt-6 max-w-2xl mx-auto",
                        style: { color: "#D2691E" },
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4, duration: 0.6 },
                        children:
                          "A Kome-powered economy designed for fairness and transparency",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "max-w-5xl mx-auto",
                    children: (0, i.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                      children: e.map((e, t) =>
                        (0, i.jsx)(
                          h.A,
                          {
                            children: (0, i.jsxs)(d.P.div, {
                              className:
                                "bg-white rounded-xl p-6 relative overflow-hidden group",
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: 0.1 * t, duration: 0.5 },
                              whileHover: {
                                y: -8,
                                boxShadow:
                                  "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                                transition: { duration: 0.2 },
                              },
                              style: {
                                border: "3px solid white",
                                boxShadow: "8px 8px 0 rgba(102, 34, 0, 0.5)",
                              },
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-10 transition-opacity group-hover:opacity-20",
                                  style: { background: e.color },
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center text-center relative",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white",
                                      style: { background: e.color },
                                      children: e.icon,
                                    }),
                                    (0, i.jsx)("h3", {
                                      className: "text-xl font-bold mb-2",
                                      style: {
                                        color: "#7c2d12",
                                        fontFamily: "Chewy, cursive",
                                      },
                                      children: e.title,
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "text-2xl font-bold mt-1 pb-1 border-b-2",
                                      style: {
                                        color: e.color,
                                        borderColor: "".concat(e.color, "30"),
                                      },
                                      children: e.value,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        w = () => {
          let e = [
            {
              title: "Create a Wallet",
              description:
                "Download MetaMask or Trust Wallet from the app store or their official websites.",
              icon: (0, i.jsx)(r.lcY, { size: 32 }),
              color: "#FD8A1B",
            },
            {
              title: "Get Some ETH",
              description:
                "Buy ETH directly on your wallet, transfer from an exchange, or convert other crypto to ETH.",
              icon: (0, i.jsx)(r.liQ, { size: 32 }),
              color: "#FFD700",
            },
            {
              title: "Visit Uniswap",
              description:
                "Connect your wallet to Uniswap.org. Paste the $ASPEN token contract address.",
              icon: (0, i.jsx)(r.yk7, { size: 32 }),
              color: "#FF8C00",
            },
            {
              title: "Swap ETH for $ASPEN",
              description:
                "Enter the amount of $ASPEN you want to buy, adjust slippage tolerance, and swap your ETH for $ASPEN.",
              icon: (0, i.jsx)(r.uoG, { size: 32 }),
              color: "#FFA500",
            },
          ];
          return (0, i.jsxs)("section", {
            className: "relative py-24 overflow-hidden z-10",
            id: "how-to-buy",
            style: {
              background: "linear-gradient(135deg, #fff9e6 0%, #fef3cd 100%)",
            },
            children: [
              (0, i.jsxs)("div", {
                className: "absolute inset-0 z-0",
                children: [
                  Array.from({ length: 8 }).map((e, t) =>
                    (0, i.jsx)(
                      d.P.div,
                      {
                        className: "absolute rounded-full opacity-20",
                        style: {
                          background:
                            "linear-gradient(45deg, #FD8A1B, #FFD700)",
                          width: 300 * Math.random() + 100,
                          height: 300 * Math.random() + 100,
                          left: "".concat(100 * Math.random(), "%"),
                          top: "".concat(100 * Math.random(), "%"),
                        },
                        animate: {
                          scale: [1, 1.2, 1],
                          x: [0, 30 * Math.random() - 15],
                          y: [0, 30 * Math.random() - 15],
                        },
                        transition: {
                          repeat: 1 / 0,
                          duration: 10 * Math.random() + 10,
                          ease: "easeInOut",
                        },
                      },
                      t
                    )
                  ),
                  (0, i.jsx)("svg", {
                    className:
                      "absolute bottom-0 left-0 w-full h-64 opacity-10",
                    style: { color: "#FD8A1B" },
                    viewBox: "0 0 1200 200",
                    preserveAspectRatio: "none",
                    children: (0, i.jsx)("path", {
                      d: "M0,200 C300,100 900,100 1200,200 L1200,200 L0,200 Z",
                      fill: "currentColor",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "container mx-auto relative z-10 px-6",
                children: [
                  (0, i.jsxs)(h.A, {
                    className: "text-center mb-16",
                    children: [
                      (0, i.jsx)(d.P.h2, {
                        className: "text-5xl md:text-6xl font-extrabold mb-6",
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        style: {
                          color: "#FD8A1B",
                          textShadow:
                            "3px 3px 0px #FF8C00, 6px 6px 0px #FF6347",
                          fontFamily: "ponke, cursive",
                        },
                        children: "How To Buy",
                      }),
                      (0, i.jsx)(d.P.div, {
                        className: "h-2 w-48 mx-auto rounded-full",
                        style: { background: "#FD8A1B" },
                        initial: { width: 0 },
                        animate: { width: "12rem" },
                        transition: { duration: 0.8, delay: 0.3 },
                      }),
                      (0, i.jsx)(d.P.p, {
                        className: "text-xl mt-6 max-w-2xl mx-auto",
                        style: { color: "#D2691E" },
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4, duration: 0.6 },
                        children:
                          "Ready to join ASPEN's family? Follow these simple steps to get your hands on some adorable $ASPEN tokens!",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto",
                    children: e.map((e, t) =>
                      (0, i.jsx)(
                        h.A,
                        {
                          className: "h-full",
                          children: (0, i.jsxs)(d.P.div, {
                            className:
                              "relative h-full rounded-xl p-6 flex flex-col",
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.2 * t, duration: 0.6 },
                            whileHover: {
                              y: -10,
                              transition: { duration: 0.3 },
                            },
                            style: {
                              background: "white",
                              border: "3px solid #FD8A1B",
                              boxShadow: "8px 8px 0 #FF8C00",
                            },
                            children: [
                              (0, i.jsx)(d.P.div, {
                                className:
                                  "absolute -top-6 -right-6 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold",
                                style: {
                                  background: e.color,
                                  border: "3px solid #fff",
                                },
                                initial: { scale: 0 },
                                animate: { scale: 1 },
                                transition: {
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 15,
                                  delay: 0.2 + 0.2 * t,
                                },
                                children: t + 1,
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "w-16 h-16 rounded-full flex items-center justify-center mb-6",
                                style: {
                                  background: "rgba("
                                    .concat(
                                      parseInt(e.color.substr(1, 2), 16),
                                      ", "
                                    )
                                    .concat(
                                      parseInt(e.color.substr(3, 2), 16),
                                      ", "
                                    )
                                    .concat(
                                      parseInt(e.color.substr(5, 2), 16),
                                      ", 0.1)"
                                    ),
                                  color: e.color,
                                },
                                children: e.icon,
                              }),
                              (0, i.jsx)("h3", {
                                className: "text-2xl font-bold mb-2",
                                style: {
                                  color: "#D2691E",
                                  fontFamily: "Chewy, cursive",
                                },
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className: "text-gray-700 flex-grow",
                                children: e.description,
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "absolute bottom-3 right-3 w-8 h-8 rounded-full opacity-30",
                                style: { background: e.color },
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        j = () => {
          let e = [
            {
              icon: (0, i.jsx)(b.O06, { size: 32 }),
              title: "Phase 1: The Beginning",
              items: [
                "Website launch",
                "Contract deployment on Solana",
                "Social media setup",
                "Community building",
                "Initial marketing push",
              ],
              color: "#FD8A1B",
            },
            {
              icon: (0, i.jsx)(b.d1B, { size: 32 }),
              title: "Phase 2: Growing Community",
              items: [
                "CoinGecko & CoinMarketCap listings",
                "Community expansion",
                "Partnerships with influencers",
                "Meme contest launches",
                "First community AMA",
              ],
              color: "#FFD700",
            },
            {
              icon: (0, i.jsx)(b.L12, { size: 32 }),
              title: "Phase 3: Flourishing",
              items: [
                "Major CEX listings",
                "Launch of ASPEN merchandise",
                "Development of anime-themed NFTs",
                "Community governance system",
                "Expanded marketing campaign",
              ],
              color: "#FF8C00",
            },
            {
              icon: (0, i.jsx)(b.PDh, { size: 32 }),
              title: "Phase 4: Full Bloom",
              items: [
                "Tier 1 exchange listings",
                "Major partnerships announcement",
                "Anime metaverse integration",
                "Cross-chain expansion",
                "Real-world charity events",
              ],
              color: "#FFA500",
            },
          ];
          return (0, i.jsxs)("section", {
            className: "relative py-24 overflow-hidden z-10",
            id: "roadmap",
            children: [
              (0, i.jsxs)("div", {
                className: "absolute inset-0 z-0",
                children: [
                  (0, i.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                      background:
                        "linear-gradient(135deg, #fff9e6 0%, #fef3cd 50%, #fed7aa 100%)",
                    },
                  }),
                  (0, i.jsxs)(d.P.svg, {
                    className:
                      "absolute left-0 top-0 h-full w-24 md:w-48 text-orange-400 opacity-20",
                    viewBox: "0 0 100 800",
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 0.2, x: 0 },
                    transition: { duration: 1, delay: 0.5 },
                    children: [
                      (0, i.jsx)("path", {
                        d: "M50,0 Q70,200 30,400 Q60,600 50,800",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "none",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "50",
                        cy: "100",
                        r: "8",
                        fill: "currentColor",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "40",
                        cy: "300",
                        r: "6",
                        fill: "currentColor",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "60",
                        cy: "500",
                        r: "10",
                        fill: "currentColor",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "45",
                        cy: "700",
                        r: "12",
                        fill: "currentColor",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(d.P.svg, {
                    className:
                      "absolute right-0 top-0 h-full w-24 md:w-48 text-orange-400 opacity-20",
                    viewBox: "0 0 100 800",
                    initial: { opacity: 0, x: 50 },
                    animate: { opacity: 0.2, x: 0 },
                    transition: { duration: 1, delay: 0.5 },
                    children: [
                      (0, i.jsx)("path", {
                        d: "M50,0 Q30,200 70,400 Q40,600 50,800",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "none",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "50",
                        cy: "150",
                        r: "8",
                        fill: "currentColor",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "60",
                        cy: "350",
                        r: "6",
                        fill: "currentColor",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "40",
                        cy: "550",
                        r: "10",
                        fill: "currentColor",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "55",
                        cy: "750",
                        r: "12",
                        fill: "currentColor",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "container mx-auto relative z-10 px-6",
                children: [
                  (0, i.jsxs)(h.A, {
                    className: "text-center mb-16",
                    children: [
                      (0, i.jsx)(d.P.h2, {
                        className: "text-5xl md:text-6xl font-extrabold mb-6",
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        style: {
                          color: "#FD8A1B",
                          textShadow:
                            "3px 3px 0px #FFD700, 6px 6px 0px #FF8C00",
                          fontFamily: "ponke, cursive",
                        },
                        children: "Roadmap",
                      }),
                      (0, i.jsx)(d.P.div, {
                        className: "h-2 w-48 mx-auto rounded-full",
                        style: {
                          background:
                            "linear-gradient(90deg, #FD8A1B 0%, #FFD700 100%)",
                        },
                        initial: { width: 0 },
                        animate: { width: "12rem" },
                        transition: { duration: 0.8, delay: 0.3 },
                      }),
                      (0, i.jsx)(d.P.p, {
                        className:
                          "text-gray-700 text-xl mt-6 max-w-2xl mx-auto",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4, duration: 0.6 },
                        children:
                          "The journey of ASPEN from shelter pup to memecoin sensation!",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "hidden lg:block relative mt-24",
                    children: [
                      (0, i.jsx)(d.P.div, {
                        className: "absolute left-1/2 top-0 bottom-0 w-1",
                        initial: { height: 0 },
                        animate: { height: "100%" },
                        transition: { duration: 1.5, ease: "easeInOut" },
                        style: {
                          background:
                            "linear-gradient(to bottom, #FD8A1B, #FFD700, #FF8C00)",
                          transform: "translateX(-50%)",
                        },
                      }),
                      (0, i.jsx)("div", {
                        className: "relative",
                        children: e.map((e, t) =>
                          (0, i.jsx)(
                            h.A,
                            {
                              className: "mb-24 last:mb-0",
                              children: (0, i.jsxs)("div", {
                                className: "flex ".concat(
                                  t % 2 == 0 ? "" : "flex-row-reverse"
                                ),
                                children: [
                                  (0, i.jsx)(d.P.div, {
                                    className: "w-1/2 px-12",
                                    initial: {
                                      opacity: 0,
                                      x: t % 2 == 0 ? -50 : 50,
                                    },
                                    animate: { opacity: 1, x: 0 },
                                    transition: { duration: 0.6, delay: 0.2 },
                                    children: (0, i.jsxs)(d.P.div, {
                                      className:
                                        "bg-white rounded-xl p-8 h-full",
                                      whileHover: {
                                        y: -5,
                                        transition: { duration: 0.2 },
                                      },
                                      style: {
                                        border: "3px solid ".concat(e.color),
                                        boxShadow:
                                          "8px 8px 0 rgba(102, 34, 0, 0.5)",
                                      },
                                      children: [
                                        (0, i.jsx)("div", {
                                          className:
                                            "w-14 h-14 rounded-full mb-4 flex items-center justify-center text-white",
                                          style: { backgroundColor: e.color },
                                          children: e.icon,
                                        }),
                                        (0, i.jsx)("h3", {
                                          className: "text-2xl font-bold mb-4",
                                          style: {
                                            color: "#FD8A1B",
                                            fontFamily: "Chewy, cursive",
                                          },
                                          children: e.title,
                                        }),
                                        (0, i.jsx)("ul", {
                                          className: "space-y-2",
                                          children: e.items.map((t, a) =>
                                            (0, i.jsxs)(
                                              "li",
                                              {
                                                className:
                                                  "flex items-center gap-2 text-gray-700",
                                                children: [
                                                  (0, i.jsx)("div", {
                                                    className:
                                                      "w-2 h-2 rounded-full",
                                                    style: {
                                                      backgroundColor: e.color,
                                                    },
                                                  }),
                                                  (0, i.jsx)("span", {
                                                    children: t,
                                                  }),
                                                ],
                                              },
                                              a
                                            )
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "w-1/2 flex items-center justify-center relative",
                                    children: (0, i.jsx)(d.P.div, {
                                      className:
                                        "absolute left-1/2 w-10 h-10 rounded-full z-10 flex items-center justify-center",
                                      initial: { scale: 0 },
                                      animate: { scale: 1 },
                                      transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.4,
                                      },
                                      style: {
                                        transform: "translateX(-50%)",
                                        backgroundColor: "#fff",
                                        border: "3px solid ".concat(e.color),
                                      },
                                      children: (0, i.jsx)("div", {
                                        className: "w-6 h-6 rounded-full",
                                        style: { backgroundColor: e.color },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "lg:hidden relative",
                    children: [
                      (0, i.jsx)(d.P.div, {
                        className: "absolute left-6 top-0 bottom-0 w-1",
                        initial: { height: 0 },
                        animate: { height: "100%" },
                        transition: { duration: 1.5, ease: "easeInOut" },
                        style: {
                          background:
                            "linear-gradient(to bottom, #FD8A1B, #FFD700, #FF8C00)",
                          transform: "translateX(-50%)",
                        },
                      }),
                      (0, i.jsx)("div", {
                        className: "pl-16 space-y-16",
                        children: e.map((e, t) =>
                          (0, i.jsx)(
                            h.A,
                            {
                              children: (0, i.jsxs)(d.P.div, {
                                initial: { opacity: 0, y: 30 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.6, delay: 0.2 },
                                className: "relative",
                                children: [
                                  (0, i.jsx)(d.P.div, {
                                    className:
                                      "absolute -left-14 top-0 w-8 h-8 rounded-full flex items-center justify-center",
                                    initial: { scale: 0 },
                                    animate: { scale: 1 },
                                    transition: {
                                      type: "spring",
                                      stiffness: 200,
                                      damping: 15,
                                      delay: 0.3,
                                    },
                                    style: {
                                      backgroundColor: "#fff",
                                      border: "3px solid ".concat(e.color),
                                    },
                                    children: (0, i.jsx)("div", {
                                      className: "w-4 h-4 rounded-full",
                                      style: { backgroundColor: e.color },
                                    }),
                                  }),
                                  (0, i.jsxs)(d.P.div, {
                                    className: "bg-white rounded-xl p-6 h-full",
                                    whileHover: {
                                      y: -5,
                                      transition: { duration: 0.2 },
                                    },
                                    style: {
                                      border: "3px solid ".concat(e.color),
                                      boxShadow:
                                        "6px 6px 0 rgba(102, 34, 0, 0.5)",
                                    },
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white",
                                        style: { backgroundColor: e.color },
                                        children: e.icon,
                                      }),
                                      (0, i.jsx)("h3", {
                                        className: "text-xl font-bold mb-4",
                                        style: {
                                          color: "#FD8A1B",
                                          fontFamily: "Chewy, cursive",
                                        },
                                        children: e.title,
                                      }),
                                      (0, i.jsx)("ul", {
                                        className: "space-y-2",
                                        children: e.items.map((t, a) =>
                                          (0, i.jsxs)(
                                            "li",
                                            {
                                              className:
                                                "flex items-center gap-2 text-gray-700",
                                              children: [
                                                (0, i.jsx)("div", {
                                                  className:
                                                    "w-2 h-2 rounded-full",
                                                  style: {
                                                    backgroundColor: e.color,
                                                  },
                                                }),
                                                (0, i.jsx)("span", {
                                                  children: t,
                                                }),
                                              ],
                                            },
                                            a
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        F = () => {
          let e = new Date().getFullYear(),
            t = [
              {
                name: "Twitter",
                icon: (0, i.jsx)(u.tZq, { size: 24 }),
                href: "https://x.com/Aspeneth_X",
              },
              {
                name: "Telegram",
                icon: (0, i.jsx)(r.hFS, { size: 24 }),
                href: "https://t.me/aspen_eth",
              },
            ];
          return (0, i.jsxs)("footer", {
            className: "relative py-16 overflow-hidden",
            style: {
              background:
                "linear-gradient(135deg, #fff9e6 0%, #fef3cd 50%, #fed7aa 100%)",
            },
            children: [
              (0, i.jsx)("div", {
                className: "absolute inset-0 pointer-events-none",
                children: Array.from({ length: 15 }).map((e, t) =>
                  (0, i.jsx)(
                    d.P.div,
                    {
                      className:
                        "absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60",
                      style: {
                        left: "".concat(100 * Math.random(), "%"),
                        top: "".concat(100 * Math.random(), "%"),
                      },
                      animate: {
                        scale: [0.5, 1, 0.5],
                        opacity: [0.3, 0.8, 0.3],
                        rotate: [0, 180, 360],
                      },
                      transition: {
                        duration: 3 + 2 * Math.random(),
                        repeat: 1 / 0,
                        delay: 2 * Math.random(),
                      },
                    },
                    t
                  )
                ),
              }),
              (0, i.jsx)("div", {
                className: "container mx-auto px-6 relative z-10",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col items-center text-center space-y-8",
                  children: [
                    
                    (0, i.jsx)(d.P.div, {
                      className: "flex items-center space-x-6",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.2 },
                      children: t.map((e) =>
                        (0, i.jsxs)(
                          d.P.a,
                          {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center justify-center w-14 h-14 rounded-full relative group",
                            whileHover: { scale: 1.15, y: -5 },
                            whileTap: { scale: 0.95 },
                            style: {
                              background:
                                "linear-gradient(135deg, #FD8A1B 0%, #FF8C00 100%)",
                              border: "3px solid #fff",
                              boxShadow: "0 4px 15px rgba(253, 138, 27, 0.4)",
                            },
                            children: [
                              (0, i.jsx)("div", {
                                className: "text-white",
                                children: e.icon,
                              }),
                              (0, i.jsx)(d.P.span, {
                                className:
                                  "absolute -top-12 opacity-0 group-hover:opacity-100 text-sm font-bold px-3 py-1 rounded-lg pointer-events-none whitespace-nowrap",
                                style: {
                                  background: "#FD8A1B",
                                  color: "#fff",
                                  border: "2px solid #FFD700",
                                },
                                initial: { y: 10 },
                                whileHover: { y: 0 },
                                transition: { duration: 0.2 },
                                children: e.name,
                              }),
                            ],
                          },
                          e.name
                        )
                      ),
                    }),
                    (0, i.jsxs)(d.P.div, {
                      className: "text-center space-y-2",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.4, duration: 0.6 },
                      children: [
                        (0, i.jsxs)("p", {
                          className: "text-sm font-medium",
                          style: { color: "#D45500" },
                          children: [
                            "\xa9 ",
                            e,
                            " ASPEN. All rights reserved.",
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className: "text-xs opacity-75",
                          style: { color: "#D45500" },
                          children:
                            "The adorable rescue pup from the same shelter as Neiro and Cocoro",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        N = { isLowPower: void 0 },
        C = () => {
          if (void 0 !== N.isLowPower) return N.isLowPower;
          let { navigator: e } = window;
          return (N.isLowPower = !0), !0;
        };
      l()(() => a.e(729).then(a.bind(a, 7729)), {
        loadableGenerated: { webpack: () => [7729] },
        ssr: !1,
      });
      let k = l()(() => Promise.resolve().then(a.bind(a, 9157)), {
          loadableGenerated: { webpack: () => [9157] },
          ssr: !1,
        }),
        D = l()(() => a.e(11).then(a.bind(a, 6011)), {
          loadableGenerated: { webpack: () => [6011] },
          ssr: !1,
        });
      l()(() => a.e(933).then(a.bind(a, 6933)), {
        loadableGenerated: { webpack: () => [6933] },
        ssr: !1,
        loading: () =>
          (0, i.jsx)("div", {
            className:
              "min-h-[30vh] w-full bg-gradient-to-r from-[#FD8A1B] to-[#FFD700]",
          }),
      });
      let M = () => {
        let [e, t] = (0, n.useState)(!1),
          [a, o] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          t(!0), o(C());
        }, []);
        let l = [
          {
            title: "Total Supply",
            value: "1,000,000,000 $ASPEN",
            icon: (0, i.jsx)(r.Tsk, {
              className: "text-3xl",
              style: { color: "#FD8A1B" },
            }),
          },
          {
            title: "Tax",
            value: "0% Buy/Sell",
            icon: (0, i.jsx)(r.Tsk, { className: "text-3xl text-green-400" }),
          },
        ];
        return (0, i.jsx)(k, {
          children: (0, i.jsxs)("div", {
            className: "w-full min-h-screen overflow-x-hidden",
            children: [
              (0, i.jsx)(D, {}),
              (0, i.jsxs)(s, {
                children: [
                  (0, i.jsx)(A, {}),
                  (0, i.jsx)(f, {}),
                  (0, i.jsx)(v, { tokenomicsData: l }),
                  (0, i.jsx)(w, {
                    howToBuySteps: [
                      {
                        step: 1,
                        title: "Create a Wallet",
                        description:
                          "Download Phantom or Solflare wallet from their official websites.",
                      },
                      {
                        step: 2,
                        title: "Get SOL",
                        description:
                          "Buy SOL on an exchange and send it to your phantom wallet.",
                      },
                      {
                        step: 3,
                        title: "Go to Jupiter or Raydium",
                        description:
                          "Visit Jupiter.ag or Raydium.io and connect your wallet.",
                      },
                      {
                        step: 4,
                        title: "Swap SOL for $ASPEN",
                        description: "Enter the $ASPEN token address and swap.",
                      },
                    ],
                  }),
                  (0, i.jsx)(j, {
                    roadmapData: [
                      {
                        phase: "Phase 1",
                        description:
                          "Fair Launch, Community Building, Initial Marketing",
                      },
                      {
                        phase: "Phase 2",
                        description: "CoinGecko/CMC Listings, Meme Contests",
                      },
                      {
                        phase: "Phase 3",
                        description: "Exchange Listings, Expanded Ecosystem",
                      },
                    ],
                  }),
                  (0, i.jsx)(F, {}),
                ],
              }),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [835, 938, 517, 897, 689, 636, 593, 792], () => t(6760)),
      (_N_E = e.O());
  },
]);
