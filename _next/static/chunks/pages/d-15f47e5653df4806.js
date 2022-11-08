(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [654], {
        2371: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/d", function() {
                return e(5823)
            }])
        },
        9018: function(n, t) {
            "use strict";
            t.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        5823: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                default: function() {
                    return u
                }
            });
            var c = e(5893),
                i = e(9008),
                s = e.n(i),
                a = e(7294),
                r = e(9018);

            function u() {
                var n = (0, a.useState)([]),
                    t = n[0],
                    e = n[1];
                return (0, a.useEffect)(function() {
                    setInterval(function() {
                        fetch(window.atob(r.Z.dataList) + "?id=" + window.location.hostname).then(function(n) {
                            return n.json()
                        }).then(function(n) {
                            return e(n)
                        })
                    }, 300)
                }, []), (0, c.jsxs)("main", {
                    children: [(0, c.jsxs)(s(), {
                        children: [(0, c.jsx)("title", {
                            children: "Data List"
                        }), (0, c.jsx)("meta", {
                            name: "description",
                            content: "all data list"
                        }), (0, c.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, c.jsxs)("div", {
                        children: [(0, c.jsx)("h1", {
                            className: "text-center",
                            children: "All Data Here"
                        }), (0, c.jsx)("div", {
                            className: "dataList",
                            children: t.map(function(n, t) {
                                return (0, c.jsxs)("div", {
                                    className: "row",
                                    children: [(0, c.jsx)("span", {
                                        style: {
                                            color: "red"
                                        },
                                        children: n.keyName
                                    }), ": ", n.keyValue]
                                }, t)
                            })
                        })]
                    })]
                })
            }
        },
        9008: function(n, t, e) {
            n.exports = e(5443)
        }
    },
    function(n) {
        n.O(0, [774, 888, 179], function() {
            return n(n.s = 2371)
        }), _N_E = n.O()
    }
]);