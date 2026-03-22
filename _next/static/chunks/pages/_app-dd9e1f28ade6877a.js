(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    92: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(8115);
        },
      ]);
    },
    3687: () => {},
    6048: () => {},
    7328: (e, t, n) => {
      e.exports = n(9836);
    },
    8115: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var o = n(7876);
      n(6048), n(3687);
      var r = n(7328),
        a = n.n(r),
        i = n(4232);
      let s = function (e) {
        let { Component: t, pageProps: n } = e,
          [r, s] = (0, i.useState)(!1),
          [d, m] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            s(!0);
            let e = () => {
              document.documentElement.style.setProperty(
                "--vh",
                "".concat(0.01 * window.innerHeight, "px")
              );
            };
            (document.body.style.overflow = "auto"),
              (document.body.style.overflowX = "hidden"),
              (document.documentElement.style.overflow = "auto"),
              (document.documentElement.style.overflowX = "hidden");
            let t = window.matchMedia("(prefers-reduced-motion: reduce)");
            m(t.matches);
            let n = (e) => {
              m(e.matches);
            };
            return (
              t.addEventListener("change", n),
              window.addEventListener("resize", e, { passive: !0 }),
              e(),
              () => {
                t.removeEventListener("change", n),
                  window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(a(), {
                children: [
                  (0, o.jsx)("style", {
                    children:
                      "\n          *, *::before, *::after { box-sizing: border-box; }\n          body { margin: 0; padding: 0; min-height: 100vh; text-rendering: optimizeSpeed; }\n          img, picture { max-width: 100%; display: block; }\n          svg { display: inline-block; vertical-align: middle; }\n        ",
                  }),
                  (0, o.jsx)("title", {
                    children:
                      "ASPEN | $ASPEN - The Adorable Anime Pup on Solana",
                  }),
                  (0, o.jsx)("meta", {
                    property: "og:title",
                    content:
                      "ASPEN | $ASPEN - The Adorable Anime Pup on Solana",
                  }),
                  (0, o.jsx)("meta", {
                    name: "description",
                    content:
                      "ASPEN - The adorable rescue pup from the same shelter as Neiro and Cocoro is here to take over the crypto world! Join the anime adventure with $ASPEN.",
                  }),
                  (0, o.jsx)("meta", {
                    property: "og:description",
                    content:
                      "ASPEN - The adorable rescue pup from the same shelter as Neiro and Cocoro is here to take over the crypto world! Join the anime adventure with $ASPEN.",
                  }),
                  (0, o.jsx)("meta", {
                    property: "og:url",
                    content: "https://komechan.com",
                  }),
                  (0, o.jsx)("meta", {
                    property: "og:image",
                    content: "/images/logo.png",
                  }),
                  (0, o.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, o.jsx)("meta", {
                    name: "theme-color",
                    content: "#FD8A1B",
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                style: { opacity: +!!r, transition: "opacity 0.5s" },
                className: d ? "reduced-motion" : "",
                id: "app-root",
                children: (0, o.jsx)(t, { ...n }),
              }),
            ],
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(92), t(8253))), (_N_E = e.O());
  },
]);
