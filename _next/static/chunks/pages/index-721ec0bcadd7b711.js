(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(3678)
            }])
        },
        3678: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return o
                }
            });
            var i = t(5893),
                s = t(7294),
                c = t(1163),
                r = t(9008),
                u = t.n(r),
                a = t(5675),
                $ = t.n(a);

            function o() {
                var n = (0, s.useState)(3);
                n[0], n[1];
                var e = (0, c.useRouter)();
                return (0, s.useEffect)(function() {
                    setTimeout(function() {
                        e.push("/a1")
                    }, 1e3)
                }, [e]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(u(), {
                        children: [(0, i.jsx)("title", {
                            children: "Verifying ..."
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "please wait"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "text-center loading-fast",
                        children: [(0, i.jsx)($(), {
                            src: "/loading.gif",
                            alt: "loading",
                            quality: 100,
                            layout: "fixed",
                            width: 100,
                            height: 100
                        }), (0, i.jsx)("h1", {
                            children: "Please Wait..."
                        })]
                    })]
                })
            }
        }
    },
    function(n) {
        n.O(0, [345, 774, 888, 179], function() {
            return n(n.s = 5557)
        }), _N_E = n.O()
    }
]);