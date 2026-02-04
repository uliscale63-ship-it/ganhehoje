function B0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
            i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Br(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var eh = {
    exports: {}
}
    , Ds = {}
    , th = {
        exports: {}
    }
    , B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yo = Symbol.for("react.element")
    , z0 = Symbol.for("react.portal")
    , U0 = Symbol.for("react.fragment")
    , $0 = Symbol.for("react.strict_mode")
    , W0 = Symbol.for("react.profiler")
    , H0 = Symbol.for("react.provider")
    , G0 = Symbol.for("react.context")
    , K0 = Symbol.for("react.forward_ref")
    , Y0 = Symbol.for("react.suspense")
    , X0 = Symbol.for("react.memo")
    , Q0 = Symbol.for("react.lazy")
    , sd = Symbol.iterator;
function q0(e) {
    return e === null || typeof e != "object" ? null : (e = sd && e[sd] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var nh = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , rh = Object.assign
    , oh = {};
function zr(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = oh,
        this.updater = n || nh
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
zr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function ih() { }
ih.prototype = zr.prototype;
function ju(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = oh,
        this.updater = n || nh
}
var Ru = ju.prototype = new ih;
Ru.constructor = ju;
rh(Ru, zr.prototype);
Ru.isPureReactComponent = !0;
var ad = Array.isArray
    , sh = Object.prototype.hasOwnProperty
    , Mu = {
        current: null
    }
    , ah = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function lh(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
            t.key !== void 0 && (i = "" + t.key),
            t)
            sh.call(t, r) && !ah.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Yo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Mu.current
    }
}
function Z0(e, t) {
    return {
        $$typeof: Yo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Du(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yo
}
function J0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var ld = /\/+/g;
function pa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? J0("" + e.key) : t.toString(36)
}
function Oi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Yo:
                    case z0:
                        s = !0
                }
        }
    if (s)
        return s = e,
            o = o(s),
            e = r === "" ? "." + pa(s, 0) : r,
            ad(o) ? (n = "",
                e != null && (n = e.replace(ld, "$&/") + "/"),
                Oi(o, t, n, "", function (u) {
                    return u
                })) : o != null && (Du(o) && (o = Z0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(ld, "$&/") + "/") + e)),
                    t.push(o)),
            1;
    if (s = 0,
        r = r === "" ? "." : r + ":",
        ad(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + pa(i, a);
            s += Oi(i, t, n, l, o)
        }
    else if (l = q0(e),
        typeof l == "function")
        for (e = l.call(e),
            a = 0; !(i = e.next()).done;)
            i = i.value,
                l = r + pa(i, a++),
                s += Oi(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ai(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , o = 0;
    return Oi(e, r, "", "", function (i) {
        return t.call(n, i, o++)
    }),
        r
}
function ex(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
    , Ii = {
        transition: null
    }
    , tx = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: Ii,
        ReactCurrentOwner: Mu
    };
function uh() {
    throw Error("act(...) is not supported in production builds of React.")
}
B.Children = {
    map: ai,
    forEach: function (e, t, n) {
        ai(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return ai(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return ai(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Du(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
B.Component = zr;
B.Fragment = U0;
B.Profiler = W0;
B.PureComponent = ju;
B.StrictMode = $0;
B.Suspense = Y0;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tx;
B.act = uh;
B.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = rh({}, e.props)
        , o = e.key
        , i = e.ref
        , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
            s = Mu.current),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            sh.call(t, l) && !ah.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Yo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
    ;
B.createContext = function (e) {
    return e = {
        $$typeof: G0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: H0,
            _context: e
        },
        e.Consumer = e
}
    ;
B.createElement = lh;
B.createFactory = function (e) {
    var t = lh.bind(null, e);
    return t.type = e,
        t
}
    ;
B.createRef = function () {
    return {
        current: null
    }
}
    ;
B.forwardRef = function (e) {
    return {
        $$typeof: K0,
        render: e
    }
}
    ;
B.isValidElement = Du;
B.lazy = function (e) {
    return {
        $$typeof: Q0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ex
    }
}
    ;
B.memo = function (e, t) {
    return {
        $$typeof: X0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
B.startTransition = function (e) {
    var t = Ii.transition;
    Ii.transition = {};
    try {
        e()
    } finally {
        Ii.transition = t
    }
}
    ;
B.unstable_act = uh;
B.useCallback = function (e, t) {
    return Le.current.useCallback(e, t)
}
    ;
B.useContext = function (e) {
    return Le.current.useContext(e)
}
    ;
B.useDebugValue = function () { }
    ;
B.useDeferredValue = function (e) {
    return Le.current.useDeferredValue(e)
}
    ;
B.useEffect = function (e, t) {
    return Le.current.useEffect(e, t)
}
    ;
B.useId = function () {
    return Le.current.useId()
}
    ;
B.useImperativeHandle = function (e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
    ;
B.useInsertionEffect = function (e, t) {
    return Le.current.useInsertionEffect(e, t)
}
    ;
B.useLayoutEffect = function (e, t) {
    return Le.current.useLayoutEffect(e, t)
}
    ;
B.useMemo = function (e, t) {
    return Le.current.useMemo(e, t)
}
    ;
B.useReducer = function (e, t, n) {
    return Le.current.useReducer(e, t, n)
}
    ;
B.useRef = function (e) {
    return Le.current.useRef(e)
}
    ;
B.useState = function (e) {
    return Le.current.useState(e)
}
    ;
B.useSyncExternalStore = function (e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
    ;
B.useTransition = function () {
    return Le.current.useTransition()
}
    ;
B.version = "18.3.1";
th.exports = B;
var m = th.exports;
const G = Br(m)
    , Lu = B0({
        __proto__: null,
        default: G
    }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nx = m
    , rx = Symbol.for("react.element")
    , ox = Symbol.for("react.fragment")
    , ix = Object.prototype.hasOwnProperty
    , sx = nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , ax = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function ch(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t)
        ix.call(t, r) && !ax.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: rx,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: sx.current
    }
}
Ds.Fragment = ox;
Ds.jsx = ch;
Ds.jsxs = ch;
eh.exports = Ds;
var p = eh.exports
    , cl = {}
    , dh = {
        exports: {}
    }
    , Ze = {}
    , fh = {
        exports: {}
    }
    , ph = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(k, D) {
        var _ = k.length;
        k.push(D);
        e: for (; 0 < _;) {
            var L = _ - 1 >>> 1
                , $ = k[L];
            if (0 < o($, D))
                k[L] = D,
                    k[_] = $,
                    _ = L;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var D = k[0]
            , _ = k.pop();
        if (_ !== D) {
            k[0] = _;
            e: for (var L = 0, $ = k.length, Y = $ >>> 1; L < Y;) {
                var We = 2 * (L + 1) - 1
                    , Jn = k[We]
                    , He = We + 1
                    , Cn = k[He];
                if (0 > o(Jn, _))
                    He < $ && 0 > o(Cn, Jn) ? (k[L] = Cn,
                        k[He] = _,
                        L = He) : (k[L] = Jn,
                            k[We] = _,
                            L = We);
                else if (He < $ && 0 > o(Cn, _))
                    k[L] = Cn,
                        k[He] = _,
                        L = He;
                else
                    break e
            }
        }
        return D
    }
    function o(k, D) {
        var _ = k.sortIndex - D.sortIndex;
        return _ !== 0 ? _ : k.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var s = Date
            , a = s.now();
        e.unstable_now = function () {
            return s.now() - a
        }
    }
    var l = []
        , u = []
        , c = 1
        , d = null
        , f = 3
        , g = !1
        , w = !1
        , y = !1
        , S = typeof setTimeout == "function" ? setTimeout : null
        , x = typeof clearTimeout == "function" ? clearTimeout : null
        , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(k) {
        for (var D = n(u); D !== null;) {
            if (D.callback === null)
                r(u);
            else if (D.startTime <= k)
                r(u),
                    D.sortIndex = D.expirationTime,
                    t(l, D);
            else
                break;
            D = n(u)
        }
    }
    function C(k) {
        if (y = !1,
            v(k),
            !w)
            if (n(l) !== null)
                w = !0,
                    U(T);
            else {
                var D = n(u);
                D !== null && de(C, D.startTime - k)
            }
    }
    function T(k, D) {
        w = !1,
            y && (y = !1,
                x(b),
                b = -1),
            g = !0;
        var _ = f;
        try {
            for (v(D),
                d = n(l); d !== null && (!(d.expirationTime > D) || k && !H());) {
                var L = d.callback;
                if (typeof L == "function") {
                    d.callback = null,
                        f = d.priorityLevel;
                    var $ = L(d.expirationTime <= D);
                    D = e.unstable_now(),
                        typeof $ == "function" ? d.callback = $ : d === n(l) && r(l),
                        v(D)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Y = !0;
            else {
                var We = n(u);
                We !== null && de(C, We.startTime - D),
                    Y = !1
            }
            return Y
        } finally {
            d = null,
                f = _,
                g = !1
        }
    }
    var P = !1
        , E = null
        , b = -1
        , A = 5
        , R = -1;
    function H() {
        return !(e.unstable_now() - R < A)
    }
    function O() {
        if (E !== null) {
            var k = e.unstable_now();
            R = k;
            var D = !0;
            try {
                D = E(!0, k)
            } finally {
                D ? oe() : (P = !1,
                    E = null)
            }
        } else
            P = !1
    }
    var oe;
    if (typeof h == "function")
        oe = function () {
            h(O)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
            , ee = M.port2;
        M.port1.onmessage = O,
            oe = function () {
                ee.postMessage(null)
            }
    } else
        oe = function () {
            S(O, 0)
        }
            ;
    function U(k) {
        E = k,
            P || (P = !0,
                oe())
    }
    function de(k, D) {
        b = S(function () {
            k(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (k) {
            k.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            w || g || (w = !0,
                U(T))
        }
        ,
        e.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < k ? Math.floor(1e3 / k) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return f
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(l)
        }
        ,
        e.unstable_next = function (k) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var D = 3;
                    break;
                default:
                    D = f
            }
            var _ = f;
            f = D;
            try {
                return k()
            } finally {
                f = _
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (k, D) {
            switch (k) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    k = 3
            }
            var _ = f;
            f = k;
            try {
                return D()
            } finally {
                f = _
            }
        }
        ,
        e.unstable_scheduleCallback = function (k, D, _) {
            var L = e.unstable_now();
            switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
                _ = typeof _ == "number" && 0 < _ ? L + _ : L) : _ = L,
            k) {
                case 1:
                    var $ = -1;
                    break;
                case 2:
                    $ = 250;
                    break;
                case 5:
                    $ = 1073741823;
                    break;
                case 4:
                    $ = 1e4;
                    break;
                default:
                    $ = 5e3
            }
            return $ = _ + $,
                k = {
                    id: c++,
                    callback: D,
                    priorityLevel: k,
                    startTime: _,
                    expirationTime: $,
                    sortIndex: -1
                },
                _ > L ? (k.sortIndex = _,
                    t(u, k),
                    n(l) === null && k === n(u) && (y ? (x(b),
                        b = -1) : y = !0,
                        de(C, _ - L))) : (k.sortIndex = $,
                            t(l, k),
                            w || g || (w = !0,
                                U(T))),
                k
        }
        ,
        e.unstable_shouldYield = H,
        e.unstable_wrapCallback = function (k) {
            var D = f;
            return function () {
                var _ = f;
                f = D;
                try {
                    return k.apply(this, arguments)
                } finally {
                    f = _
                }
            }
        }
}
)(ph);
fh.exports = ph;
var lx = fh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ux = m
    , Xe = lx;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hh = new Set
    , Eo = {};
function Gn(e, t) {
    jr(e, t),
        jr(e + "Capture", t)
}
function jr(e, t) {
    for (Eo[e] = t,
        e = 0; e < t.length; e++)
        hh.add(t[e])
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , dl = Object.prototype.hasOwnProperty
    , cx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , ud = {}
    , cd = {};
function dx(e) {
    return dl.call(cd, e) ? !0 : dl.call(ud, e) ? !1 : cx.test(e) ? cd[e] = !0 : (ud[e] = !0,
        !1)
}
function fx(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function px(e, t, n, r) {
    if (t === null || typeof t > "u" || fx(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Oe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = o,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = i,
        this.removeEmptyString = s
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Te[e] = new Oe(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Te[t] = new Oe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Te[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Te[e] = new Oe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Te[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Te[e] = new Oe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Te[e] = new Oe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Te[e] = new Oe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Te[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ou = /[\-:]([a-z])/g;
function Iu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Ou, Iu);
    Te[t] = new Oe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Ou, Iu);
    Te[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ou, Iu);
    Te[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Te[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Te.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Te[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function _u(e, t, n, r) {
    var o = Te.hasOwnProperty(t) ? Te[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (px(t, n, o, r) && (n = null),
        r || o === null ? dx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
            r = o.attributeNamespace,
            n === null ? e.removeAttribute(t) : (o = o.type,
                n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var zt = ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , li = Symbol.for("react.element")
    , ir = Symbol.for("react.portal")
    , sr = Symbol.for("react.fragment")
    , Vu = Symbol.for("react.strict_mode")
    , fl = Symbol.for("react.profiler")
    , mh = Symbol.for("react.provider")
    , gh = Symbol.for("react.context")
    , Fu = Symbol.for("react.forward_ref")
    , pl = Symbol.for("react.suspense")
    , hl = Symbol.for("react.suspense_list")
    , Bu = Symbol.for("react.memo")
    , Yt = Symbol.for("react.lazy")
    , vh = Symbol.for("react.offscreen")
    , dd = Symbol.iterator;
function Hr(e) {
    return e === null || typeof e != "object" ? null : (e = dd && e[dd] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var le = Object.assign, ha;
function io(e) {
    if (ha === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ha = t && t[1] || ""
        }
    return `
` + ha + e
}
var ma = !1;
function ga(e, t) {
    if (!e || ma)
        return "";
    ma = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--,
                a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                                a--,
                                0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                    l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        ma = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? io(e) : ""
}
function hx(e) {
    switch (e.tag) {
        case 5:
            return io(e.type);
        case 16:
            return io("Lazy");
        case 13:
            return io("Suspense");
        case 19:
            return io("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ga(e.type, !1),
                e;
        case 11:
            return e = ga(e.type.render, !1),
                e;
        case 1:
            return e = ga(e.type, !0),
                e;
        default:
            return ""
    }
}
function ml(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case sr:
            return "Fragment";
        case ir:
            return "Portal";
        case fl:
            return "Profiler";
        case Vu:
            return "StrictMode";
        case pl:
            return "Suspense";
        case hl:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case gh:
                return (e.displayName || "Context") + ".Consumer";
            case mh:
                return (e._context.displayName || "Context") + ".Provider";
            case Fu:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Bu:
                return t = e.displayName || null,
                    t !== null ? t : ml(e.type) || "Memo";
            case Yt:
                t = e._payload,
                    e = e._init;
                try {
                    return ml(e(t))
                } catch { }
        }
    return null
}
function mx(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ml(t);
        case 8:
            return t === Vu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function pn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function yh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function gx(e) {
    var t = yh(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
            , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this)
            },
            set: function (s) {
                r = "" + s,
                    i.call(this, s)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (s) {
                r = "" + s
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function ui(e) {
    e._valueTracker || (e._valueTracker = gx(e))
}
function xh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = yh(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function Zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function gl(e, t) {
    var n = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function fd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = pn(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function wh(e, t) {
    t = t.checked,
        t != null && _u(e, "checked", t, !1)
}
function vl(e, t) {
    wh(e, t);
    var n = pn(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && yl(e, t.type, pn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function pd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function yl(e, t, n) {
    (t !== "number" || Zi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var so = Array.isArray;
function Sr(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + pn(n),
            t = null,
            o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                    r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function xl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function hd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(N(92));
            if (so(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: pn(n)
    }
}
function Sh(e, t) {
    var n = pn(t.value)
        , r = pn(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function md(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ch(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function wl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ch(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ci, Th = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (ci = ci || document.createElement("div"),
            ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ci.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function Po(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var co = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , vx = ["Webkit", "ms", "Moz", "O"];
Object.keys(co).forEach(function (e) {
    vx.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            co[t] = co[e]
    })
});
function Eh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || co.hasOwnProperty(e) && co[e] ? ("" + t).trim() : t + "px"
}
function Ph(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , o = Eh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : e[n] = o
        }
}
var yx = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Sl(e, t) {
    if (t) {
        if (yx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Cl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Tl = null;
function zu(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var El = null
    , Cr = null
    , Tr = null;
function gd(e) {
    if (e = qo(e)) {
        if (typeof El != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = Vs(t),
            El(e.stateNode, e.type, t))
    }
}
function bh(e) {
    Cr ? Tr ? Tr.push(e) : Tr = [e] : Cr = e
}
function Nh() {
    if (Cr) {
        var e = Cr
            , t = Tr;
        if (Tr = Cr = null,
            gd(e),
            t)
            for (e = 0; e < t.length; e++)
                gd(t[e])
    }
}
function kh(e, t) {
    return e(t)
}
function Ah() { }
var va = !1;
function jh(e, t, n) {
    if (va)
        return e(t, n);
    va = !0;
    try {
        return kh(e, t, n)
    } finally {
        va = !1,
            (Cr !== null || Tr !== null) && (Ah(),
                Nh())
    }
}
function bo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Vs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Pl = !1;
if (Ot)
    try {
        var Gr = {};
        Object.defineProperty(Gr, "passive", {
            get: function () {
                Pl = !0
            }
        }),
            window.addEventListener("test", Gr, Gr),
            window.removeEventListener("test", Gr, Gr)
    } catch {
        Pl = !1
    }
function xx(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var fo = !1
    , Ji = null
    , es = !1
    , bl = null
    , wx = {
        onError: function (e) {
            fo = !0,
                Ji = e
        }
    };
function Sx(e, t, n, r, o, i, s, a, l) {
    fo = !1,
        Ji = null,
        xx.apply(wx, arguments)
}
function Cx(e, t, n, r, o, i, s, a, l) {
    if (Sx.apply(this, arguments),
        fo) {
        if (fo) {
            var u = Ji;
            fo = !1,
                Ji = null
        } else
            throw Error(N(198));
        es || (es = !0,
            bl = u)
    }
}
function Kn(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Rh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function vd(e) {
    if (Kn(e) !== e)
        throw Error(N(188))
}
function Tx(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Kn(e),
            t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n)
                    return vd(o),
                        e;
                if (i === r)
                    return vd(o),
                        t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = o,
                r = i;
        else {
            for (var s = !1, a = o.child; a;) {
                if (a === n) {
                    s = !0,
                        n = o,
                        r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                        r = o,
                        n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0,
                            n = i,
                            r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                            r = i,
                            n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function Mh(e) {
    return e = Tx(e),
        e !== null ? Dh(e) : null
}
function Dh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = Dh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Lh = Xe.unstable_scheduleCallback
    , yd = Xe.unstable_cancelCallback
    , Ex = Xe.unstable_shouldYield
    , Px = Xe.unstable_requestPaint
    , fe = Xe.unstable_now
    , bx = Xe.unstable_getCurrentPriorityLevel
    , Uu = Xe.unstable_ImmediatePriority
    , Oh = Xe.unstable_UserBlockingPriority
    , ts = Xe.unstable_NormalPriority
    , Nx = Xe.unstable_LowPriority
    , Ih = Xe.unstable_IdlePriority
    , Ls = null
    , Tt = null;
function kx(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
        try {
            Tt.onCommitFiberRoot(Ls, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var ht = Math.clz32 ? Math.clz32 : Rx
    , Ax = Math.log
    , jx = Math.LN2;
function Rx(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (Ax(e) / jx | 0) | 0
}
var di = 64
    , fi = 4194304;
function ao(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , o = e.suspendedLanes
        , i = e.pingedLanes
        , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = ao(a) : (i &= s,
            i !== 0 && (r = ao(i)))
    } else
        s = n & ~o,
            s !== 0 ? r = ao(s) : i !== 0 && (r = ao(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
        i = t & -t,
        o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - ht(t),
                o = 1 << n,
                r |= e[n],
                t &= ~o;
    return r
}
function Mx(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function Dx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - ht(i)
            , a = 1 << s
            , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Mx(a, t)) : l <= t && (e.expiredLanes |= a),
            i &= ~a
    }
}
function Nl(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function _h() {
    var e = di;
    return di <<= 1,
        !(di & 4194240) && (di = 64),
        e
}
function ya(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Xo(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - ht(t),
        e[t] = n
}
function Lx(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - ht(n)
            , i = 1 << o;
        t[o] = 0,
            r[o] = -1,
            e[o] = -1,
            n &= ~i
    }
}
function $u(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ht(n)
            , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
            n &= ~o
    }
}
var K = 0;
function Vh(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fh, Wu, Bh, zh, Uh, kl = !1, pi = [], nn = null, rn = null, on = null, No = new Map, ko = new Map, qt = [], Ox = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function xd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            nn = null;
            break;
        case "dragenter":
        case "dragleave":
            rn = null;
            break;
        case "mouseover":
        case "mouseout":
            on = null;
            break;
        case "pointerover":
        case "pointerout":
            No.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ko.delete(t.pointerId)
    }
}
function Kr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
        t !== null && (t = qo(t),
            t !== null && Wu(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            o !== null && t.indexOf(o) === -1 && t.push(o),
            e)
}
function Ix(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return nn = Kr(nn, e, t, n, r, o),
                !0;
        case "dragenter":
            return rn = Kr(rn, e, t, n, r, o),
                !0;
        case "mouseover":
            return on = Kr(on, e, t, n, r, o),
                !0;
        case "pointerover":
            var i = o.pointerId;
            return No.set(i, Kr(No.get(i) || null, e, t, n, r, o)),
                !0;
        case "gotpointercapture":
            return i = o.pointerId,
                ko.set(i, Kr(ko.get(i) || null, e, t, n, r, o)),
                !0
    }
    return !1
}
function $h(e) {
    var t = Rn(e.target);
    if (t !== null) {
        var n = Kn(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = Rh(n),
                    t !== null) {
                    e.blockedOn = t,
                        Uh(e.priority, function () {
                            Bh(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function _i(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Tl = r,
                n.target.dispatchEvent(r),
                Tl = null
        } else
            return t = qo(n),
                t !== null && Wu(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function wd(e, t, n) {
    _i(e) && n.delete(t)
}
function _x() {
    kl = !1,
        nn !== null && _i(nn) && (nn = null),
        rn !== null && _i(rn) && (rn = null),
        on !== null && _i(on) && (on = null),
        No.forEach(wd),
        ko.forEach(wd)
}
function Yr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        kl || (kl = !0,
            Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, _x)))
}
function Ao(e) {
    function t(o) {
        return Yr(o, e)
    }
    if (0 < pi.length) {
        Yr(pi[0], e);
        for (var n = 1; n < pi.length; n++) {
            var r = pi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (nn !== null && Yr(nn, e),
        rn !== null && Yr(rn, e),
        on !== null && Yr(on, e),
        No.forEach(t),
        ko.forEach(t),
        n = 0; n < qt.length; n++)
        r = qt[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qt.length && (n = qt[0],
        n.blockedOn === null);)
        $h(n),
            n.blockedOn === null && qt.shift()
}
var Er = zt.ReactCurrentBatchConfig
    , rs = !0;
function Vx(e, t, n, r) {
    var o = K
        , i = Er.transition;
    Er.transition = null;
    try {
        K = 1,
            Hu(e, t, n, r)
    } finally {
        K = o,
            Er.transition = i
    }
}
function Fx(e, t, n, r) {
    var o = K
        , i = Er.transition;
    Er.transition = null;
    try {
        K = 4,
            Hu(e, t, n, r)
    } finally {
        K = o,
            Er.transition = i
    }
}
function Hu(e, t, n, r) {
    if (rs) {
        var o = Al(e, t, n, r);
        if (o === null)
            ka(e, t, r, os, n),
                xd(e, r);
        else if (Ix(o, e, t, n, r))
            r.stopPropagation();
        else if (xd(e, r),
            t & 4 && -1 < Ox.indexOf(e)) {
            for (; o !== null;) {
                var i = qo(o);
                if (i !== null && Fh(i),
                    i = Al(e, t, n, r),
                    i === null && ka(e, t, r, os, n),
                    i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            ka(e, t, r, null, n)
    }
}
var os = null;
function Al(e, t, n, r) {
    if (os = null,
        e = zu(r),
        e = Rn(e),
        e !== null)
        if (t = Kn(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = Rh(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return os = e,
        null
}
function Wh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (bx()) {
                case Uu:
                    return 1;
                case Oh:
                    return 4;
                case ts:
                case Nx:
                    return 16;
                case Ih:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Jt = null
    , Gu = null
    , Vi = null;
function Hh() {
    if (Vi)
        return Vi;
    var e, t = Gu, n = t.length, r, o = "value" in Jt ? Jt.value : Jt.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Vi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Fi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function hi() {
    return !0
}
function Sd() {
    return !1
}
function Je(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
            this._targetInst = o,
            this.type = r,
            this.nativeEvent = i,
            this.target = s,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hi : Sd,
            this.isPropagationStopped = Sd,
            this
    }
    return le(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = hi)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = hi)
        },
        persist: function () { },
        isPersistent: hi
    }),
        t
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ku = Je(Ur), Qo = le({}, Ur, {
    view: 0,
    detail: 0
}), Bx = Je(Qo), xa, wa, Xr, Os = le({}, Qo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== Xr && (Xr && e.type === "mousemove" ? (xa = e.screenX - Xr.screenX,
            wa = e.screenY - Xr.screenY) : wa = xa = 0,
            Xr = e),
            xa)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : wa
    }
}), Cd = Je(Os), zx = le({}, Os, {
    dataTransfer: 0
}), Ux = Je(zx), $x = le({}, Qo, {
    relatedTarget: 0
}), Sa = Je($x), Wx = le({}, Ur, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hx = Je(Wx), Gx = le({}, Ur, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), Kx = Je(Gx), Yx = le({}, Ur, {
    data: 0
}), Td = Je(Yx), Xx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Qx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, qx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Zx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qx[e]) ? !!t[e] : !1
}
function Yu() {
    return Zx
}
var Jx = le({}, Qo, {
    key: function (e) {
        if (e.key) {
            var t = Xx[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Fi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qx[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yu,
    charCode: function (e) {
        return e.type === "keypress" ? Fi(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , ew = Je(Jx)
    , tw = le({}, Os, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , Ed = Je(tw)
    , nw = le({}, Qo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Yu
    })
    , rw = Je(nw)
    , ow = le({}, Ur, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , iw = Je(ow)
    , sw = le({}, Os, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , aw = Je(sw)
    , lw = [9, 13, 27, 32]
    , Xu = Ot && "CompositionEvent" in window
    , po = null;
Ot && "documentMode" in document && (po = document.documentMode);
var uw = Ot && "TextEvent" in window && !po
    , Gh = Ot && (!Xu || po && 8 < po && 11 >= po)
    , Pd = String.fromCharCode(32)
    , bd = !1;
function Kh(e, t) {
    switch (e) {
        case "keyup":
            return lw.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Yh(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var ar = !1;
function cw(e, t) {
    switch (e) {
        case "compositionend":
            return Yh(t);
        case "keypress":
            return t.which !== 32 ? null : (bd = !0,
                Pd);
        case "textInput":
            return e = t.data,
                e === Pd && bd ? null : e;
        default:
            return null
    }
}
function dw(e, t) {
    if (ar)
        return e === "compositionend" || !Xu && Kh(e, t) ? (e = Hh(),
            Vi = Gu = Jt = null,
            ar = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Gh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var fw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Nd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fw[e.type] : t === "textarea"
}
function Xh(e, t, n, r) {
    bh(r),
        t = is(t, "onChange"),
        0 < t.length && (n = new Ku("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var ho = null
    , jo = null;
function pw(e) {
    sm(e, 0)
}
function Is(e) {
    var t = cr(e);
    if (xh(t))
        return e
}
function hw(e, t) {
    if (e === "change")
        return t
}
var Qh = !1;
if (Ot) {
    var Ca;
    if (Ot) {
        var Ta = "oninput" in document;
        if (!Ta) {
            var kd = document.createElement("div");
            kd.setAttribute("oninput", "return;"),
                Ta = typeof kd.oninput == "function"
        }
        Ca = Ta
    } else
        Ca = !1;
    Qh = Ca && (!document.documentMode || 9 < document.documentMode)
}
function Ad() {
    ho && (ho.detachEvent("onpropertychange", qh),
        jo = ho = null)
}
function qh(e) {
    if (e.propertyName === "value" && Is(jo)) {
        var t = [];
        Xh(t, jo, e, zu(e)),
            jh(pw, t)
    }
}
function mw(e, t, n) {
    e === "focusin" ? (Ad(),
        ho = t,
        jo = n,
        ho.attachEvent("onpropertychange", qh)) : e === "focusout" && Ad()
}
function gw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Is(jo)
}
function vw(e, t) {
    if (e === "click")
        return Is(t)
}
function yw(e, t) {
    if (e === "input" || e === "change")
        return Is(t)
}
function xw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gt = typeof Object.is == "function" ? Object.is : xw;
function Ro(e, t) {
    if (gt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!dl.call(t, o) || !gt(e[o], t[o]))
            return !1
    }
    return !0
}
function jd(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Rd(e, t) {
    var n = jd(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = jd(n)
    }
}
function Zh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Jh() {
    for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Zi(e.document)
    }
    return t
}
function Qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ww(e) {
    var t = Jh()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zh(n.ownerDocument.documentElement, n)) {
        if (r !== null && Qu(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                    , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                    !e.extend && i > r && (o = r,
                        r = i,
                        i = o),
                    o = Rd(n, i);
                var s = Rd(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t),
                        e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var Sw = Ot && "documentMode" in document && 11 >= document.documentMode
    , lr = null
    , jl = null
    , mo = null
    , Rl = !1;
function Md(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Rl || lr == null || lr !== Zi(r) || (r = lr,
        "selectionStart" in r && Qu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        mo && Ro(mo, r) || (mo = r,
            r = is(jl, "onSelect"),
            0 < r.length && (t = new Ku("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = lr)))
}
function mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var ur = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd")
}
    , Ea = {}
    , em = {};
Ot && (em = document.createElement("div").style,
    "AnimationEvent" in window || (delete ur.animationend.animation,
        delete ur.animationiteration.animation,
        delete ur.animationstart.animation),
    "TransitionEvent" in window || delete ur.transitionend.transition);
function _s(e) {
    if (Ea[e])
        return Ea[e];
    if (!ur[e])
        return e;
    var t = ur[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in em)
            return Ea[e] = t[n];
    return e
}
var tm = _s("animationend")
    , nm = _s("animationiteration")
    , rm = _s("animationstart")
    , om = _s("transitionend")
    , im = new Map
    , Dd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vn(e, t) {
    im.set(e, t),
        Gn(t, [e])
}
for (var Pa = 0; Pa < Dd.length; Pa++) {
    var ba = Dd[Pa]
        , Cw = ba.toLowerCase()
        , Tw = ba[0].toUpperCase() + ba.slice(1);
    vn(Cw, "on" + Tw)
}
vn(tm, "onAnimationEnd");
vn(nm, "onAnimationIteration");
vn(rm, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(om, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
Gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , Ew = new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));
function Ld(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        Cx(r, t, void 0, e),
        e.currentTarget = null
}
function sm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                        , l = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        l !== i && o.isPropagationStopped())
                        break e;
                    Ld(o, a, u),
                        i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                        l = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        l !== i && o.isPropagationStopped())
                        break e;
                    Ld(o, a, u),
                        i = l
                }
        }
    }
    if (es)
        throw e = bl,
        es = !1,
        bl = null,
        e
}
function Z(e, t) {
    var n = t[Il];
    n === void 0 && (n = t[Il] = new Set);
    var r = e + "__bubble";
    n.has(r) || (am(t, e, 2, !1),
        n.add(r))
}
function Na(e, t, n) {
    var r = 0;
    t && (r |= 4),
        am(n, e, r, t)
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function Mo(e) {
    if (!e[gi]) {
        e[gi] = !0,
            hh.forEach(function (n) {
                n !== "selectionchange" && (Ew.has(n) || Na(n, !1, e),
                    Na(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gi] || (t[gi] = !0,
            Na("selectionchange", !1, t))
    }
}
function am(e, t, n, r) {
    switch (Wh(t)) {
        case 1:
            var o = Vx;
            break;
        case 4:
            o = Fx;
            break;
        default:
            o = Hu
    }
    n = o.bind(null, t, n, e),
        o = void 0,
        !Pl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1)
}
function ka(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null;) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                            l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null;) {
                    if (s = Rn(a),
                        s === null)
                        return;
                    if (l = s.tag,
                        l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    jh(function () {
        var u = i
            , c = zu(n)
            , d = [];
        e: {
            var f = im.get(e);
            if (f !== void 0) {
                var g = Ku
                    , w = e;
                switch (e) {
                    case "keypress":
                        if (Fi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        g = ew;
                        break;
                    case "focusin":
                        w = "focus",
                            g = Sa;
                        break;
                    case "focusout":
                        w = "blur",
                            g = Sa;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Sa;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Cd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Ux;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = rw;
                        break;
                    case tm:
                    case nm:
                    case rm:
                        g = Hx;
                        break;
                    case om:
                        g = iw;
                        break;
                    case "scroll":
                        g = Bx;
                        break;
                    case "wheel":
                        g = aw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Kx;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Ed
                }
                var y = (t & 4) !== 0
                    , S = !y && e === "scroll"
                    , x = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var h = u, v; h !== null;) {
                    v = h;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C,
                        x !== null && (C = bo(h, x),
                            C != null && y.push(Do(h, C, v)))),
                        S)
                        break;
                    h = h.return
                }
                0 < y.length && (f = new g(f, w, null, n, c),
                    d.push({
                        event: f,
                        listeners: y
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                    g = e === "mouseout" || e === "pointerout",
                    f && n !== Tl && (w = n.relatedTarget || n.fromElement) && (Rn(w) || w[It]))
                    break e;
                if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                    g ? (w = n.relatedTarget || n.toElement,
                        g = u,
                        w = w ? Rn(w) : null,
                        w !== null && (S = Kn(w),
                            w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null,
                                w = u),
                    g !== w)) {
                    if (y = Cd,
                        C = "onMouseLeave",
                        x = "onMouseEnter",
                        h = "mouse",
                        (e === "pointerout" || e === "pointerover") && (y = Ed,
                            C = "onPointerLeave",
                            x = "onPointerEnter",
                            h = "pointer"),
                        S = g == null ? f : cr(g),
                        v = w == null ? f : cr(w),
                        f = new y(C, h + "leave", g, n, c),
                        f.target = S,
                        f.relatedTarget = v,
                        C = null,
                        Rn(c) === u && (y = new y(x, h + "enter", w, n, c),
                            y.target = v,
                            y.relatedTarget = S,
                            C = y),
                        S = C,
                        g && w)
                        t: {
                            for (y = g,
                                x = w,
                                h = 0,
                                v = y; v; v = er(v))
                                h++;
                            for (v = 0,
                                C = x; C; C = er(C))
                                v++;
                            for (; 0 < h - v;)
                                y = er(y),
                                    h--;
                            for (; 0 < v - h;)
                                x = er(x),
                                    v--;
                            for (; h--;) {
                                if (y === x || x !== null && y === x.alternate)
                                    break t;
                                y = er(y),
                                    x = er(x)
                            }
                            y = null
                        }
                    else
                        y = null;
                    g !== null && Od(d, f, g, y, !1),
                        w !== null && S !== null && Od(d, S, w, y, !0)
                }
            }
            e: {
                if (f = u ? cr(u) : window,
                    g = f.nodeName && f.nodeName.toLowerCase(),
                    g === "select" || g === "input" && f.type === "file")
                    var T = hw;
                else if (Nd(f))
                    if (Qh)
                        T = yw;
                    else {
                        T = gw;
                        var P = mw
                    }
                else
                    (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (T = vw);
                if (T && (T = T(e, u))) {
                    Xh(d, T, n, c);
                    break e
                }
                P && P(e, f, u),
                    e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && yl(f, "number", f.value)
            }
            switch (P = u ? cr(u) : window,
            e) {
                case "focusin":
                    (Nd(P) || P.contentEditable === "true") && (lr = P,
                        jl = u,
                        mo = null);
                    break;
                case "focusout":
                    mo = jl = lr = null;
                    break;
                case "mousedown":
                    Rl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Rl = !1,
                        Md(d, n, c);
                    break;
                case "selectionchange":
                    if (Sw)
                        break;
                case "keydown":
                case "keyup":
                    Md(d, n, c)
            }
            var E;
            if (Xu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e
                    }
                    b = void 0
                }
            else
                ar ? Kh(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (Gh && n.locale !== "ko" && (ar || b !== "onCompositionStart" ? b === "onCompositionEnd" && ar && (E = Hh()) : (Jt = c,
                Gu = "value" in Jt ? Jt.value : Jt.textContent,
                ar = !0)),
                P = is(u, b),
                0 < P.length && (b = new Td(b, e, null, n, c),
                    d.push({
                        event: b,
                        listeners: P
                    }),
                    E ? b.data = E : (E = Yh(n),
                        E !== null && (b.data = E)))),
                (E = uw ? cw(e, n) : dw(e, n)) && (u = is(u, "onBeforeInput"),
                    0 < u.length && (c = new Td("onBeforeInput", "beforeinput", null, n, c),
                        d.push({
                            event: c,
                            listeners: u
                        }),
                        c.data = E))
        }
        sm(d, t)
    })
}
function Do(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e
            , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
            i = bo(e, n),
            i != null && r.unshift(Do(e, i, o)),
            i = bo(e, t),
            i != null && r.push(Do(e, i, o))),
            e = e.return
    }
    return r
}
function er(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Od(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n
            , l = a.alternate
            , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            o ? (l = bo(n, i),
                l != null && s.unshift(Do(n, l, a))) : o || (l = bo(n, i),
                    l != null && s.push(Do(n, l, a)))),
            n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Pw = /\r\n?/g
    , bw = /\u0000|\uFFFD/g;
function Id(e) {
    return (typeof e == "string" ? e : "" + e).replace(Pw, `
`).replace(bw, "")
}
function vi(e, t, n) {
    if (t = Id(t),
        Id(e) !== t && n)
        throw Error(N(425))
}
function ss() { }
var Ml = null
    , Dl = null;
function Ll(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0
    , Nw = typeof clearTimeout == "function" ? clearTimeout : void 0
    , _d = typeof Promise == "function" ? Promise : void 0
    , kw = typeof queueMicrotask == "function" ? queueMicrotask : typeof _d < "u" ? function (e) {
        return _d.resolve(null).then(e).catch(Aw)
    }
        : Ol;
function Aw(e) {
    setTimeout(function () {
        throw e
    })
}
function Aa(e, t) {
    var n = t
        , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
            o && o.nodeType === 8)
            if (n = o.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                        Ao(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ao(t)
}
function sn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Vd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var $r = Math.random().toString(36).slice(2)
    , St = "__reactFiber$" + $r
    , Lo = "__reactProps$" + $r
    , It = "__reactContainer$" + $r
    , Il = "__reactEvents$" + $r
    , jw = "__reactListeners$" + $r
    , Rw = "__reactHandles$" + $r;
function Rn(e) {
    var t = e[St];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[It] || n[St]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = Vd(e); e !== null;) {
                    if (n = e[St])
                        return n;
                    e = Vd(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function qo(e) {
    return e = e[St] || e[It],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function cr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function Vs(e) {
    return e[Lo] || null
}
var _l = []
    , dr = -1;
function yn(e) {
    return {
        current: e
    }
}
function J(e) {
    0 > dr || (e.current = _l[dr],
        _l[dr] = null,
        dr--)
}
function X(e, t) {
    dr++,
        _l[dr] = e.current,
        e.current = t
}
var hn = {}
    , ke = yn(hn)
    , Be = yn(!1)
    , Bn = hn;
function Rr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
        o
}
function ze(e) {
    return e = e.childContextTypes,
        e != null
}
function as() {
    J(Be),
        J(ke)
}
function Fd(e, t, n) {
    if (ke.current !== hn)
        throw Error(N(168));
    X(ke, t),
        X(Be, n)
}
function lm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(N(108, mx(e) || "Unknown", o));
    return le({}, n, r)
}
function ls(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn,
        Bn = ke.current,
        X(ke, e),
        X(Be, Be.current),
        !0
}
function Bd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = lm(e, t, Bn),
        r.__reactInternalMemoizedMergedChildContext = e,
        J(Be),
        J(ke),
        X(ke, e)) : J(Be),
        X(Be, n)
}
var kt = null
    , Fs = !1
    , ja = !1;
function um(e) {
    kt === null ? kt = [e] : kt.push(e)
}
function Mw(e) {
    Fs = !0,
        um(e)
}
function xn() {
    if (!ja && kt !== null) {
        ja = !0;
        var e = 0
            , t = K;
        try {
            var n = kt;
            for (K = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            kt = null,
                Fs = !1
        } catch (o) {
            throw kt !== null && (kt = kt.slice(e + 1)),
            Lh(Uu, xn),
            o
        } finally {
            K = t,
                ja = !1
        }
    }
    return null
}
var fr = []
    , pr = 0
    , us = null
    , cs = 0
    , nt = []
    , rt = 0
    , zn = null
    , At = 1
    , jt = "";
function Pn(e, t) {
    fr[pr++] = cs,
        fr[pr++] = us,
        us = e,
        cs = t
}
function cm(e, t, n) {
    nt[rt++] = At,
        nt[rt++] = jt,
        nt[rt++] = zn,
        zn = e;
    var r = At;
    e = jt;
    var o = 32 - ht(r) - 1;
    r &= ~(1 << o),
        n += 1;
    var i = 32 - ht(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
            r >>= s,
            o -= s,
            At = 1 << 32 - ht(t) + o | n << o | r,
            jt = i + e
    } else
        At = 1 << i | n << o | r,
            jt = e
}
function qu(e) {
    e.return !== null && (Pn(e, 1),
        cm(e, 1, 0))
}
function Zu(e) {
    for (; e === us;)
        us = fr[--pr],
            fr[pr] = null,
            cs = fr[--pr],
            fr[pr] = null;
    for (; e === zn;)
        zn = nt[--rt],
            nt[rt] = null,
            jt = nt[--rt],
            nt[rt] = null,
            At = nt[--rt],
            nt[rt] = null
}
var Ye = null
    , Ke = null
    , re = !1
    , ft = null;
function dm(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function zd(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    Ye = e,
                    Ke = sn(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    Ye = e,
                    Ke = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = zn !== null ? {
                    id: At,
                    overflow: jt
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = ot(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    Ye = e,
                    Ke = null,
                    !0) : !1;
        default:
            return !1
    }
}
function Vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Fl(e) {
    if (re) {
        var t = Ke;
        if (t) {
            var n = t;
            if (!zd(e, t)) {
                if (Vl(e))
                    throw Error(N(418));
                t = sn(n.nextSibling);
                var r = Ye;
                t && zd(e, t) ? dm(r, n) : (e.flags = e.flags & -4097 | 2,
                    re = !1,
                    Ye = e)
            }
        } else {
            if (Vl(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
                re = !1,
                Ye = e
        }
    }
}
function Ud(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    Ye = e
}
function yi(e) {
    if (e !== Ye)
        return !1;
    if (!re)
        return Ud(e),
            re = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Ll(e.type, e.memoizedProps)),
        t && (t = Ke)) {
        if (Vl(e))
            throw fm(),
            Error(N(418));
        for (; t;)
            dm(e, t),
                t = sn(t.nextSibling)
    }
    if (Ud(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ke = sn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ke = null
        }
    } else
        Ke = Ye ? sn(e.stateNode.nextSibling) : null;
    return !0
}
function fm() {
    for (var e = Ke; e;)
        e = sn(e.nextSibling)
}
function Mr() {
    Ke = Ye = null,
        re = !1
}
function Ju(e) {
    ft === null ? ft = [e] : ft.push(e)
}
var Dw = zt.ReactCurrentBatchConfig;
function Qr(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var o = r
                , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
                ,
                t._stringRef = i,
                t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function xi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function $d(e) {
    var t = e._init;
    return t(e._payload)
}
function pm(e) {
    function t(x, h) {
        if (e) {
            var v = x.deletions;
            v === null ? (x.deletions = [h],
                x.flags |= 16) : v.push(h)
        }
    }
    function n(x, h) {
        if (!e)
            return null;
        for (; h !== null;)
            t(x, h),
                h = h.sibling;
        return null
    }
    function r(x, h) {
        for (x = new Map; h !== null;)
            h.key !== null ? x.set(h.key, h) : x.set(h.index, h),
                h = h.sibling;
        return x
    }
    function o(x, h) {
        return x = cn(x, h),
            x.index = 0,
            x.sibling = null,
            x
    }
    function i(x, h, v) {
        return x.index = v,
            e ? (v = x.alternate,
                v !== null ? (v = v.index,
                    v < h ? (x.flags |= 2,
                        h) : v) : (x.flags |= 2,
                            h)) : (x.flags |= 1048576,
                                h)
    }
    function s(x) {
        return e && x.alternate === null && (x.flags |= 2),
            x
    }
    function a(x, h, v, C) {
        return h === null || h.tag !== 6 ? (h = _a(v, x.mode, C),
            h.return = x,
            h) : (h = o(h, v),
                h.return = x,
                h)
    }
    function l(x, h, v, C) {
        var T = v.type;
        return T === sr ? c(x, h, v.props.children, C, v.key) : h !== null && (h.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Yt && $d(T) === h.type) ? (C = o(h, v.props),
            C.ref = Qr(x, h, v),
            C.return = x,
            C) : (C = Gi(v.type, v.key, v.props, null, x.mode, C),
                C.ref = Qr(x, h, v),
                C.return = x,
                C)
    }
    function u(x, h, v, C) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Va(v, x.mode, C),
            h.return = x,
            h) : (h = o(h, v.children || []),
                h.return = x,
                h)
    }
    function c(x, h, v, C, T) {
        return h === null || h.tag !== 7 ? (h = _n(v, x.mode, C, T),
            h.return = x,
            h) : (h = o(h, v),
                h.return = x,
                h)
    }
    function d(x, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = _a("" + h, x.mode, v),
                h.return = x,
                h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case li:
                    return v = Gi(h.type, h.key, h.props, null, x.mode, v),
                        v.ref = Qr(x, null, h),
                        v.return = x,
                        v;
                case ir:
                    return h = Va(h, x.mode, v),
                        h.return = x,
                        h;
                case Yt:
                    var C = h._init;
                    return d(x, C(h._payload), v)
            }
            if (so(h) || Hr(h))
                return h = _n(h, x.mode, v, null),
                    h.return = x,
                    h;
            xi(x, h)
        }
        return null
    }
    function f(x, h, v, C) {
        var T = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return T !== null ? null : a(x, h, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case li:
                    return v.key === T ? l(x, h, v, C) : null;
                case ir:
                    return v.key === T ? u(x, h, v, C) : null;
                case Yt:
                    return T = v._init,
                        f(x, h, T(v._payload), C)
            }
            if (so(v) || Hr(v))
                return T !== null ? null : c(x, h, v, C, null);
            xi(x, v)
        }
        return null
    }
    function g(x, h, v, C, T) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return x = x.get(v) || null,
                a(h, x, "" + C, T);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case li:
                    return x = x.get(C.key === null ? v : C.key) || null,
                        l(h, x, C, T);
                case ir:
                    return x = x.get(C.key === null ? v : C.key) || null,
                        u(h, x, C, T);
                case Yt:
                    var P = C._init;
                    return g(x, h, v, P(C._payload), T)
            }
            if (so(C) || Hr(C))
                return x = x.get(v) || null,
                    c(h, x, C, T, null);
            xi(h, C)
        }
        return null
    }
    function w(x, h, v, C) {
        for (var T = null, P = null, E = h, b = h = 0, A = null; E !== null && b < v.length; b++) {
            E.index > b ? (A = E,
                E = null) : A = E.sibling;
            var R = f(x, E, v[b], C);
            if (R === null) {
                E === null && (E = A);
                break
            }
            e && E && R.alternate === null && t(x, E),
                h = i(R, h, b),
                P === null ? T = R : P.sibling = R,
                P = R,
                E = A
        }
        if (b === v.length)
            return n(x, E),
                re && Pn(x, b),
                T;
        if (E === null) {
            for (; b < v.length; b++)
                E = d(x, v[b], C),
                    E !== null && (h = i(E, h, b),
                        P === null ? T = E : P.sibling = E,
                        P = E);
            return re && Pn(x, b),
                T
        }
        for (E = r(x, E); b < v.length; b++)
            A = g(E, x, b, v[b], C),
                A !== null && (e && A.alternate !== null && E.delete(A.key === null ? b : A.key),
                    h = i(A, h, b),
                    P === null ? T = A : P.sibling = A,
                    P = A);
        return e && E.forEach(function (H) {
            return t(x, H)
        }),
            re && Pn(x, b),
            T
    }
    function y(x, h, v, C) {
        var T = Hr(v);
        if (typeof T != "function")
            throw Error(N(150));
        if (v = T.call(v),
            v == null)
            throw Error(N(151));
        for (var P = T = null, E = h, b = h = 0, A = null, R = v.next(); E !== null && !R.done; b++,
            R = v.next()) {
            E.index > b ? (A = E,
                E = null) : A = E.sibling;
            var H = f(x, E, R.value, C);
            if (H === null) {
                E === null && (E = A);
                break
            }
            e && E && H.alternate === null && t(x, E),
                h = i(H, h, b),
                P === null ? T = H : P.sibling = H,
                P = H,
                E = A
        }
        if (R.done)
            return n(x, E),
                re && Pn(x, b),
                T;
        if (E === null) {
            for (; !R.done; b++,
                R = v.next())
                R = d(x, R.value, C),
                    R !== null && (h = i(R, h, b),
                        P === null ? T = R : P.sibling = R,
                        P = R);
            return re && Pn(x, b),
                T
        }
        for (E = r(x, E); !R.done; b++,
            R = v.next())
            R = g(E, x, b, R.value, C),
                R !== null && (e && R.alternate !== null && E.delete(R.key === null ? b : R.key),
                    h = i(R, h, b),
                    P === null ? T = R : P.sibling = R,
                    P = R);
        return e && E.forEach(function (O) {
            return t(x, O)
        }),
            re && Pn(x, b),
            T
    }
    function S(x, h, v, C) {
        if (typeof v == "object" && v !== null && v.type === sr && v.key === null && (v = v.props.children),
            typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case li:
                    e: {
                        for (var T = v.key, P = h; P !== null;) {
                            if (P.key === T) {
                                if (T = v.type,
                                    T === sr) {
                                    if (P.tag === 7) {
                                        n(x, P.sibling),
                                            h = o(P, v.props.children),
                                            h.return = x,
                                            x = h;
                                        break e
                                    }
                                } else if (P.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Yt && $d(T) === P.type) {
                                    n(x, P.sibling),
                                        h = o(P, v.props),
                                        h.ref = Qr(x, P, v),
                                        h.return = x,
                                        x = h;
                                    break e
                                }
                                n(x, P);
                                break
                            } else
                                t(x, P);
                            P = P.sibling
                        }
                        v.type === sr ? (h = _n(v.props.children, x.mode, C, v.key),
                            h.return = x,
                            x = h) : (C = Gi(v.type, v.key, v.props, null, x.mode, C),
                                C.ref = Qr(x, h, v),
                                C.return = x,
                                x = C)
                    }
                    return s(x);
                case ir:
                    e: {
                        for (P = v.key; h !== null;) {
                            if (h.key === P)
                                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                    n(x, h.sibling),
                                        h = o(h, v.children || []),
                                        h.return = x,
                                        x = h;
                                    break e
                                } else {
                                    n(x, h);
                                    break
                                }
                            else
                                t(x, h);
                            h = h.sibling
                        }
                        h = Va(v, x.mode, C),
                            h.return = x,
                            x = h
                    }
                    return s(x);
                case Yt:
                    return P = v._init,
                        S(x, h, P(v._payload), C)
            }
            if (so(v))
                return w(x, h, v, C);
            if (Hr(v))
                return y(x, h, v, C);
            xi(x, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
            h !== null && h.tag === 6 ? (n(x, h.sibling),
                h = o(h, v),
                h.return = x,
                x = h) : (n(x, h),
                    h = _a(v, x.mode, C),
                    h.return = x,
                    x = h),
            s(x)) : n(x, h)
    }
    return S
}
var Dr = pm(!0)
    , hm = pm(!1)
    , ds = yn(null)
    , fs = null
    , hr = null
    , ec = null;
function tc() {
    ec = hr = fs = null
}
function nc(e) {
    var t = ds.current;
    J(ds),
        e._currentValue = t
}
function Bl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Pr(e, t) {
    fs = e,
        ec = hr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0),
            e.firstContext = null)
}
function st(e) {
    var t = e._currentValue;
    if (ec !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            hr === null) {
            if (fs === null)
                throw Error(N(308));
            hr = e,
                fs.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            hr = hr.next = e;
    return t
}
var Mn = null;
function rc(e) {
    Mn === null ? Mn = [e] : Mn.push(e)
}
function mm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
        rc(t)) : (n.next = o.next,
            o.next = n),
        t.interleaved = n,
        _t(e, r)
}
function _t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Xt = !1;
function oc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function gm(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function Mt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function an(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        W & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            r.pending = t,
            _t(e, n)
    }
    return o = r.interleaved,
        o === null ? (t.next = t,
            rc(r)) : (t.next = o.next,
                o.next = t),
        r.interleaved = t,
        _t(e, n)
}
function Bi(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            $u(e, n)
    }
}
function Wd(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var o = null
            , i = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                    n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function ps(e, t, n, r) {
    var o = e.updateQueue;
    Xt = !1;
    var i = o.firstBaseUpdate
        , s = o.lastBaseUpdate
        , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
            , u = l.next;
        l.next = null,
            s === null ? i = u : s.next = u,
            s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
                c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
            c = u = l = null,
            a = i;
        do {
            var f = a.lane
                , g = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e
                        , y = a;
                    switch (f = t,
                    g = n,
                    y.tag) {
                        case 1:
                            if (w = y.payload,
                                typeof w == "function") {
                                d = w.call(g, d, f);
                                break e
                            }
                            d = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = y.payload,
                                f = typeof w == "function" ? w.call(g, d, f) : w,
                                f == null)
                                break e;
                            d = le({}, d, f);
                            break e;
                        case 2:
                            Xt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    f = o.effects,
                    f === null ? o.effects = [a] : f.push(a))
            } else
                g = {
                    eventTime: g,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    c === null ? (u = c = g,
                        l = d) : c = c.next = g,
                    s |= f;
            if (a = a.next,
                a === null) {
                if (a = o.shared.pending,
                    a === null)
                    break;
                f = a,
                    a = f.next,
                    f.next = null,
                    o.lastBaseUpdate = f,
                    o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d),
            o.baseState = l,
            o.firstBaseUpdate = u,
            o.lastBaseUpdate = c,
            t = o.shared.interleaved,
            t !== null) {
            o = t;
            do
                s |= o.lane,
                    o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        $n |= s,
            e.lanes = s,
            e.memoizedState = d
    }
}
function Hd(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                    r = n,
                    typeof o != "function")
                    throw Error(N(191, o));
                o.call(r)
            }
        }
}
var Zo = {}
    , Et = yn(Zo)
    , Oo = yn(Zo)
    , Io = yn(Zo);
function Dn(e) {
    if (e === Zo)
        throw Error(N(174));
    return e
}
function ic(e, t) {
    switch (X(Io, t),
    X(Oo, e),
    X(Et, Zo),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = wl(t, e)
    }
    J(Et),
        X(Et, t)
}
function Lr() {
    J(Et),
        J(Oo),
        J(Io)
}
function vm(e) {
    Dn(Io.current);
    var t = Dn(Et.current)
        , n = wl(t, e.type);
    t !== n && (X(Oo, e),
        X(Et, n))
}
function sc(e) {
    Oo.current === e && (J(Et),
        J(Oo))
}
var ie = yn(0);
function hs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var Ra = [];
function ac() {
    for (var e = 0; e < Ra.length; e++)
        Ra[e]._workInProgressVersionPrimary = null;
    Ra.length = 0
}
var zi = zt.ReactCurrentDispatcher
    , Ma = zt.ReactCurrentBatchConfig
    , Un = 0
    , ae = null
    , me = null
    , xe = null
    , ms = !1
    , go = !1
    , _o = 0
    , Lw = 0;
function Ee() {
    throw Error(N(321))
}
function lc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function uc(e, t, n, r, o, i) {
    if (Un = i,
        ae = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        zi.current = e === null || e.memoizedState === null ? Vw : Fw,
        e = n(r, o),
        go) {
        i = 0;
        do {
            if (go = !1,
                _o = 0,
                25 <= i)
                throw Error(N(301));
            i += 1,
                xe = me = null,
                t.updateQueue = null,
                zi.current = Bw,
                e = n(r, o)
        } while (go)
    }
    if (zi.current = gs,
        t = me !== null && me.next !== null,
        Un = 0,
        xe = me = ae = null,
        ms = !1,
        t)
        throw Error(N(300));
    return e
}
function cc() {
    var e = _o !== 0;
    return _o = 0,
        e
}
function wt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? ae.memoizedState = xe = e : xe = xe.next = e,
        xe
}
function at() {
    if (me === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = me.next;
    var t = xe === null ? ae.memoizedState : xe.next;
    if (t !== null)
        xe = t,
            me = e;
    else {
        if (e === null)
            throw Error(N(310));
        me = e,
            e = {
                memoizedState: me.memoizedState,
                baseState: me.baseState,
                baseQueue: me.baseQueue,
                queue: me.queue,
                next: null
            },
            xe === null ? ae.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}
function Vo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Da(e) {
    var t = at()
        , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = me
        , o = r.baseQueue
        , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
                i.next = s
        }
        r.baseQueue = o = i,
            n.pending = null
    }
    if (o !== null) {
        i = o.next,
            r = r.baseState;
        var a = s = null
            , l = null
            , u = i;
        do {
            var c = u.lane;
            if ((Un & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                    s = r) : l = l.next = d,
                    ae.lanes |= c,
                    $n |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
            gt(r, t.memoizedState) || (Fe = !0),
            t.memoizedState = r,
            t.baseState = s,
            t.baseQueue = l,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        o = e;
        do
            i = o.lane,
                ae.lanes |= i,
                $n |= i,
                o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function La(e) {
    var t = at()
        , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , o = n.pending
        , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
                s = s.next;
        while (s !== o);
        gt(i, t.memoizedState) || (Fe = !0),
            t.memoizedState = i,
            t.baseQueue === null && (t.baseState = i),
            n.lastRenderedState = i
    }
    return [i, r]
}
function ym() { }
function xm(e, t) {
    var n = ae
        , r = at()
        , o = t()
        , i = !gt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
        Fe = !0),
        r = r.queue,
        dc(Cm.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            Fo(9, Sm.bind(null, n, r, o, t), void 0, null),
            we === null)
            throw Error(N(349));
        Un & 30 || wm(n, t, o)
    }
    return o
}
function wm(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = ae.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ae.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function Sm(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        Tm(t) && Em(e)
}
function Cm(e, t, n) {
    return n(function () {
        Tm(t) && Em(e)
    })
}
function Tm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}
function Em(e) {
    var t = _t(e, 1);
    t !== null && mt(t, e, 1, -1)
}
function Gd(e) {
    var t = wt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vo,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = _w.bind(null, ae, e),
        [t.memoizedState, e]
}
function Fo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = ae.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ae.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function Pm() {
    return at().memoizedState
}
function Ui(e, t, n, r) {
    var o = wt();
    ae.flags |= e,
        o.memoizedState = Fo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Bs(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
        var s = me.memoizedState;
        if (i = s.destroy,
            r !== null && lc(r, s.deps)) {
            o.memoizedState = Fo(t, n, i, r);
            return
        }
    }
    ae.flags |= e,
        o.memoizedState = Fo(1 | t, n, i, r)
}
function Kd(e, t) {
    return Ui(8390656, 8, e, t)
}
function dc(e, t) {
    return Bs(2048, 8, e, t)
}
function bm(e, t) {
    return Bs(4, 2, e, t)
}
function Nm(e, t) {
    return Bs(4, 4, e, t)
}
function km(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function Am(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        Bs(4, 4, km.bind(null, t, e), n)
}
function fc() { }
function jm(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && lc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function Rm(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && lc(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function Mm(e, t, n) {
    return Un & 21 ? (gt(n, t) || (n = _h(),
        ae.lanes |= n,
        $n |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            Fe = !0),
            e.memoizedState = n)
}
function Ow(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Ma.transition;
    Ma.transition = {};
    try {
        e(!1),
            t()
    } finally {
        K = n,
            Ma.transition = r
    }
}
function Dm() {
    return at().memoizedState
}
function Iw(e, t, n) {
    var r = un(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        Lm(e))
        Om(t, n);
    else if (n = mm(e, t, n, r),
        n !== null) {
        var o = De();
        mt(n, e, r, o),
            Im(n, t, r)
    }
}
function _w(e, t, n) {
    var r = un(e)
        , o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Lm(e))
        Om(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
            i !== null))
            try {
                var s = t.lastRenderedState
                    , a = i(s, n);
                if (o.hasEagerState = !0,
                    o.eagerState = a,
                    gt(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                        rc(t)) : (o.next = l.next,
                            l.next = o),
                        t.interleaved = o;
                    return
                }
            } catch { } finally { }
        n = mm(e, t, o, r),
            n !== null && (o = De(),
                mt(n, e, r, o),
                Im(n, t, r))
    }
}
function Lm(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae
}
function Om(e, t) {
    go = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function Im(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            $u(e, n)
    }
}
var gs = {
    readContext: st,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1
}
    , Vw = {
        readContext: st,
        useCallback: function (e, t) {
            return wt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: st,
        useEffect: Kd,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                Ui(4194308, 4, km.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Ui(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Ui(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = wt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = wt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = Iw.bind(null, ae, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = wt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: Gd,
        useDebugValue: fc,
        useDeferredValue: function (e) {
            return wt().memoizedState = e
        },
        useTransition: function () {
            var e = Gd(!1)
                , t = e[0];
            return e = Ow.bind(null, e[1]),
                wt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = ae
                , o = wt();
            if (re) {
                if (n === void 0)
                    throw Error(N(407));
                n = n()
            } else {
                if (n = t(),
                    we === null)
                    throw Error(N(349));
                Un & 30 || wm(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i,
                Kd(Cm.bind(null, r, i, e), [e]),
                r.flags |= 2048,
                Fo(9, Sm.bind(null, r, i, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = wt()
                , t = we.identifierPrefix;
            if (re) {
                var n = jt
                    , r = At;
                n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = _o++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = Lw++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , Fw = {
        readContext: st,
        useCallback: jm,
        useContext: st,
        useEffect: dc,
        useImperativeHandle: Am,
        useInsertionEffect: bm,
        useLayoutEffect: Nm,
        useMemo: Rm,
        useReducer: Da,
        useRef: Pm,
        useState: function () {
            return Da(Vo)
        },
        useDebugValue: fc,
        useDeferredValue: function (e) {
            var t = at();
            return Mm(t, me.memoizedState, e)
        },
        useTransition: function () {
            var e = Da(Vo)[0]
                , t = at().memoizedState;
            return [e, t]
        },
        useMutableSource: ym,
        useSyncExternalStore: xm,
        useId: Dm,
        unstable_isNewReconciler: !1
    }
    , Bw = {
        readContext: st,
        useCallback: jm,
        useContext: st,
        useEffect: dc,
        useImperativeHandle: Am,
        useInsertionEffect: bm,
        useLayoutEffect: Nm,
        useMemo: Rm,
        useReducer: La,
        useRef: Pm,
        useState: function () {
            return La(Vo)
        },
        useDebugValue: fc,
        useDeferredValue: function (e) {
            var t = at();
            return me === null ? t.memoizedState = e : Mm(t, me.memoizedState, e)
        },
        useTransition: function () {
            var e = La(Vo)[0]
                , t = at().memoizedState;
            return [e, t]
        },
        useMutableSource: ym,
        useSyncExternalStore: xm,
        useId: Dm,
        unstable_isNewReconciler: !1
    };
function ct(e, t) {
    if (e && e.defaultProps) {
        t = le({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function zl(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : le({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var zs = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Kn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = De()
            , o = un(e)
            , i = Mt(r, o);
        i.payload = t,
            n != null && (i.callback = n),
            t = an(e, i, o),
            t !== null && (mt(t, e, o, r),
                Bi(t, e, o))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = De()
            , o = un(e)
            , i = Mt(r, o);
        i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = an(e, i, o),
            t !== null && (mt(t, e, o, r),
                Bi(t, e, o))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = De()
            , r = un(e)
            , o = Mt(n, r);
        o.tag = 2,
            t != null && (o.callback = t),
            t = an(e, o, r),
            t !== null && (mt(t, e, r, n),
                Bi(t, e, r))
    }
};
function Yd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ro(n, r) || !Ro(o, i) : !0
}
function _m(e, t, n) {
    var r = !1
        , o = hn
        , i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (o = ze(t) ? Bn : ke.current,
        r = t.contextTypes,
        i = (r = r != null) ? Rr(e, o) : hn),
        t = new t(n, i),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = zs,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = o,
            e.__reactInternalMemoizedMaskedChildContext = i),
        t
}
function Xd(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && zs.enqueueReplaceState(t, t.state, null)
}
function Ul(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
        o.state = e.memoizedState,
        o.refs = {},
        oc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = st(i) : (i = ze(t) ? Bn : ke.current,
        o.context = Rr(e, i)),
        o.state = e.memoizedState,
        i = t.getDerivedStateFromProps,
        typeof i == "function" && (zl(e, t, i, n),
            o.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && zs.enqueueReplaceState(o, o.state, null),
            ps(e, n, o, r),
            o.state = e.memoizedState),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Or(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += hx(r),
                r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Oa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function $l(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var zw = typeof WeakMap == "function" ? WeakMap : Map;
function Vm(e, t, n) {
    n = Mt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        ys || (ys = !0,
            Jl = r),
            $l(e, t)
    }
        ,
        n
}
function Fm(e, t, n) {
    n = Mt(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }
            ,
            n.callback = function () {
                $l(e, t)
            }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        $l(e, t),
            typeof r != "function" && (ln === null ? ln = new Set([this]) : ln.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
        n
}
function Qd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zw;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
            o === void 0 && (o = new Set,
                r.set(t, o));
    o.has(n) || (o.add(n),
        e = t1.bind(null, e, t, n),
        t.then(e, e))
}
function qd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Zd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = o,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1),
                t.tag = 2,
                an(n, t, 1))),
            n.lanes |= 1),
            e)
}
var Uw = zt.ReactCurrentOwner
    , Fe = !1;
function Me(e, t, n, r) {
    t.child = e === null ? hm(t, null, n, r) : Dr(t, e.child, n, r)
}
function Jd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Pr(t, o),
        r = uc(e, t, n, r, i, o),
        n = cc(),
        e !== null && !Fe ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~o,
            Vt(e, t, o)) : (re && n && qu(t),
                t.flags |= 1,
                Me(e, t, r, o),
                t.child)
}
function ef(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !wc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = i,
            Bm(e, t, i, r, o)) : (e = Gi(n.type, null, r, t, t.mode, o),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (i = e.child,
        !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Ro,
            n(s, r) && e.ref === t.ref)
            return Vt(e, t, o)
    }
    return t.flags |= 1,
        e = cn(i, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function Bm(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ro(i, r) && e.ref === t.ref)
            if (Fe = !1,
                t.pendingProps = r = i,
                (e.lanes & o) !== 0)
                e.flags & 131072 && (Fe = !0);
            else
                return t.lanes = e.lanes,
                    Vt(e, t, o)
    }
    return Wl(e, t, n, r, o)
}
function zm(e, t, n) {
    var r = t.pendingProps
        , o = r.children
        , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                X(gr, Ge),
                Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    X(gr, Ge),
                    Ge |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = i !== null ? i.baseLanes : n,
                X(gr, Ge),
                Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
            t.memoizedState = null) : r = n,
            X(gr, Ge),
            Ge |= r;
    return Me(e, t, o, n),
        t.child
}
function Um(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function Wl(e, t, n, r, o) {
    var i = ze(n) ? Bn : ke.current;
    return i = Rr(t, i),
        Pr(t, o),
        n = uc(e, t, n, r, i, o),
        r = cc(),
        e !== null && !Fe ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~o,
            Vt(e, t, o)) : (re && r && qu(t),
                t.flags |= 1,
                Me(e, t, n, o),
                t.child)
}
function tf(e, t, n, r, o) {
    if (ze(n)) {
        var i = !0;
        ls(t)
    } else
        i = !1;
    if (Pr(t, o),
        t.stateNode === null)
        $i(e, t),
            _m(t, n, r),
            Ul(t, n, r, o),
            r = !0;
    else if (e === null) {
        var s = t.stateNode
            , a = t.memoizedProps;
        s.props = a;
        var l = s.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = st(u) : (u = ze(n) ? Bn : ke.current,
            u = Rr(t, u));
        var c = n.getDerivedStateFromProps
            , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Xd(t, s, r, u),
            Xt = !1;
        var f = t.memoizedState;
        s.state = f,
            ps(t, r, s, o),
            l = t.memoizedState,
            a !== r || f !== l || Be.current || Xt ? (typeof c == "function" && (zl(t, n, c, r),
                l = t.memoizedState),
                (a = Xt || Yd(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                    typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = l),
                s.props = r,
                s.state = l,
                s.context = u,
                r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        s = t.stateNode,
            gm(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : ct(t.type, a),
            s.props = u,
            d = t.pendingProps,
            f = s.context,
            l = n.contextType,
            typeof l == "object" && l !== null ? l = st(l) : (l = ze(n) ? Bn : ke.current,
                l = Rr(t, l));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && Xd(t, s, r, l),
            Xt = !1,
            f = t.memoizedState,
            s.state = f,
            ps(t, r, s, o);
        var w = t.memoizedState;
        a !== d || f !== w || Be.current || Xt ? (typeof g == "function" && (zl(t, n, g, r),
            w = t.memoizedState),
            (u = Xt || Yd(t, n, u, r, f, w, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l),
                typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)),
                typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = w),
            s.props = r,
            s.state = w,
            s.context = l,
            r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Hl(e, t, n, r, i, o)
}
function Hl(e, t, n, r, o, i) {
    Um(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Bd(t, n, !1),
            Vt(e, t, i);
    r = t.stateNode,
        Uw.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && s ? (t.child = Dr(t, e.child, null, i),
            t.child = Dr(t, null, a, i)) : Me(e, t, a, i),
        t.memoizedState = r.state,
        o && Bd(t, n, !0),
        t.child
}
function $m(e) {
    var t = e.stateNode;
    t.pendingContext ? Fd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fd(e, t.context, !1),
        ic(e, t.containerInfo)
}
function nf(e, t, n, r, o) {
    return Mr(),
        Ju(o),
        t.flags |= 256,
        Me(e, t, n, r),
        t.child
}
var Gl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Kl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Wm(e, t, n) {
    var r = t.pendingProps, o = ie.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a ? (i = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
        X(ie, o & 1),
        e === null)
        return Fl(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (s = r.children,
                        e = r.fallback,
                        i ? (r = t.mode,
                            i = t.child,
                            s = {
                                mode: "hidden",
                                children: s
                            },
                            !(r & 1) && i !== null ? (i.childLanes = 0,
                                i.pendingProps = s) : i = Ws(s, r, 0, null),
                            e = _n(e, r, n, null),
                            i.return = t,
                            e.return = t,
                            i.sibling = e,
                            t.child = i,
                            t.child.memoizedState = Kl(n),
                            t.memoizedState = Gl,
                            e) : pc(t, s));
    if (o = e.memoizedState,
        o !== null && (a = o.dehydrated,
            a !== null))
        return $w(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
            s = t.mode,
            o = e.child,
            a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = l,
            t.deletions = null) : (r = cn(o, l),
                r.subtreeFlags = o.subtreeFlags & 14680064),
            a !== null ? i = cn(a, i) : (i = _n(i, s, n, null),
                i.flags |= 2),
            i.return = t,
            r.return = t,
            r.sibling = i,
            t.child = r,
            r = i,
            i = t.child,
            s = e.child.memoizedState,
            s = s === null ? Kl(n) : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions
            },
            i.memoizedState = s,
            i.childLanes = e.childLanes & ~n,
            t.memoizedState = Gl,
            r
    }
    return i = e.child,
        e = i.sibling,
        r = cn(i, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function pc(e, t) {
    return t = Ws({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function wi(e, t, n, r) {
    return r !== null && Ju(r),
        Dr(t, e.child, null, n),
        e = pc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function $w(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = Oa(Error(N(422))),
            wi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (i = r.fallback,
                    o = t.mode,
                    r = Ws({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null),
                    i = _n(i, o, s, null),
                    i.flags |= 2,
                    r.return = t,
                    i.return = t,
                    r.sibling = i,
                    t.child = r,
                    t.mode & 1 && Dr(t, e.child, null, s),
                    t.child.memoizedState = Kl(s),
                    t.memoizedState = Gl,
                    i);
    if (!(t.mode & 1))
        return wi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            i = Error(N(419)),
            r = Oa(i, r, void 0),
            wi(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
        Fe || a) {
        if (r = we,
            r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
                o !== 0 && o !== i.retryLane && (i.retryLane = o,
                    _t(e, o),
                    mt(r, e, o, -1))
        }
        return xc(),
            r = Oa(Error(N(421))),
            wi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = n1.bind(null, e),
        o._reactRetry = t,
        null) : (e = i.treeContext,
            Ke = sn(o.nextSibling),
            Ye = t,
            re = !0,
            ft = null,
            e !== null && (nt[rt++] = At,
                nt[rt++] = jt,
                nt[rt++] = zn,
                At = e.id,
                jt = e.overflow,
                zn = t),
            t = pc(t, r.children),
            t.flags |= 4096,
            t)
}
function rf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Bl(e.return, t, n)
}
function Ia(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = r,
        i.tail = n,
        i.tailMode = o)
}
function Hm(e, t, n) {
    var r = t.pendingProps
        , o = r.revealOrder
        , i = r.tail;
    if (Me(e, t, r.children, n),
        r = ie.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && rf(e, n, t);
                else if (e.tag === 19)
                    rf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (X(ie, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child,
                    o = null; n !== null;)
                    e = n.alternate,
                        e !== null && hs(e) === null && (o = n),
                        n = n.sibling;
                n = o,
                    n === null ? (o = t.child,
                        t.child = null) : (o = n.sibling,
                            n.sibling = null),
                    Ia(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null,
                    o = t.child,
                    t.child = null; o !== null;) {
                    if (e = o.alternate,
                        e !== null && hs(e) === null) {
                        t.child = o;
                        break
                    }
                    e = o.sibling,
                        o.sibling = n,
                        n = o,
                        o = e
                }
                Ia(t, !0, n, null, i);
                break;
            case "together":
                Ia(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function $i(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function Vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        $n |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
            n = cn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = cn(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ww(e, t, n) {
    switch (t.tag) {
        case 3:
            $m(t),
                Mr();
            break;
        case 5:
            vm(t);
            break;
        case 1:
            ze(t.type) && ls(t);
            break;
        case 4:
            ic(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , o = t.memoizedProps.value;
            X(ds, r._currentValue),
                r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (X(ie, ie.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Wm(e, t, n) : (X(ie, ie.current & 1),
                        e = Vt(e, t, n),
                        e !== null ? e.sibling : null);
            X(ie, ie.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Hm(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState,
                o !== null && (o.rendering = null,
                    o.tail = null,
                    o.lastEffect = null),
                X(ie, ie.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                zm(e, t, n)
    }
    return Vt(e, t, n)
}
var Gm, Yl, Km, Ym;
Gm = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
Yl = function () { }
    ;
Km = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
            Dn(Et.current);
        var i = null;
        switch (n) {
            case "input":
                o = gl(e, o),
                    r = gl(e, r),
                    i = [];
                break;
            case "select":
                o = le({}, o, {
                    value: void 0
                }),
                    r = le({}, r, {
                        value: void 0
                    }),
                    i = [];
                break;
            case "textarea":
                o = xl(e, o),
                    r = xl(e, r),
                    i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss)
        }
        Sl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                            n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Eo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                                n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                                n[s] = l[s])
                    } else
                        n || (i || (i = []),
                            i.push(u, n)),
                            n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                        a = a ? a.__html : void 0,
                        l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Eo.hasOwnProperty(u) ? (l != null && u === "onScroll" && Z("scroll", e),
                            i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
Ym = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function qr(e, t) {
    if (!re)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags & 14680064,
                r |= o.flags & 14680064,
                o.return = e,
                o = o.sibling;
    else
        for (o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags,
                r |= o.flags,
                o.return = e,
                o = o.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function Hw(e, t, n) {
    var r = t.pendingProps;
    switch (Zu(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Pe(t),
                null;
        case 1:
            return ze(t.type) && as(),
                Pe(t),
                null;
        case 3:
            return r = t.stateNode,
                Lr(),
                J(Be),
                J(ke),
                ac(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    ft !== null && (nu(ft),
                        ft = null))),
                Yl(e, t),
                Pe(t),
                null;
        case 5:
            sc(t);
            var o = Dn(Io.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Km(e, t, n, r, o),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(N(166));
                    return Pe(t),
                        null
                }
                if (e = Dn(Et.current),
                    yi(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var i = t.memoizedProps;
                    switch (r[St] = t,
                    r[Lo] = i,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            Z("cancel", r),
                                Z("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Z("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < lo.length; o++)
                                Z(lo[o], r);
                            break;
                        case "source":
                            Z("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Z("error", r),
                                Z("load", r);
                            break;
                        case "details":
                            Z("toggle", r);
                            break;
                        case "input":
                            fd(r, i),
                                Z("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            },
                                Z("invalid", r);
                            break;
                        case "textarea":
                            hd(r, i),
                                Z("invalid", r)
                    }
                    Sl(n, i),
                        o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && vi(r.textContent, a, e),
                                o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && vi(r.textContent, a, e),
                                    o = ["children", "" + a]) : Eo.hasOwnProperty(s) && a != null && s === "onScroll" && Z("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            ui(r),
                                pd(r, i, !0);
                            break;
                        case "textarea":
                            ui(r),
                                md(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ss)
                    }
                    r = o,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = Ch(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                                n === "select" && (s = e,
                                    r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                        e[St] = t,
                        e[Lo] = r,
                        Gm(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (s = Cl(n, r),
                        n) {
                            case "dialog":
                                Z("cancel", e),
                                    Z("close", e),
                                    o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Z("load", e),
                                    o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < lo.length; o++)
                                    Z(lo[o], e);
                                o = r;
                                break;
                            case "source":
                                Z("error", e),
                                    o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Z("error", e),
                                    Z("load", e),
                                    o = r;
                                break;
                            case "details":
                                Z("toggle", e),
                                    o = r;
                                break;
                            case "input":
                                fd(e, r),
                                    o = gl(e, r),
                                    Z("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    o = le({}, r, {
                                        value: void 0
                                    }),
                                    Z("invalid", e);
                                break;
                            case "textarea":
                                hd(e, r),
                                    o = xl(e, r),
                                    Z("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Sl(n, o),
                            a = o;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style" ? Ph(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                                    l != null && Th(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Po(e, l) : typeof l == "number" && Po(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Eo.hasOwnProperty(i) ? l != null && i === "onScroll" && Z("scroll", e) : l != null && _u(e, i, l, s))
                            }
                        switch (n) {
                            case "input":
                                ui(e),
                                    pd(e, r, !1);
                                break;
                            case "textarea":
                                ui(e),
                                    md(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + pn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    i = r.value,
                                    i != null ? Sr(e, !!r.multiple, i, !1) : r.defaultValue != null && Sr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ss)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return Pe(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Ym(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(N(166));
                if (n = Dn(Io.current),
                    Dn(Et.current),
                    yi(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[St] = t,
                        (i = r.nodeValue !== n) && (e = Ye,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                vi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && vi(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    i && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[St] = t,
                        t.stateNode = r
            }
            return Pe(t),
                null;
        case 13:
            if (J(ie),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (re && Ke !== null && t.mode & 1 && !(t.flags & 128))
                    fm(),
                        Mr(),
                        t.flags |= 98560,
                        i = !1;
                else if (i = yi(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(N(318));
                        if (i = t.memoizedState,
                            i = i !== null ? i.dehydrated : null,
                            !i)
                            throw Error(N(317));
                        i[St] = t
                    } else
                        Mr(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    Pe(t),
                        i = !1
                } else
                    ft !== null && (nu(ft),
                        ft = null),
                        i = !0;
                if (!i)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || ie.current & 1 ? ve === 0 && (ve = 3) : xc())),
                    t.updateQueue !== null && (t.flags |= 4),
                    Pe(t),
                    null);
        case 4:
            return Lr(),
                Yl(e, t),
                e === null && Mo(t.stateNode.containerInfo),
                Pe(t),
                null;
        case 10:
            return nc(t.type._context),
                Pe(t),
                null;
        case 17:
            return ze(t.type) && as(),
                Pe(t),
                null;
        case 19:
            if (J(ie),
                i = t.memoizedState,
                i === null)
                return Pe(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                s = i.rendering,
                s === null)
                if (r)
                    qr(i, !1);
                else {
                    if (ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = hs(e),
                                s !== null) {
                                for (t.flags |= 128,
                                    qr(i, !1),
                                    r = s.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    i = n,
                                        e = r,
                                        i.flags &= 14680066,
                                        s = i.alternate,
                                        s === null ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = s.childLanes,
                                                i.lanes = s.lanes,
                                                i.child = s.child,
                                                i.subtreeFlags = 0,
                                                i.deletions = null,
                                                i.memoizedProps = s.memoizedProps,
                                                i.memoizedState = s.memoizedState,
                                                i.updateQueue = s.updateQueue,
                                                i.type = s.type,
                                                e = s.dependencies,
                                                i.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return X(ie, ie.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && fe() > Ir && (t.flags |= 128,
                        r = !0,
                        qr(i, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = hs(s),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            qr(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !s.alternate && !re)
                            return Pe(t),
                                null
                    } else
                        2 * fe() - i.renderingStartTime > Ir && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            qr(i, !1),
                            t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child,
                    t.child = s) : (n = i.last,
                        n !== null ? n.sibling = s : t.child = s,
                        i.last = s)
            }
            return i.tail !== null ? (t = i.tail,
                i.rendering = t,
                i.tail = t.sibling,
                i.renderingStartTime = fe(),
                t.sibling = null,
                n = ie.current,
                X(ie, r ? n & 1 | 2 : n & 1),
                t) : (Pe(t),
                    null);
        case 22:
        case 23:
            return yc(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Ge & 1073741824 && (Pe(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}
function Gw(e, t) {
    switch (Zu(t),
    t.tag) {
        case 1:
            return ze(t.type) && as(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return Lr(),
                J(Be),
                J(ke),
                ac(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return sc(t),
                null;
        case 13:
            if (J(ie),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(N(340));
                Mr()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return J(ie),
                null;
        case 4:
            return Lr(),
                null;
        case 10:
            return nc(t.type._context),
                null;
        case 22:
        case 23:
            return yc(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var Si = !1
    , Ne = !1
    , Kw = typeof WeakSet == "function" ? WeakSet : Set
    , j = null;
function mr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ue(e, t, r)
            }
        else
            n.current = null
}
function Xl(e, t, n) {
    try {
        n()
    } catch (r) {
        ue(e, t, r)
    }
}
var of = !1;
function Yw(e, t) {
    if (Ml = rs,
        e = Jh(),
        Qu(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                        , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                        , a = -1
                        , l = -1
                        , u = 0
                        , c = 0
                        , d = e
                        , f = null;
                    t: for (; ;) {
                        for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o),
                            d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r),
                            d.nodeType === 3 && (s += d.nodeValue.length),
                            (g = d.firstChild) !== null;)
                            f = d,
                                d = g;
                        for (; ;) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (a = s),
                                f === i && ++c === r && (l = s),
                                (g = d.nextSibling) !== null)
                                break;
                            d = f,
                                f = d.parentNode
                        }
                        d = g
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Dl = {
        focusedElem: e,
        selectionRange: n
    },
        rs = !1,
        j = t; j !== null;)
        if (t = j,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var y = w.memoizedProps
                                        , S = w.memoizedState
                                        , x = t.stateNode
                                        , h = x.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ct(t.type, y), S);
                                    x.__reactInternalSnapshotBeforeUpdate = h
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(N(163))
                        }
                } catch (C) {
                    ue(t, t.return, C)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        j = e;
                    break
                }
                j = t.return
            }
    return w = of,
        of = !1,
        w
}
function vo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                    i !== void 0 && Xl(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Us(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ql(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Xm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Xm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[St],
                delete t[Lo],
                delete t[Il],
                delete t[jw],
                delete t[Rw])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function Qm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function sf(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Qm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ql(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = ss));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (ql(e, t, n),
            e = e.sibling; e !== null;)
            ql(e, t, n),
                e = e.sibling
}
function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Zl(e, t, n),
            e = e.sibling; e !== null;)
            Zl(e, t, n),
                e = e.sibling
}
var Se = null
    , dt = !1;
function Wt(e, t, n) {
    for (n = n.child; n !== null;)
        qm(e, t, n),
            n = n.sibling
}
function qm(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
        try {
            Tt.onCommitFiberUnmount(Ls, n)
        } catch { }
    switch (n.tag) {
        case 5:
            Ne || mr(n, t);
        case 6:
            var r = Se
                , o = dt;
            Se = null,
                Wt(e, t, n),
                Se = r,
                dt = o,
                Se !== null && (dt ? (e = Se,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
            break;
        case 18:
            Se !== null && (dt ? (e = Se,
                n = n.stateNode,
                e.nodeType === 8 ? Aa(e.parentNode, n) : e.nodeType === 1 && Aa(e, n),
                Ao(e)) : Aa(Se, n.stateNode));
            break;
        case 4:
            r = Se,
                o = dt,
                Se = n.stateNode.containerInfo,
                dt = !0,
                Wt(e, t, n),
                Se = r,
                dt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ne && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                o = r = r.next;
                do {
                    var i = o
                        , s = i.destroy;
                    i = i.tag,
                        s !== void 0 && (i & 2 || i & 4) && Xl(n, t, s),
                        o = o.next
                } while (o !== r)
            }
            Wt(e, t, n);
            break;
        case 1:
            if (!Ne && (mr(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    ue(n, t, a)
                }
            Wt(e, t, n);
            break;
        case 21:
            Wt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null,
                Wt(e, t, n),
                Ne = r) : Wt(e, t, n);
            break;
        default:
            Wt(e, t, n)
    }
}
function af(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Kw),
            t.forEach(function (r) {
                var o = r1.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(o, o))
            })
    }
}
function lt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                    , s = t
                    , a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Se = a.stateNode,
                                dt = !1;
                            break e;
                        case 3:
                            Se = a.stateNode.containerInfo,
                                dt = !0;
                            break e;
                        case 4:
                            Se = a.stateNode.containerInfo,
                                dt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Se === null)
                    throw Error(N(160));
                qm(i, s, o),
                    Se = null,
                    dt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                    o.return = null
            } catch (u) {
                ue(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            Zm(t, e),
                t = t.sibling
}
function Zm(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (lt(t, e),
                yt(e),
                r & 4) {
                try {
                    vo(3, e, e.return),
                        Us(3, e)
                } catch (y) {
                    ue(e, e.return, y)
                }
                try {
                    vo(5, e, e.return)
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 1:
            lt(t, e),
                yt(e),
                r & 512 && n !== null && mr(n, n.return);
            break;
        case 5:
            if (lt(t, e),
                yt(e),
                r & 512 && n !== null && mr(n, n.return),
                e.flags & 32) {
                var o = e.stateNode;
                try {
                    Po(o, "")
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode,
                o != null)) {
                var i = e.memoizedProps
                    , s = n !== null ? n.memoizedProps : i
                    , a = e.type
                    , l = e.updateQueue;
                if (e.updateQueue = null,
                    l !== null)
                    try {
                        a === "input" && i.type === "radio" && i.name != null && wh(o, i),
                            Cl(a, s);
                        var u = Cl(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s]
                                , d = l[s + 1];
                            c === "style" ? Ph(o, d) : c === "dangerouslySetInnerHTML" ? Th(o, d) : c === "children" ? Po(o, d) : _u(o, c, d, u)
                        }
                        switch (a) {
                            case "input":
                                vl(o, i);
                                break;
                            case "textarea":
                                Sh(o, i);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var g = i.value;
                                g != null ? Sr(o, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? Sr(o, !!i.multiple, i.defaultValue, !0) : Sr(o, !!i.multiple, i.multiple ? [] : "", !1))
                        }
                        o[Lo] = i
                    } catch (y) {
                        ue(e, e.return, y)
                    }
            }
            break;
        case 6:
            if (lt(t, e),
                yt(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(N(162));
                o = e.stateNode,
                    i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 3:
            if (lt(t, e),
                yt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ao(t.containerInfo)
                } catch (y) {
                    ue(e, e.return, y)
                }
            break;
        case 4:
            lt(t, e),
                yt(e);
            break;
        case 13:
            lt(t, e),
                yt(e),
                o = e.child,
                o.flags & 8192 && (i = o.memoizedState !== null,
                    o.stateNode.isHidden = i,
                    !i || o.alternate !== null && o.alternate.memoizedState !== null || (gc = fe())),
                r & 4 && af(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (Ne = (u = Ne) || c,
                    lt(t, e),
                    Ne = u) : lt(t, e),
                yt(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (j = e,
                        c = e.child; c !== null;) {
                        for (d = j = c; j !== null;) {
                            switch (f = j,
                            g = f.child,
                            f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    vo(4, f, f.return);
                                    break;
                                case 1:
                                    mr(f, f.return);
                                    var w = f.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = f,
                                            n = f.return;
                                        try {
                                            t = r,
                                                w.props = t.memoizedProps,
                                                w.state = t.memoizedState,
                                                w.componentWillUnmount()
                                        } catch (y) {
                                            ue(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    mr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        uf(d);
                                        continue
                                    }
                            }
                            g !== null ? (g.return = f,
                                j = g) : uf(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode,
                                    u ? (i = o.style,
                                        typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                                            l = d.memoizedProps.style,
                                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                                            a.style.display = Eh("display", s))
                            } catch (y) {
                                ue(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (y) {
                                ue(e, e.return, y)
                            }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d,
                            d = d.child;
                        continue
                    }
                    if (d === e)
                        break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e)
                            break e;
                        c === d && (c = null),
                            d = d.return
                    }
                    c === d && (c = null),
                        d.sibling.return = d.return,
                        d = d.sibling
                }
            }
            break;
        case 19:
            lt(t, e),
                yt(e),
                r & 4 && af(e);
            break;
        case 21:
            break;
        default:
            lt(t, e),
                yt(e)
    }
}
function yt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Qm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Po(o, ""),
                        r.flags &= -33);
                    var i = sf(e);
                    Zl(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo
                        , a = sf(e);
                    ql(e, a, s);
                    break;
                default:
                    throw Error(N(161))
            }
        } catch (l) {
            ue(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Xw(e, t, n) {
    j = e,
        Jm(e)
}
function Jm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var o = j
            , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Si;
            if (!s) {
                var a = o.alternate
                    , l = a !== null && a.memoizedState !== null || Ne;
                a = Si;
                var u = Ne;
                if (Si = s,
                    (Ne = l) && !u)
                    for (j = o; j !== null;)
                        s = j,
                            l = s.child,
                            s.tag === 22 && s.memoizedState !== null ? cf(o) : l !== null ? (l.return = s,
                                j = l) : cf(o);
                for (; i !== null;)
                    j = i,
                        Jm(i),
                        i = i.sibling;
                j = o,
                    Si = a,
                    Ne = u
            }
            lf(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
                j = i) : lf(e)
    }
}
function lf(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ne || Us(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ne)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var i = t.updateQueue;
                            i !== null && Hd(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                Hd(t, s, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Ao(d)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(N(163))
                    }
                Ne || t.flags & 512 && Ql(t)
            } catch (f) {
                ue(t, t.return, f)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                j = n;
            break
        }
        j = t.return
    }
}
function uf(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                j = n;
            break
        }
        j = t.return
    }
}
function cf(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Us(4, t)
                    } catch (l) {
                        ue(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            ue(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        Ql(t)
                    } catch (l) {
                        ue(t, i, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ql(t)
                    } catch (l) {
                        ue(t, s, l)
                    }
            }
        } catch (l) {
            ue(t, t.return, l)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                j = a;
            break
        }
        j = t.return
    }
}
var Qw = Math.ceil
    , vs = zt.ReactCurrentDispatcher
    , hc = zt.ReactCurrentOwner
    , it = zt.ReactCurrentBatchConfig
    , W = 0
    , we = null
    , he = null
    , Ce = 0
    , Ge = 0
    , gr = yn(0)
    , ve = 0
    , Bo = null
    , $n = 0
    , $s = 0
    , mc = 0
    , yo = null
    , Ve = null
    , gc = 0
    , Ir = 1 / 0
    , Nt = null
    , ys = !1
    , Jl = null
    , ln = null
    , Ci = !1
    , en = null
    , xs = 0
    , xo = 0
    , eu = null
    , Wi = -1
    , Hi = 0;
function De() {
    return W & 6 ? fe() : Wi !== -1 ? Wi : Wi = fe()
}
function un(e) {
    return e.mode & 1 ? W & 2 && Ce !== 0 ? Ce & -Ce : Dw.transition !== null ? (Hi === 0 && (Hi = _h()),
        Hi) : (e = K,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Wh(e.type)),
            e) : 1
}
function mt(e, t, n, r) {
    if (50 < xo)
        throw xo = 0,
        eu = null,
        Error(N(185));
    Xo(e, n, r),
        (!(W & 2) || e !== we) && (e === we && (!(W & 2) && ($s |= n),
            ve === 4 && Zt(e, Ce)),
            Ue(e, r),
            n === 1 && W === 0 && !(t.mode & 1) && (Ir = fe() + 500,
                Fs && xn()))
}
function Ue(e, t) {
    var n = e.callbackNode;
    Dx(e, t);
    var r = ns(e, e === we ? Ce : 0);
    if (r === 0)
        n !== null && yd(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && yd(n),
            t === 1)
            e.tag === 0 ? Mw(df.bind(null, e)) : um(df.bind(null, e)),
                kw(function () {
                    !(W & 6) && xn()
                }),
                n = null;
        else {
            switch (Vh(r)) {
                case 1:
                    n = Uu;
                    break;
                case 4:
                    n = Oh;
                    break;
                case 16:
                    n = ts;
                    break;
                case 536870912:
                    n = Ih;
                    break;
                default:
                    n = ts
            }
            n = ag(n, eg.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function eg(e, t) {
    if (Wi = -1,
        Hi = 0,
        W & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
        return null;
    var r = ns(e, e === we ? Ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ws(e, r);
    else {
        t = r;
        var o = W;
        W |= 2;
        var i = ng();
        (we !== e || Ce !== t) && (Nt = null,
            Ir = fe() + 500,
            In(e, t));
        do
            try {
                Jw();
                break
            } catch (a) {
                tg(e, a)
            }
        while (1);
        tc(),
            vs.current = i,
            W = o,
            he !== null ? t = 0 : (we = null,
                Ce = 0,
                t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = Nl(e),
            o !== 0 && (r = o,
                t = tu(e, o))),
            t === 1)
            throw n = Bo,
            In(e, 0),
            Zt(e, r),
            Ue(e, fe()),
            n;
        if (t === 6)
            Zt(e, r);
        else {
            if (o = e.current.alternate,
                !(r & 30) && !qw(o) && (t = ws(e, r),
                    t === 2 && (i = Nl(e),
                        i !== 0 && (r = i,
                            t = tu(e, i))),
                    t === 1))
                throw n = Bo,
                In(e, 0),
                Zt(e, r),
                Ue(e, fe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    bn(e, Ve, Nt);
                    break;
                case 3:
                    if (Zt(e, r),
                        (r & 130023424) === r && (t = gc + 500 - fe(),
                            10 < t)) {
                        if (ns(e, 0) !== 0)
                            break;
                        if (o = e.suspendedLanes,
                            (o & r) !== r) {
                            De(),
                                e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Ol(bn.bind(null, e, Ve, Nt), t);
                        break
                    }
                    bn(e, Ve, Nt);
                    break;
                case 4:
                    if (Zt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        o = -1; 0 < r;) {
                        var s = 31 - ht(r);
                        i = 1 << s,
                            s = t[s],
                            s > o && (o = s),
                            r &= ~i
                    }
                    if (r = o,
                        r = fe() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qw(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Ol(bn.bind(null, e, Ve, Nt), r);
                        break
                    }
                    bn(e, Ve, Nt);
                    break;
                case 5:
                    bn(e, Ve, Nt);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Ue(e, fe()),
        e.callbackNode === n ? eg.bind(null, e) : null
}
function tu(e, t) {
    var n = yo;
    return e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
        e = ws(e, t),
        e !== 2 && (t = Ve,
            Ve = n,
            t !== null && nu(t)),
        e
}
function nu(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e)
}
function qw(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                        , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function Zt(e, t) {
    for (t &= ~mc,
        t &= ~$s,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - ht(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function df(e) {
    if (W & 6)
        throw Error(N(327));
    br();
    var t = ns(e, 0);
    if (!(t & 1))
        return Ue(e, fe()),
            null;
    var n = ws(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Nl(e);
        r !== 0 && (t = r,
            n = tu(e, r))
    }
    if (n === 1)
        throw n = Bo,
        In(e, 0),
        Zt(e, t),
        Ue(e, fe()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        bn(e, Ve, Nt),
        Ue(e, fe()),
        null
}
function vc(e, t) {
    var n = W;
    W |= 1;
    try {
        return e(t)
    } finally {
        W = n,
            W === 0 && (Ir = fe() + 500,
                Fs && xn())
    }
}
function Wn(e) {
    en !== null && en.tag === 0 && !(W & 6) && br();
    var t = W;
    W |= 1;
    var n = it.transition
        , r = K;
    try {
        if (it.transition = null,
            K = 1,
            e)
            return e()
    } finally {
        K = r,
            it.transition = n,
            W = t,
            !(W & 6) && xn()
    }
}
function yc() {
    Ge = gr.current,
        J(gr)
}
function In(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        Nw(n)),
        he !== null)
        for (n = he.return; n !== null;) {
            var r = n;
            switch (Zu(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && as();
                    break;
                case 3:
                    Lr(),
                        J(Be),
                        J(ke),
                        ac();
                    break;
                case 5:
                    sc(r);
                    break;
                case 4:
                    Lr();
                    break;
                case 13:
                    J(ie);
                    break;
                case 19:
                    J(ie);
                    break;
                case 10:
                    nc(r.type._context);
                    break;
                case 22:
                case 23:
                    yc()
            }
            n = n.return
        }
    if (we = e,
        he = e = cn(e.current, null),
        Ce = Ge = t,
        ve = 0,
        Bo = null,
        mc = $s = $n = 0,
        Ve = yo = null,
        Mn !== null) {
        for (t = 0; t < Mn.length; t++)
            if (n = Mn[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var o = r.next
                    , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                        r.next = s
                }
                n.pending = r
            }
        Mn = null
    }
    return e
}
function tg(e, t) {
    do {
        var n = he;
        try {
            if (tc(),
                zi.current = gs,
                ms) {
                for (var r = ae.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                        r = r.next
                }
                ms = !1
            }
            if (Un = 0,
                xe = me = ae = null,
                go = !1,
                _o = 0,
                hc.current = null,
                n === null || n.return === null) {
                ve = 1,
                    Bo = t,
                    he = null;
                break
            }
            e: {
                var i = e
                    , s = n.return
                    , a = n
                    , l = t;
                if (t = Ce,
                    a.flags |= 32768,
                    l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                        , c = a
                        , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                            c.memoizedState = f.memoizedState,
                            c.lanes = f.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var g = qd(s);
                    if (g !== null) {
                        g.flags &= -257,
                            Zd(g, s, a, i, t),
                            g.mode & 1 && Qd(i, u, t),
                            t = g,
                            l = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var y = new Set;
                            y.add(l),
                                t.updateQueue = y
                        } else
                            w.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Qd(i, u, t),
                                xc();
                            break e
                        }
                        l = Error(N(426))
                    }
                } else if (re && a.mode & 1) {
                    var S = qd(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            Zd(S, s, a, i, t),
                            Ju(Or(l, a));
                        break e
                    }
                }
                i = l = Or(l, a),
                    ve !== 4 && (ve = 2),
                    yo === null ? yo = [i] : yo.push(i),
                    i = s;
                do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536,
                                t &= -t,
                                i.lanes |= t;
                            var x = Vm(i, l, t);
                            Wd(i, x);
                            break e;
                        case 1:
                            a = l;
                            var h = i.type
                                , v = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (ln === null || !ln.has(v)))) {
                                i.flags |= 65536,
                                    t &= -t,
                                    i.lanes |= t;
                                var C = Fm(i, a, t);
                                Wd(i, C);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            og(n)
        } catch (T) {
            t = T,
                he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (1)
}
function ng() {
    var e = vs.current;
    return vs.current = gs,
        e === null ? gs : e
}
function xc() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
        we === null || !($n & 268435455) && !($s & 268435455) || Zt(we, Ce)
}
function ws(e, t) {
    var n = W;
    W |= 2;
    var r = ng();
    (we !== e || Ce !== t) && (Nt = null,
        In(e, t));
    do
        try {
            Zw();
            break
        } catch (o) {
            tg(e, o)
        }
    while (1);
    if (tc(),
        W = n,
        vs.current = r,
        he !== null)
        throw Error(N(261));
    return we = null,
        Ce = 0,
        ve
}
function Zw() {
    for (; he !== null;)
        rg(he)
}
function Jw() {
    for (; he !== null && !Ex();)
        rg(he)
}
function rg(e) {
    var t = sg(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
        t === null ? og(e) : he = t,
        hc.current = null
}
function og(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = Gw(n, t),
                n !== null) {
                n.flags &= 32767,
                    he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                ve = 6,
                    he = null;
                return
            }
        } else if (n = Hw(n, t, Ge),
            n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}
function bn(e, t, n) {
    var r = K
        , o = it.transition;
    try {
        it.transition = null,
            K = 1,
            e1(e, t, n, r)
    } finally {
        it.transition = o,
            K = r
    }
    return null
}
function e1(e, t, n, r) {
    do
        br();
    while (en !== null);
    if (W & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Lx(e, i),
        e === we && (he = we = null,
            Ce = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ci || (Ci = !0,
            ag(ts, function () {
                return br(),
                    null
            })),
        i = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || i) {
        i = it.transition,
            it.transition = null;
        var s = K;
        K = 1;
        var a = W;
        W |= 4,
            hc.current = null,
            Yw(e, n),
            Zm(n, e),
            ww(Dl),
            rs = !!Ml,
            Dl = Ml = null,
            e.current = n,
            Xw(n),
            Px(),
            W = a,
            K = s,
            it.transition = i
    } else
        e.current = n;
    if (Ci && (Ci = !1,
        en = e,
        xs = o),
        i = e.pendingLanes,
        i === 0 && (ln = null),
        kx(n.stateNode),
        Ue(e, fe()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            o = t[n],
                r(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
    if (ys)
        throw ys = !1,
        e = Jl,
        Jl = null,
        e;
    return xs & 1 && e.tag !== 0 && br(),
        i = e.pendingLanes,
        i & 1 ? e === eu ? xo++ : (xo = 0,
            eu = e) : xo = 0,
        xn(),
        null
}
function br() {
    if (en !== null) {
        var e = Vh(xs)
            , t = it.transition
            , n = K;
        try {
            if (it.transition = null,
                K = 16 > e ? 16 : e,
                en === null)
                var r = !1;
            else {
                if (e = en,
                    en = null,
                    xs = 0,
                    W & 6)
                    throw Error(N(331));
                var o = W;
                for (W |= 4,
                    j = e.current; j !== null;) {
                    var i = j
                        , s = i.child;
                    if (j.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (j = u; j !== null;) {
                                    var c = j;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            vo(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                            j = d;
                                    else
                                        for (; j !== null;) {
                                            c = j;
                                            var f = c.sibling
                                                , g = c.return;
                                            if (Xm(c),
                                                c === u) {
                                                j = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = g,
                                                    j = f;
                                                break
                                            }
                                            j = g
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var y = w.child;
                                if (y !== null) {
                                    w.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                            y = S
                                    } while (y !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                            j = s;
                    else
                        e: for (; j !== null;) {
                            if (i = j,
                                i.flags & 2048)
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vo(9, i, i.return)
                                }
                            var x = i.sibling;
                            if (x !== null) {
                                x.return = i.return,
                                    j = x;
                                break e
                            }
                            j = i.return
                        }
                }
                var h = e.current;
                for (j = h; j !== null;) {
                    s = j;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                            j = v;
                    else
                        e: for (s = h; j !== null;) {
                            if (a = j,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Us(9, a)
                                    }
                                } catch (T) {
                                    ue(a, a.return, T)
                                }
                            if (a === s) {
                                j = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                    j = C;
                                break e
                            }
                            j = a.return
                        }
                }
                if (W = o,
                    xn(),
                    Tt && typeof Tt.onPostCommitFiberRoot == "function")
                    try {
                        Tt.onPostCommitFiberRoot(Ls, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            K = n,
                it.transition = t
        }
    }
    return !1
}
function ff(e, t, n) {
    t = Or(n, t),
        t = Vm(e, t, 1),
        e = an(e, t, 1),
        t = De(),
        e !== null && (Xo(e, 1, t),
            Ue(e, t))
}
function ue(e, t, n) {
    if (e.tag === 3)
        ff(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                ff(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
                    e = Or(n, e),
                        e = Fm(t, e, 1),
                        t = an(t, e, 1),
                        e = De(),
                        t !== null && (Xo(t, 1, e),
                            Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}
function t1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = De(),
        e.pingedLanes |= e.suspendedLanes & n,
        we === e && (Ce & n) === n && (ve === 4 || ve === 3 && (Ce & 130023424) === Ce && 500 > fe() - gc ? In(e, 0) : mc |= n),
        Ue(e, t)
}
function ig(e, t) {
    t === 0 && (e.mode & 1 ? (t = fi,
        fi <<= 1,
        !(fi & 130023424) && (fi = 4194304)) : t = 1);
    var n = De();
    e = _t(e, t),
        e !== null && (Xo(e, t, n),
            Ue(e, n))
}
function n1(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        ig(e, n)
}
function r1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(N(314))
    }
    r !== null && r.delete(t),
        ig(e, n)
}
var sg;
sg = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current)
            Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Fe = !1,
                    Ww(e, t, n);
            Fe = !!(e.flags & 131072)
        }
    else
        Fe = !1,
            re && t.flags & 1048576 && cm(t, cs, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            $i(e, t),
                e = t.pendingProps;
            var o = Rr(t, ke.current);
            Pr(t, n),
                o = uc(null, t, r, e, o, n);
            var i = cc();
            return t.flags |= 1,
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    ze(r) ? (i = !0,
                        ls(t)) : i = !1,
                    t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
                    oc(t),
                    o.updater = zs,
                    t.stateNode = o,
                    o._reactInternals = t,
                    Ul(t, r, e, n),
                    t = Hl(null, t, r, !0, i, n)) : (t.tag = 0,
                        re && i && qu(t),
                        Me(null, t, o, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch ($i(e, t),
                e = t.pendingProps,
                o = r._init,
                r = o(r._payload),
                t.type = r,
                o = t.tag = i1(r),
                e = ct(r, e),
                o) {
                    case 0:
                        t = Wl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = tf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Jd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ef(null, t, r, ct(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : ct(r, o),
                Wl(e, t, r, o, n);
        case 1:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : ct(r, o),
                tf(e, t, r, o, n);
        case 3:
            e: {
                if ($m(t),
                    e === null)
                    throw Error(N(387));
                r = t.pendingProps,
                    i = t.memoizedState,
                    o = i.element,
                    gm(e, t),
                    ps(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element,
                    i.isDehydrated)
                    if (i = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    },
                        t.updateQueue.baseState = i,
                        t.memoizedState = i,
                        t.flags & 256) {
                        o = Or(Error(N(423)), t),
                            t = nf(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                        o = Or(Error(N(424)), t),
                            t = nf(e, t, r, n, o);
                        break e
                    } else
                        for (Ke = sn(t.stateNode.containerInfo.firstChild),
                            Ye = t,
                            re = !0,
                            ft = null,
                            n = hm(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Mr(),
                        r === o) {
                        t = Vt(e, t, n);
                        break e
                    }
                    Me(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return vm(t),
                e === null && Fl(t),
                r = t.type,
                o = t.pendingProps,
                i = e !== null ? e.memoizedProps : null,
                s = o.children,
                Ll(r, o) ? s = null : i !== null && Ll(r, i) && (t.flags |= 32),
                Um(e, t),
                Me(e, t, s, n),
                t.child;
        case 6:
            return e === null && Fl(t),
                null;
        case 13:
            return Wm(e, t, n);
        case 4:
            return ic(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = Dr(t, null, r, n) : Me(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : ct(r, o),
                Jd(e, t, r, o, n);
        case 7:
            return Me(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return Me(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return Me(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    o = t.pendingProps,
                    i = t.memoizedProps,
                    s = o.value,
                    X(ds, r._currentValue),
                    r._currentValue = s,
                    i !== null)
                    if (gt(i.value, s)) {
                        if (i.children === o.children && !Be.current) {
                            t = Vt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child,
                            i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = Mt(-1, n & -n),
                                                l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next,
                                                    c.next = l),
                                                    u.pending = l
                                            }
                                        }
                                        i.lanes |= n,
                                            l = i.alternate,
                                            l !== null && (l.lanes |= n),
                                            Bl(i.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10)
                                s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return,
                                    s === null)
                                    throw Error(N(341));
                                s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Bl(s, n, t),
                                    s = i.sibling
                            } else
                                s = i.child;
                            if (s !== null)
                                s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling,
                                        i !== null) {
                                        i.return = s.return,
                                            s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                Me(e, t, o.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return o = t.type,
                r = t.pendingProps.children,
                Pr(t, n),
                o = st(o),
                r = r(o),
                t.flags |= 1,
                Me(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                o = ct(r, t.pendingProps),
                o = ct(r.type, o),
                ef(e, t, r, o, n);
        case 15:
            return Bm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : ct(r, o),
                $i(e, t),
                t.tag = 1,
                ze(r) ? (e = !0,
                    ls(t)) : e = !1,
                Pr(t, n),
                _m(t, r, o),
                Ul(t, r, o, n),
                Hl(null, t, r, !0, e, n);
        case 19:
            return Hm(e, t, n);
        case 22:
            return zm(e, t, n)
    }
    throw Error(N(156, t.tag))
}
    ;
function ag(e, t) {
    return Lh(e, t)
}
function o1(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function ot(e, t, n, r) {
    return new o1(e, t, n, r)
}
function wc(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function i1(e) {
    if (typeof e == "function")
        return wc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === Fu)
            return 11;
        if (e === Bu)
            return 14
    }
    return 2
}
function cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function Gi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
        typeof e == "function")
        wc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
            case sr:
                return _n(n.children, o, i, t);
            case Vu:
                s = 8,
                    o |= 8;
                break;
            case fl:
                return e = ot(12, n, t, o | 2),
                    e.elementType = fl,
                    e.lanes = i,
                    e;
            case pl:
                return e = ot(13, n, t, o),
                    e.elementType = pl,
                    e.lanes = i,
                    e;
            case hl:
                return e = ot(19, n, t, o),
                    e.elementType = hl,
                    e.lanes = i,
                    e;
            case vh:
                return Ws(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case mh:
                            s = 10;
                            break e;
                        case gh:
                            s = 9;
                            break e;
                        case Fu:
                            s = 11;
                            break e;
                        case Bu:
                            s = 14;
                            break e;
                        case Yt:
                            s = 16,
                                r = null;
                            break e
                    }
                throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = ot(s, n, t, o),
        t.elementType = e,
        t.type = r,
        t.lanes = i,
        t
}
function _n(e, t, n, r) {
    return e = ot(7, e, r, t),
        e.lanes = n,
        e
}
function Ws(e, t, n, r) {
    return e = ot(22, e, r, t),
        e.elementType = vh,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function _a(e, t, n) {
    return e = ot(6, e, null, t),
        e.lanes = n,
        e
}
function Va(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function s1(e, t, n, r, o) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = ya(0),
        this.expirationTimes = ya(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ya(0),
        this.identifierPrefix = r,
        this.onRecoverableError = o,
        this.mutableSourceEagerHydrationData = null
}
function Sc(e, t, n, r, o, i, s, a, l) {
    return e = new s1(e, t, n, a, l),
        t === 1 ? (t = 1,
            i === !0 && (t |= 8)) : t = 0,
        i = ot(3, null, null, t),
        e.current = i,
        i.stateNode = e,
        i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        oc(i),
        e
}
function a1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ir,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function lg(e) {
    if (!e)
        return hn;
    e = e._reactInternals;
    e: {
        if (Kn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ze(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ze(n))
            return lm(e, n, t)
    }
    return t
}
function ug(e, t, n, r, o, i, s, a, l) {
    return e = Sc(n, r, !0, e, o, i, s, a, l),
        e.context = lg(null),
        n = e.current,
        r = De(),
        o = un(n),
        i = Mt(r, o),
        i.callback = t ?? null,
        an(n, i, o),
        e.current.lanes = o,
        Xo(e, o, r),
        Ue(e, r),
        e
}
function Hs(e, t, n, r) {
    var o = t.current
        , i = De()
        , s = un(o);
    return n = lg(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Mt(i, s),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = an(o, t, s),
        e !== null && (mt(e, o, s, i),
            Bi(e, o, s)),
        s
}
function Ss(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function pf(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Cc(e, t) {
    pf(e, t),
        (e = e.alternate) && pf(e, t)
}
function l1() {
    return null
}
var cg = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function Tc(e) {
    this._internalRoot = e
}
Gs.prototype.render = Tc.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    Hs(e, t, null, null)
}
    ;
Gs.prototype.unmount = Tc.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Wn(function () {
            Hs(null, e, null, null)
        }),
            t[It] = null
    }
}
    ;
function Gs(e) {
    this._internalRoot = e
}
Gs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = zh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++)
            ;
        qt.splice(n, 0, e),
            n === 0 && $h(e)
    }
}
    ;
function Ec(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ks(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function hf() { }
function u1(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = Ss(s);
                i.call(u)
            }
        }
        var s = ug(t, r, e, 0, null, !1, !1, "", hf);
        return e._reactRootContainer = s,
            e[It] = s.current,
            Mo(e.nodeType === 8 ? e.parentNode : e),
            Wn(),
            s
    }
    for (; o = e.lastChild;)
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Ss(l);
            a.call(u)
        }
    }
    var l = Sc(e, 0, !1, null, null, !1, !1, "", hf);
    return e._reactRootContainer = l,
        e[It] = l.current,
        Mo(e.nodeType === 8 ? e.parentNode : e),
        Wn(function () {
            Hs(t, l, n, r)
        }),
        l
}
function Ys(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = Ss(s);
                a.call(l)
            }
        }
        Hs(t, s, e, o)
    } else
        s = u1(n, t, e, o, r);
    return Ss(s)
}
Fh = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ao(t.pendingLanes);
                n !== 0 && ($u(t, n | 1),
                    Ue(t, fe()),
                    !(W & 6) && (Ir = fe() + 500,
                        xn()))
            }
            break;
        case 13:
            Wn(function () {
                var r = _t(e, 1);
                if (r !== null) {
                    var o = De();
                    mt(r, e, 1, o)
                }
            }),
                Cc(e, 1)
    }
}
    ;
Wu = function (e) {
    if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
            var n = De();
            mt(t, e, 134217728, n)
        }
        Cc(e, 134217728)
    }
}
    ;
Bh = function (e) {
    if (e.tag === 13) {
        var t = un(e)
            , n = _t(e, t);
        if (n !== null) {
            var r = De();
            mt(n, e, t, r)
        }
        Cc(e, t)
    }
}
    ;
zh = function () {
    return K
}
    ;
Uh = function (e, t) {
    var n = K;
    try {
        return K = e,
            t()
    } finally {
        K = n
    }
}
    ;
El = function (e, t, n) {
    switch (t) {
        case "input":
            if (vl(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Vs(r);
                        if (!o)
                            throw Error(N(90));
                        xh(r),
                            vl(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Sh(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Sr(e, !!n.multiple, t, !1)
    }
}
    ;
kh = vc;
Ah = Wn;
var c1 = {
    usingClientEntryPoint: !1,
    Events: [qo, cr, Vs, bh, Nh, vc]
}
    , Zr = {
        findFiberByHostInstance: Rn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , d1 = {
        bundleType: Zr.bundleType,
        version: Zr.version,
        rendererPackageName: Zr.rendererPackageName,
        rendererConfig: Zr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: zt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Mh(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Zr.findFiberByHostInstance || l1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
        try {
            Ls = Ti.inject(d1),
                Tt = Ti
        } catch { }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c1;
Ze.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ec(t))
        throw Error(N(200));
    return a1(e, t, null, n)
}
    ;
Ze.createRoot = function (e, t) {
    if (!Ec(e))
        throw Error(N(299));
    var n = !1
        , r = ""
        , o = cg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        t = Sc(e, 1, !1, null, null, n, !1, r, o),
        e[It] = t.current,
        Mo(e.nodeType === 8 ? e.parentNode : e),
        new Tc(t)
}
    ;
Ze.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
            Error(N(268, e)));
    return e = Mh(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
Ze.flushSync = function (e) {
    return Wn(e)
}
    ;
Ze.hydrate = function (e, t, n) {
    if (!Ks(t))
        throw Error(N(200));
    return Ys(null, e, t, !0, n)
}
    ;
Ze.hydrateRoot = function (e, t, n) {
    if (!Ec(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
        , o = !1
        , i = ""
        , s = cg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        t = ug(t, null, e, 1, n ?? null, o, !1, i, s),
        e[It] = t.current,
        Mo(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                o = n._getVersion,
                o = o(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Gs(t)
}
    ;
Ze.render = function (e, t, n) {
    if (!Ks(t))
        throw Error(N(200));
    return Ys(null, e, t, !1, n)
}
    ;
Ze.unmountComponentAtNode = function (e) {
    if (!Ks(e))
        throw Error(N(40));
    return e._reactRootContainer ? (Wn(function () {
        Ys(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[It] = null
        })
    }),
        !0) : !1
}
    ;
Ze.unstable_batchedUpdates = vc;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ks(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return Ys(e, t, n, !1, r)
}
    ;
Ze.version = "18.3.1-next-f1338f8080-20240426";
function dg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)
        } catch (e) {
            console.error(e)
        }
}
dg(),
    dh.exports = Ze;
var Xs = dh.exports;
const f1 = Br(Xs);
var mf = Xs;
cl.createRoot = mf.createRoot,
    cl.hydrateRoot = mf.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zo() {
    return zo = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        zo.apply(this, arguments)
}
var tn;
(function (e) {
    e.Pop = "POP",
        e.Push = "PUSH",
        e.Replace = "REPLACE"
}
)(tn || (tn = {}));
const gf = "popstate";
function p1(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: i, search: s, hash: a } = r.location;
        return ru("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : pg(o)
    }
    return m1(t, n, null, e)
}
function ye(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function fg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function h1() {
    return Math.random().toString(36).substr(2, 8)
}
function vf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function ru(e, t, n, r) {
    return n === void 0 && (n = null),
        zo({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? Wr(t) : t, {
            state: n,
            key: t && t.key || r || h1()
        })
}
function pg(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
}
function Wr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
            e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
            e = e.substr(0, r)),
            e && (t.pathname = e)
    }
    return t
}
function m1(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r
        , s = o.history
        , a = tn.Pop
        , l = null
        , u = c();
    u == null && (u = 0,
        s.replaceState(zo({}, s.state, {
            idx: u
        }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        a = tn.Pop;
        let S = c()
            , x = S == null ? null : S - u;
        u = S,
            l && l({
                action: a,
                location: y.location,
                delta: x
            })
    }
    function f(S, x) {
        a = tn.Push;
        let h = ru(y.location, S, x);
        n && n(h, S),
            u = c() + 1;
        let v = vf(h, u)
            , C = y.createHref(h);
        try {
            s.pushState(v, "", C)
        } catch (T) {
            if (T instanceof DOMException && T.name === "DataCloneError")
                throw T;
            o.location.assign(C)
        }
        i && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function g(S, x) {
        a = tn.Replace;
        let h = ru(y.location, S, x);
        n && n(h, S),
            u = c();
        let v = vf(h, u)
            , C = y.createHref(h);
        s.replaceState(v, "", C),
            i && l && l({
                action: a,
                location: y.location,
                delta: 0
            })
    }
    function w(S) {
        let x = o.location.origin !== "null" ? o.location.origin : o.location.href
            , h = typeof S == "string" ? S : pg(S);
        return h = h.replace(/ $/, "%20"),
            ye(x, "No window.location.(origin|href) available to create URL for href: " + h),
            new URL(h, x)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(S) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(gf, d),
                l = S,
                () => {
                    o.removeEventListener(gf, d),
                        l = null
                }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: w,
        encodeLocation(S) {
            let x = w(S);
            return {
                pathname: x.pathname,
                search: x.search,
                hash: x.hash
            }
        },
        push: f,
        replace: g,
        go(S) {
            return s.go(S)
        }
    };
    return y
}
var yf;
(function (e) {
    e.data = "data",
        e.deferred = "deferred",
        e.redirect = "redirect",
        e.error = "error"
}
)(yf || (yf = {}));
function g1(e, t, n) {
    return n === void 0 && (n = "/"),
        v1(e, t, n, !1)
}
function v1(e, t, n, r) {
    let o = typeof t == "string" ? Wr(t) : t
        , i = gg(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = hg(e);
    y1(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = A1(i);
        a = N1(s[l], u, r)
    }
    return a
}
function hg(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (ye(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            l.relativePath = l.relativePath.slice(r.length));
        let u = Vn([r, l.relativePath])
            , c = n.concat(l);
        i.children && i.children.length > 0 && (ye(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
            hg(i.children, t, c, u)),
            !(i.path == null && !i.index) && t.push({
                path: u,
                score: P1(u, i.index),
                routesMeta: c
            })
    }
        ;
    return e.forEach((i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, s);
        else
            for (let l of mg(i.path))
                o(i, s, l)
    }
    ),
        t
}
function mg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let [n, ...r] = t
        , o = n.endsWith("?")
        , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = mg(r.join("/"))
        , a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))),
        o && a.push(...s),
        a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function y1(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : b1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const x1 = /^:[\w-]+$/
    , w1 = 3
    , S1 = 2
    , C1 = 1
    , T1 = 10
    , E1 = -2
    , xf = e => e === "*";
function P1(e, t) {
    let n = e.split("/")
        , r = n.length;
    return n.some(xf) && (r += E1),
        t && (r += S1),
        n.filter(o => !xf(o)).reduce((o, i) => o + (x1.test(i) ? w1 : i === "" ? C1 : T1), r)
}
function b1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function N1(e, t, n) {
    n === void 0 && (n = !1);
    let { routesMeta: r } = e
        , o = {}
        , i = "/"
        , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
            , u = a === r.length - 1
            , c = i === "/" ? t : t.slice(i.length) || "/"
            , d = wf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c)
            , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = wf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
            !d)
            return null;
        Object.assign(o, d.params),
            s.push({
                params: o,
                pathname: Vn([i, d.pathname]),
                pathnameBase: O1(Vn([i, d.pathnameBase])),
                route: f
            }),
            d.pathnameBase !== "/" && (i = Vn([i, d.pathnameBase]))
    }
    return s
}
function wf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = k1(e.path, e.caseSensitive, e.end)
        , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
        , s = i.replace(/(.)\/+$/, "$1")
        , a = o.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: f, isOptional: g } = c;
            if (f === "*") {
                let y = a[d] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const w = a[d];
            return g && !w ? u[f] = void 0 : u[f] = (w || "").replace(/%2F/g, "/"),
                u
        }
            , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function k1(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        fg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
        , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
}
function A1(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return fg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
            e
    }
}
function gg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
        , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function j1(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Wr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : R1(n, t) : t,
        search: I1(r),
        hash: _1(o)
    }
}
function R1(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
        n.length > 1 ? n.join("/") : "/"
}
function Fa(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function M1(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function D1(e, t) {
    let n = M1(e);
    return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function L1(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Wr(e) : (o = zo({}, e),
        ye(!o.pathname || !o.pathname.includes("?"), Fa("?", "pathname", "search", o)),
        ye(!o.pathname || !o.pathname.includes("#"), Fa("#", "pathname", "hash", o)),
        ye(!o.search || !o.search.includes("#"), Fa("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a;
    if (s == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && s.startsWith("..")) {
            let f = s.split("/");
            for (; f[0] === "..";)
                f.shift(),
                    d -= 1;
            o.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = j1(o, a)
        , u = s && s !== "/" && s.endsWith("/")
        , c = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
        l
}
const Vn = e => e.join("/").replace(/\/\/+/g, "/")
    , O1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
    , I1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
    , _1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function V1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const vg = ["post", "put", "patch", "delete"];
new Set(vg);
const F1 = ["get", ...vg];
new Set(F1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Uo() {
    return Uo = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Uo.apply(this, arguments)
}
const Pc = m.createContext(null)
    , B1 = m.createContext(null)
    , Qs = m.createContext(null)
    , qs = m.createContext(null)
    , Yn = m.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    })
    , yg = m.createContext(null);
function Zs() {
    return m.useContext(qs) != null
}
function Jo() {
    return Zs() || ye(!1),
        m.useContext(qs).location
}
function xg(e) {
    m.useContext(Qs).static || m.useLayoutEffect(e)
}
function wn() {
    let { isDataRoute: e } = m.useContext(Yn);
    return e ? eS() : z1()
}
function z1() {
    Zs() || ye(!1);
    let e = m.useContext(Pc)
        , { basename: t, future: n, navigator: r } = m.useContext(Qs)
        , { matches: o } = m.useContext(Yn)
        , { pathname: i } = Jo()
        , s = JSON.stringify(D1(o, n.v7_relativeSplatPath))
        , a = m.useRef(!1);
    return xg(() => {
        a.current = !0
    }
    ),
        m.useCallback(function (u, c) {
            if (c === void 0 && (c = {}),
                !a.current)
                return;
            if (typeof u == "number") {
                r.go(u);
                return
            }
            let d = L1(u, JSON.parse(s), i, c.relative === "path");
            e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Vn([t, d.pathname])),
                (c.replace ? r.replace : r.push)(d, c.state, c)
        }, [t, r, s, i, e])
}
function U1() {
    let { matches: e } = m.useContext(Yn)
        , t = e[e.length - 1];
    return t ? t.params : {}
}
function $1(e, t) {
    return W1(e, t)
}
function W1(e, t, n, r) {
    Zs() || ye(!1);
    let { navigator: o } = m.useContext(Qs)
        , { matches: i } = m.useContext(Yn)
        , s = i[i.length - 1]
        , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Jo(), c;
    if (t) {
        var d;
        let S = typeof t == "string" ? Wr(t) : t;
        l === "/" || (d = S.pathname) != null && d.startsWith(l) || ye(!1),
            c = S
    } else
        c = u;
    let f = c.pathname || "/"
        , g = f;
    if (l !== "/") {
        let S = l.replace(/^\//, "").split("/");
        g = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let w = g1(e, {
        pathname: g
    })
        , y = X1(w && w.map(S => Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: Vn([l, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? l : Vn([l, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), i, n, r);
    return t && y ? m.createElement(qs.Provider, {
        value: {
            location: Uo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: tn.Pop
        }
    }, y) : y
}
function H1() {
    let e = J1()
        , t = V1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , n = e instanceof Error ? e.stack : null
        , o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        }
        , i = null;
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? m.createElement("pre", {
        style: o
    }, n) : null, i)
}
const G1 = m.createElement(H1, null);
class K1 extends m.Component {
    constructor(t) {
        super(t),
            this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? m.createElement(Yn.Provider, {
            value: this.props.routeContext
        }, m.createElement(yg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Y1(e) {
    let { routeContext: t, match: n, children: r } = e
        , o = m.useContext(Pc);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        m.createElement(Yn.Provider, {
            value: t
        }, r)
}
function X1(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
        , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || ye(!1),
            s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
        , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
                d.route.id) {
                let { loaderData: f, errors: g } = n
                    , w = d.route.loader && f[d.route.id] === void 0 && (!g || g[d.route.id] === void 0);
                if (d.route.lazy || w) {
                    l = !0,
                        u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, f) => {
        let g, w = !1, y = null, S = null;
        n && (g = a && d.route.id ? a[d.route.id] : void 0,
            y = d.route.errorElement || G1,
            l && (u < 0 && f === 0 ? (tS("route-fallback", !1),
                w = !0,
                S = null) : u === f && (w = !0,
                    S = d.route.hydrateFallbackElement || null)));
        let x = t.concat(s.slice(0, f + 1))
            , h = () => {
                let v;
                return g ? v = y : w ? v = S : d.route.Component ? v = m.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
                    m.createElement(Y1, {
                        match: d,
                        routeContext: {
                            outlet: c,
                            matches: x,
                            isDataRoute: n != null
                        },
                        children: v
                    })
            }
            ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? m.createElement(K1, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: g,
            children: h(),
            routeContext: {
                outlet: null,
                matches: x,
                isDataRoute: !0
            }
        }) : h()
    }
        , null)
}
var wg = function (e) {
    return e.UseBlocker = "useBlocker",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e
}(wg || {})
    , Cs = function (e) {
        return e.UseBlocker = "useBlocker",
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e.UseRouteId = "useRouteId",
            e
    }(Cs || {});
function Q1(e) {
    let t = m.useContext(Pc);
    return t || ye(!1),
        t
}
function q1(e) {
    let t = m.useContext(B1);
    return t || ye(!1),
        t
}
function Z1(e) {
    let t = m.useContext(Yn);
    return t || ye(!1),
        t
}
function Sg(e) {
    let t = Z1()
        , n = t.matches[t.matches.length - 1];
    return n.route.id || ye(!1),
        n.route.id
}
function J1() {
    var e;
    let t = m.useContext(yg)
        , n = q1(Cs.UseRouteError)
        , r = Sg(Cs.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function eS() {
    let { router: e } = Q1(wg.UseNavigateStable)
        , t = Sg(Cs.UseNavigateStable)
        , n = m.useRef(!1);
    return xg(() => {
        n.current = !0
    }
    ),
        m.useCallback(function (o, i) {
            i === void 0 && (i = {}),
                n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Uo({
                    fromRouteId: t
                }, i)))
        }, [e, t])
}
const Sf = {};
function tS(e, t, n) {
    !t && !Sf[e] && (Sf[e] = !0)
}
function nS(e, t) {
    e == null || e.v7_startTransition,
        (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath),
        t && (t.v7_fetcherPersist,
            t.v7_normalizeFormMethod,
            t.v7_partialHydration,
            t.v7_skipActionErrorRevalidation)
}
function xt(e) {
    ye(!1)
}
function rS(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: o = tn.Pop, navigator: i, static: s = !1, future: a } = e;
    Zs() && ye(!1);
    let l = t.replace(/^\/*/, "/")
        , u = m.useMemo(() => ({
            basename: l,
            navigator: i,
            static: s,
            future: Uo({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, i, s]);
    typeof r == "string" && (r = Wr(r));
    let { pathname: c = "/", search: d = "", hash: f = "", state: g = null, key: w = "default" } = r
        , y = m.useMemo(() => {
            let S = gg(c, l);
            return S == null ? null : {
                location: {
                    pathname: S,
                    search: d,
                    hash: f,
                    state: g,
                    key: w
                },
                navigationType: o
            }
        }
            , [l, c, d, f, g, w, o]);
    return y == null ? null : m.createElement(Qs.Provider, {
        value: u
    }, m.createElement(qs.Provider, {
        children: n,
        value: y
    }))
}
function oS(e) {
    let { children: t, location: n } = e;
    return $1(ou(t), n)
}
new Promise(() => { }
);
function ou(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return m.Children.forEach(e, (r, o) => {
        if (!m.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === m.Fragment) {
            n.push.apply(n, ou(r.props.children, i));
            return
        }
        r.type !== xt && ye(!1),
            !r.props.index || !r.props.children || ye(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = ou(r.props.children, i)),
            n.push(s)
    }
    ),
        n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const iS = "6";
try {
    window.__reactRouterVersion = iS
} catch { }
const sS = "startTransition"
    , Cf = Lu[sS];
function aS(e) {
    let { basename: t, children: n, future: r, window: o } = e
        , i = m.useRef();
    i.current == null && (i.current = p1({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
        , [a, l] = m.useState({
            action: s.action,
            location: s.location
        })
        , { v7_startTransition: u } = r || {}
        , c = m.useCallback(d => {
            u && Cf ? Cf(() => l(d)) : l(d)
        }
            , [l, u]);
    return m.useLayoutEffect(() => s.listen(c), [s, c]),
        m.useEffect(() => nS(r), [r]),
        m.createElement(rS, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: s,
            future: r
        })
}
var Tf;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration",
        e.UseSubmit = "useSubmit",
        e.UseSubmitFetcher = "useSubmitFetcher",
        e.UseFetcher = "useFetcher",
        e.useViewTransitionState = "useViewTransitionState"
}
)(Tf || (Tf = {}));
var Ef;
(function (e) {
    e.UseFetcher = "useFetcher",
        e.UseFetchers = "useFetchers",
        e.UseScrollRestoration = "useScrollRestoration"
}
)(Ef || (Ef = {}));
var Cg = {
    exports: {}
}
    , lS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    , uS = lS
    , cS = uS;
function Tg() { }
function Eg() { }
Eg.resetWarningCache = Tg;
var dS = function () {
    function e(r, o, i, s, a, l) {
        if (l !== cS) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Eg,
        resetWarningCache: Tg
    };
    return n.PropTypes = n,
        n
};
Cg.exports = dS();
var fS = Cg.exports;
const te = Br(fS);
function pS(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e
}
var Pg = m
    , hS = pS(Pg);
function Pf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
function mS(e, t) {
    e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
}
var gS = !!(typeof window < "u" && window.document && window.document.createElement);
function vS(e, t, n) {
    if (typeof e != "function")
        throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
        throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function")
        throw new Error("Expected mapStateOnServer to either be undefined or a function.");
    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function (i) {
        if (typeof i != "function")
            throw new Error("Expected WrappedComponent to be a React component.");
        var s = [], a;
        function l() {
            a = e(s.map(function (c) {
                return c.props
            })),
                u.canUseDOM ? t(a) : n && (a = n(a))
        }
        var u = function (c) {
            mS(d, c);
            function d() {
                return c.apply(this, arguments) || this
            }
            d.peek = function () {
                return a
            }
                ,
                d.rewind = function () {
                    if (d.canUseDOM)
                        throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                    var w = a;
                    return a = void 0,
                        s = [],
                        w
                }
                ;
            var f = d.prototype;
            return f.UNSAFE_componentWillMount = function () {
                s.push(this),
                    l()
            }
                ,
                f.componentDidUpdate = function () {
                    l()
                }
                ,
                f.componentWillUnmount = function () {
                    var w = s.indexOf(this);
                    s.splice(w, 1),
                        l()
                }
                ,
                f.render = function () {
                    return hS.createElement(i, this.props)
                }
                ,
                d
        }(Pg.PureComponent);
        return Pf(u, "displayName", "SideEffect(" + r(i) + ")"),
            Pf(u, "canUseDOM", gS),
            u
    }
}
var yS = vS;
const xS = Br(yS);
var wS = typeof Element < "u"
    , SS = typeof Map == "function"
    , CS = typeof Set == "function"
    , TS = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ki(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length,
                n != t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (!Ki(e[r], t[r]))
                    return !1;
            return !0
        }
        var i;
        if (SS && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0]))
                    return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!Ki(r.value[1], t.get(r.value[0])))
                    return !1;
            return !0
        }
        if (CS && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0]))
                    return !1;
            return !0
        }
        if (TS && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length,
                n != t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
            return e.toString() === t.toString();
        if (o = Object.keys(e),
            n = o.length,
            n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r]))
                return !1;
        if (wS && e instanceof Element)
            return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Ki(e[o[r]], t[o[r]]))
                return !1;
        return !0
    }
    return e !== e && t !== t
}
var ES = function (t, n) {
    try {
        return Ki(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"),
                !1;
        throw r
    }
};
const PS = Br(ES);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bf = Object.getOwnPropertySymbols
    , bS = Object.prototype.hasOwnProperty
    , NS = Object.prototype.propertyIsEnumerable;
function kS(e) {
    if (e == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}
function AS() {
    try {
        if (!Object.assign)
            return !1;
        var e = new String("abc");
        if (e[5] = "de",
            Object.getOwnPropertyNames(e)[0] === "5")
            return !1;
        for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (i) {
            return t[i]
        });
        if (r.join("") !== "0123456789")
            return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (i) {
            o[i] = i
        }),
            Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var jS = AS() ? Object.assign : function (e, t) {
    for (var n, r = kS(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n)
            bS.call(n, s) && (r[s] = n[s]);
        if (bf) {
            o = bf(n);
            for (var a = 0; a < o.length; a++)
                NS.call(n, o[a]) && (r[o[a]] = n[o[a]])
        }
    }
    return r
}
    ;
const RS = Br(jS);
var Fn = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
}
    , F = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(F).map(function (e) {
    return F[e]
});
var ne = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
}
    , Ts = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    }
    , $o = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    }
    , MS = Object.keys(Ts).reduce(function (e, t) {
        return e[Ts[t]] = t,
            e
    }, {})
    , DS = [F.NOSCRIPT, F.SCRIPT, F.STYLE]
    , pt = "data-react-helmet"
    , LS = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    , OS = function (e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    , IS = function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }()
    , _e = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , _S = function (e, t) {
        if (typeof t != "function" && t !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    , Nf = function (e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    , VS = function (e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e
    }
    , iu = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }
    , FS = function (t) {
        var n = Nr(t, F.TITLE)
            , r = Nr(t, $o.TITLE_TEMPLATE);
        if (r && n)
            return r.replace(/%s/g, function () {
                return Array.isArray(n) ? n.join("") : n
            });
        var o = Nr(t, $o.DEFAULT_TITLE);
        return n || o || void 0
    }
    , BS = function (t) {
        return Nr(t, $o.ON_CHANGE_CLIENT_STATE) || function () { }
    }
    , Ba = function (t, n) {
        return n.filter(function (r) {
            return typeof r[t] < "u"
        }).map(function (r) {
            return r[t]
        }).reduce(function (r, o) {
            return _e({}, r, o)
        }, {})
    }
    , zS = function (t, n) {
        return n.filter(function (r) {
            return typeof r[F.BASE] < "u"
        }).map(function (r) {
            return r[F.BASE]
        }).reverse().reduce(function (r, o) {
            if (!r.length)
                for (var i = Object.keys(o), s = 0; s < i.length; s++) {
                    var a = i[s]
                        , l = a.toLowerCase();
                    if (t.indexOf(l) !== -1 && o[l])
                        return r.concat(o)
                }
            return r
        }, [])
    }
    , Jr = function (t, n, r) {
        var o = {};
        return r.filter(function (i) {
            return Array.isArray(i[t]) ? !0 : (typeof i[t] < "u" && HS("Helmet: " + t + ' should be of type "Array". Instead found type "' + LS(i[t]) + '"'),
                !1)
        }).map(function (i) {
            return i[t]
        }).reverse().reduce(function (i, s) {
            var a = {};
            s.filter(function (f) {
                for (var g = void 0, w = Object.keys(f), y = 0; y < w.length; y++) {
                    var S = w[y]
                        , x = S.toLowerCase();
                    n.indexOf(x) !== -1 && !(g === ne.REL && f[g].toLowerCase() === "canonical") && !(x === ne.REL && f[x].toLowerCase() === "stylesheet") && (g = x),
                        n.indexOf(S) !== -1 && (S === ne.INNER_HTML || S === ne.CSS_TEXT || S === ne.ITEM_PROP) && (g = S)
                }
                if (!g || !f[g])
                    return !1;
                var h = f[g].toLowerCase();
                return o[g] || (o[g] = {}),
                    a[g] || (a[g] = {}),
                    o[g][h] ? !1 : (a[g][h] = !0,
                        !0)
            }).reverse().forEach(function (f) {
                return i.push(f)
            });
            for (var l = Object.keys(a), u = 0; u < l.length; u++) {
                var c = l[u]
                    , d = RS({}, o[c], a[c]);
                o[c] = d
            }
            return i
        }, []).reverse()
    }
    , Nr = function (t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            if (o.hasOwnProperty(n))
                return o[n]
        }
        return null
    }
    , US = function (t) {
        return {
            baseTag: zS([ne.HREF, ne.TARGET], t),
            bodyAttributes: Ba(Fn.BODY, t),
            defer: Nr(t, $o.DEFER),
            encode: Nr(t, $o.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: Ba(Fn.HTML, t),
            linkTags: Jr(F.LINK, [ne.REL, ne.HREF], t),
            metaTags: Jr(F.META, [ne.NAME, ne.CHARSET, ne.HTTPEQUIV, ne.PROPERTY, ne.ITEM_PROP], t),
            noscriptTags: Jr(F.NOSCRIPT, [ne.INNER_HTML], t),
            onChangeClientState: BS(t),
            scriptTags: Jr(F.SCRIPT, [ne.SRC, ne.INNER_HTML], t),
            styleTags: Jr(F.STYLE, [ne.CSS_TEXT], t),
            title: FS(t),
            titleAttributes: Ba(Fn.TITLE, t)
        }
    }
    , su = function () {
        var e = Date.now();
        return function (t) {
            var n = Date.now();
            n - e > 16 ? (e = n,
                t(n)) : setTimeout(function () {
                    su(t)
                }, 0)
        }
    }()
    , kf = function (t) {
        return clearTimeout(t)
    }
    , $S = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || su : global.requestAnimationFrame || su
    , WS = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || kf : global.cancelAnimationFrame || kf
    , HS = function (t) {
        return console && typeof console.warn == "function" && console.warn(t)
    }
    , eo = null
    , GS = function (t) {
        eo && WS(eo),
            t.defer ? eo = $S(function () {
                Af(t, function () {
                    eo = null
                })
            }) : (Af(t),
                eo = null)
    }
    , Af = function (t, n) {
        var r = t.baseTag
            , o = t.bodyAttributes
            , i = t.htmlAttributes
            , s = t.linkTags
            , a = t.metaTags
            , l = t.noscriptTags
            , u = t.onChangeClientState
            , c = t.scriptTags
            , d = t.styleTags
            , f = t.title
            , g = t.titleAttributes;
        au(F.BODY, o),
            au(F.HTML, i),
            KS(f, g);
        var w = {
            baseTag: tr(F.BASE, r),
            linkTags: tr(F.LINK, s),
            metaTags: tr(F.META, a),
            noscriptTags: tr(F.NOSCRIPT, l),
            scriptTags: tr(F.SCRIPT, c),
            styleTags: tr(F.STYLE, d)
        }
            , y = {}
            , S = {};
        Object.keys(w).forEach(function (x) {
            var h = w[x]
                , v = h.newTags
                , C = h.oldTags;
            v.length && (y[x] = v),
                C.length && (S[x] = w[x].oldTags)
        }),
            n && n(),
            u(t, y, S)
    }
    , bg = function (t) {
        return Array.isArray(t) ? t.join("") : t
    }
    , KS = function (t, n) {
        typeof t < "u" && document.title !== t && (document.title = bg(t)),
            au(F.TITLE, n)
    }
    , au = function (t, n) {
        var r = document.getElementsByTagName(t)[0];
        if (r) {
            for (var o = r.getAttribute(pt), i = o ? o.split(",") : [], s = [].concat(i), a = Object.keys(n), l = 0; l < a.length; l++) {
                var u = a[l]
                    , c = n[u] || "";
                r.getAttribute(u) !== c && r.setAttribute(u, c),
                    i.indexOf(u) === -1 && i.push(u);
                var d = s.indexOf(u);
                d !== -1 && s.splice(d, 1)
            }
            for (var f = s.length - 1; f >= 0; f--)
                r.removeAttribute(s[f]);
            i.length === s.length ? r.removeAttribute(pt) : r.getAttribute(pt) !== a.join(",") && r.setAttribute(pt, a.join(","))
        }
    }
    , tr = function (t, n) {
        var r = document.head || document.querySelector(F.HEAD)
            , o = r.querySelectorAll(t + "[" + pt + "]")
            , i = Array.prototype.slice.call(o)
            , s = []
            , a = void 0;
        return n && n.length && n.forEach(function (l) {
            var u = document.createElement(t);
            for (var c in l)
                if (l.hasOwnProperty(c))
                    if (c === ne.INNER_HTML)
                        u.innerHTML = l.innerHTML;
                    else if (c === ne.CSS_TEXT)
                        u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
                    else {
                        var d = typeof l[c] > "u" ? "" : l[c];
                        u.setAttribute(c, d)
                    }
            u.setAttribute(pt, "true"),
                i.some(function (f, g) {
                    return a = g,
                        u.isEqualNode(f)
                }) ? i.splice(a, 1) : s.push(u)
        }),
            i.forEach(function (l) {
                return l.parentNode.removeChild(l)
            }),
            s.forEach(function (l) {
                return r.appendChild(l)
            }),
        {
            oldTags: i,
            newTags: s
        }
    }
    , Ng = function (t) {
        return Object.keys(t).reduce(function (n, r) {
            var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
            return n ? n + " " + o : o
        }, "")
    }
    , YS = function (t, n, r, o) {
        var i = Ng(r)
            , s = bg(n);
        return i ? "<" + t + " " + pt + '="true" ' + i + ">" + iu(s, o) + "</" + t + ">" : "<" + t + " " + pt + '="true">' + iu(s, o) + "</" + t + ">"
    }
    , XS = function (t, n, r) {
        return n.reduce(function (o, i) {
            var s = Object.keys(i).filter(function (u) {
                return !(u === ne.INNER_HTML || u === ne.CSS_TEXT)
            }).reduce(function (u, c) {
                var d = typeof i[c] > "u" ? c : c + '="' + iu(i[c], r) + '"';
                return u ? u + " " + d : d
            }, "")
                , a = i.innerHTML || i.cssText || ""
                , l = DS.indexOf(t) === -1;
            return o + "<" + t + " " + pt + '="true" ' + s + (l ? "/>" : ">" + a + "</" + t + ">")
        }, "")
    }
    , kg = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function (r, o) {
            return r[Ts[o] || o] = t[o],
                r
        }, n)
    }
    , QS = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function (r, o) {
            return r[MS[o] || o] = t[o],
                r
        }, n)
    }
    , qS = function (t, n, r) {
        var o, i = (o = {
            key: n
        },
            o[pt] = !0,
            o), s = kg(r, i);
        return [G.createElement(F.TITLE, s, n)]
    }
    , ZS = function (t, n) {
        return n.map(function (r, o) {
            var i, s = (i = {
                key: o
            },
                i[pt] = !0,
                i);
            return Object.keys(r).forEach(function (a) {
                var l = Ts[a] || a;
                if (l === ne.INNER_HTML || l === ne.CSS_TEXT) {
                    var u = r.innerHTML || r.cssText;
                    s.dangerouslySetInnerHTML = {
                        __html: u
                    }
                } else
                    s[l] = r[a]
            }),
                G.createElement(t, s)
        })
    }
    , bt = function (t, n, r) {
        switch (t) {
            case F.TITLE:
                return {
                    toComponent: function () {
                        return qS(t, n.title, n.titleAttributes)
                    },
                    toString: function () {
                        return YS(t, n.title, n.titleAttributes, r)
                    }
                };
            case Fn.BODY:
            case Fn.HTML:
                return {
                    toComponent: function () {
                        return kg(n)
                    },
                    toString: function () {
                        return Ng(n)
                    }
                };
            default:
                return {
                    toComponent: function () {
                        return ZS(t, n)
                    },
                    toString: function () {
                        return XS(t, n, r)
                    }
                }
        }
    }
    , Ag = function (t) {
        var n = t.baseTag
            , r = t.bodyAttributes
            , o = t.encode
            , i = t.htmlAttributes
            , s = t.linkTags
            , a = t.metaTags
            , l = t.noscriptTags
            , u = t.scriptTags
            , c = t.styleTags
            , d = t.title
            , f = d === void 0 ? "" : d
            , g = t.titleAttributes;
        return {
            base: bt(F.BASE, n, o),
            bodyAttributes: bt(Fn.BODY, r, o),
            htmlAttributes: bt(Fn.HTML, i, o),
            link: bt(F.LINK, s, o),
            meta: bt(F.META, a, o),
            noscript: bt(F.NOSCRIPT, l, o),
            script: bt(F.SCRIPT, u, o),
            style: bt(F.STYLE, c, o),
            title: bt(F.TITLE, {
                title: f,
                titleAttributes: g
            }, o)
        }
    }
    , JS = function (t) {
        var n, r;
        return r = n = function (o) {
            _S(i, o);
            function i() {
                return OS(this, i),
                    VS(this, o.apply(this, arguments))
            }
            return i.prototype.shouldComponentUpdate = function (a) {
                return !PS(this.props, a)
            }
                ,
                i.prototype.mapNestedChildrenToProps = function (a, l) {
                    if (!l)
                        return null;
                    switch (a.type) {
                        case F.SCRIPT:
                        case F.NOSCRIPT:
                            return {
                                innerHTML: l
                            };
                        case F.STYLE:
                            return {
                                cssText: l
                            }
                    }
                    throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                }
                ,
                i.prototype.flattenArrayTypeChildren = function (a) {
                    var l, u = a.child, c = a.arrayTypeChildren, d = a.newChildProps, f = a.nestedChildren;
                    return _e({}, c, (l = {},
                        l[u.type] = [].concat(c[u.type] || [], [_e({}, d, this.mapNestedChildrenToProps(u, f))]),
                        l))
                }
                ,
                i.prototype.mapObjectTypeChildren = function (a) {
                    var l, u, c = a.child, d = a.newProps, f = a.newChildProps, g = a.nestedChildren;
                    switch (c.type) {
                        case F.TITLE:
                            return _e({}, d, (l = {},
                                l[c.type] = g,
                                l.titleAttributes = _e({}, f),
                                l));
                        case F.BODY:
                            return _e({}, d, {
                                bodyAttributes: _e({}, f)
                            });
                        case F.HTML:
                            return _e({}, d, {
                                htmlAttributes: _e({}, f)
                            })
                    }
                    return _e({}, d, (u = {},
                        u[c.type] = _e({}, f),
                        u))
                }
                ,
                i.prototype.mapArrayTypeChildrenToProps = function (a, l) {
                    var u = _e({}, l);
                    return Object.keys(a).forEach(function (c) {
                        var d;
                        u = _e({}, u, (d = {},
                            d[c] = a[c],
                            d))
                    }),
                        u
                }
                ,
                i.prototype.warnOnInvalidChildren = function (a, l) {
                    return !0
                }
                ,
                i.prototype.mapChildrenToProps = function (a, l) {
                    var u = this
                        , c = {};
                    return G.Children.forEach(a, function (d) {
                        if (!(!d || !d.props)) {
                            var f = d.props
                                , g = f.children
                                , w = Nf(f, ["children"])
                                , y = QS(w);
                            switch (u.warnOnInvalidChildren(d, g),
                            d.type) {
                                case F.LINK:
                                case F.META:
                                case F.NOSCRIPT:
                                case F.SCRIPT:
                                case F.STYLE:
                                    c = u.flattenArrayTypeChildren({
                                        child: d,
                                        arrayTypeChildren: c,
                                        newChildProps: y,
                                        nestedChildren: g
                                    });
                                    break;
                                default:
                                    l = u.mapObjectTypeChildren({
                                        child: d,
                                        newProps: l,
                                        newChildProps: y,
                                        nestedChildren: g
                                    });
                                    break
                            }
                        }
                    }),
                        l = this.mapArrayTypeChildrenToProps(c, l),
                        l
                }
                ,
                i.prototype.render = function () {
                    var a = this.props
                        , l = a.children
                        , u = Nf(a, ["children"])
                        , c = _e({}, u);
                    return l && (c = this.mapChildrenToProps(l, c)),
                        G.createElement(t, c)
                }
                ,
                IS(i, null, [{
                    key: "canUseDOM",
                    set: function (a) {
                        t.canUseDOM = a
                    }
                }]),
                i
        }(G.Component),
            n.propTypes = {
                base: te.object,
                bodyAttributes: te.object,
                children: te.oneOfType([te.arrayOf(te.node), te.node]),
                defaultTitle: te.string,
                defer: te.bool,
                encodeSpecialCharacters: te.bool,
                htmlAttributes: te.object,
                link: te.arrayOf(te.object),
                meta: te.arrayOf(te.object),
                noscript: te.arrayOf(te.object),
                onChangeClientState: te.func,
                script: te.arrayOf(te.object),
                style: te.arrayOf(te.object),
                title: te.string,
                titleAttributes: te.object,
                titleTemplate: te.string
            },
            n.defaultProps = {
                defer: !0,
                encodeSpecialCharacters: !0
            },
            n.peek = t.peek,
            n.rewind = function () {
                var o = t.rewind();
                return o || (o = Ag({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {}
                })),
                    o
            }
            ,
            r
    }
    , eC = function () {
        return null
    }
    , tC = xS(US, GS, Ag)(eC)
    , lu = JS(tC);
lu.renderStatic = lu.rewind;
function jg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = jg(e[t])) && (r && (r += " "),
                    r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                    r += n);
    return r
}
function Rg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = jg(e)) && (r && (r += " "),
            r += t);
    return r
}
function nC() {
    for (var e = 0, t, n, r = ""; e < arguments.length;)
        (t = arguments[e++]) && (n = Mg(t)) && (r && (r += " "),
            r += n);
    return r
}
function Mg(e) {
    if (typeof e == "string")
        return e;
    for (var t, n = "", r = 0; r < e.length; r++)
        e[r] && (t = Mg(e[r])) && (n && (n += " "),
            n += t);
    return n
}
var bc = "-";
function rC(e) {
    var t = iC(e)
        , n = e.conflictingClassGroups
        , r = e.conflictingClassGroupModifiers
        , o = r === void 0 ? {} : r;
    function i(a) {
        var l = a.split(bc);
        return l[0] === "" && l.length !== 1 && l.shift(),
            Dg(l, t) || oC(a)
    }
    function s(a, l) {
        var u = n[a] || [];
        return l && o[a] ? [].concat(u, o[a]) : u
    }
    return {
        getClassGroupId: i,
        getConflictingClassGroupIds: s
    }
}
function Dg(e, t) {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    var n = e[0]
        , r = t.nextPart.get(n)
        , o = r ? Dg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length !== 0) {
        var i = e.join(bc);
        return (s = t.validators.find(function (a) {
            var l = a.validator;
            return l(i)
        })) == null ? void 0 : s.classGroupId
    }
}
var jf = /^\[(.+)\]$/;
function oC(e) {
    if (jf.test(e)) {
        var t = jf.exec(e)[1]
            , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
function iC(e) {
    var t = e.theme
        , n = e.prefix
        , r = {
            nextPart: new Map,
            validators: []
        }
        , o = aC(Object.entries(e.classGroups), n);
    return o.forEach(function (i) {
        var s = i[0]
            , a = i[1];
        uu(a, r, s, t)
    }),
        r
}
function uu(e, t, n, r) {
    e.forEach(function (o) {
        if (typeof o == "string") {
            var i = o === "" ? t : Rf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (sC(o)) {
                uu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(function (s) {
            var a = s[0]
                , l = s[1];
            uu(l, Rf(t, a), n, r)
        })
    })
}
function Rf(e, t) {
    var n = e;
    return t.split(bc).forEach(function (r) {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
            n = n.nextPart.get(r)
    }),
        n
}
function sC(e) {
    return e.isThemeGetter
}
function aC(e, t) {
    return t ? e.map(function (n) {
        var r = n[0]
            , o = n[1]
            , i = o.map(function (s) {
                return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function (a) {
                    var l = a[0]
                        , u = a[1];
                    return [t + l, u]
                })) : s
            });
        return [r, i]
    }) : e
}
function lC(e) {
    if (e < 1)
        return {
            get: function () { },
            set: function () { }
        };
    var t = 0
        , n = new Map
        , r = new Map;
    function o(i, s) {
        n.set(i, s),
            t++,
            t > e && (t = 0,
                r = n,
                n = new Map)
    }
    return {
        get: function (s) {
            var a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                    a
        },
        set: function (s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
var Lg = "!";
function uC(e) {
    var t = e.separator || ":"
        , n = t.length === 1
        , r = t[0]
        , o = t.length;
    return function (s) {
        for (var a = [], l = 0, u = 0, c, d = 0; d < s.length; d++) {
            var f = s[d];
            if (l === 0) {
                if (f === r && (n || s.slice(d, d + o) === t)) {
                    a.push(s.slice(u, d)),
                        u = d + o;
                    continue
                }
                if (f === "/") {
                    c = d;
                    continue
                }
            }
            f === "[" ? l++ : f === "]" && l--
        }
        var g = a.length === 0 ? s : s.substring(u)
            , w = g.startsWith(Lg)
            , y = w ? g.substring(1) : g
            , S = c && c > u ? c - u : void 0;
        return {
            modifiers: a,
            hasImportantModifier: w,
            baseClassName: y,
            maybePostfixModifierPosition: S
        }
    }
}
function cC(e) {
    if (e.length <= 1)
        return e;
    var t = []
        , n = [];
    return e.forEach(function (r) {
        var o = r[0] === "[";
        o ? (t.push.apply(t, n.sort().concat([r])),
            n = []) : n.push(r)
    }),
        t.push.apply(t, n.sort()),
        t
}
function dC(e) {
    return {
        cache: lC(e.cacheSize),
        splitModifiers: uC(e),
        ...rC(e)
    }
}
var fC = /\s+/;
function pC(e, t) {
    var n = t.splitModifiers
        , r = t.getClassGroupId
        , o = t.getConflictingClassGroupIds
        , i = new Set;
    return e.trim().split(fC).map(function (s) {
        var a = n(s)
            , l = a.modifiers
            , u = a.hasImportantModifier
            , c = a.baseClassName
            , d = a.maybePostfixModifierPosition
            , f = r(d ? c.substring(0, d) : c)
            , g = !!d;
        if (!f) {
            if (!d)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            if (f = r(c),
                !f)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            g = !1
        }
        var w = cC(l).join(":")
            , y = u ? w + Lg : w;
        return {
            isTailwindClass: !0,
            modifierId: y,
            classGroupId: f,
            originalClassName: s,
            hasPostfixModifier: g
        }
    }).reverse().filter(function (s) {
        if (!s.isTailwindClass)
            return !0;
        var a = s.modifierId
            , l = s.classGroupId
            , u = s.hasPostfixModifier
            , c = a + l;
        return i.has(c) ? !1 : (i.add(c),
            o(l, u).forEach(function (d) {
                return i.add(a + d)
            }),
            !0)
    }).reverse().map(function (s) {
        return s.originalClassName
    }).join(" ")
}
function hC() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r, o, i, s = a;
    function a(u) {
        var c = t[0]
            , d = t.slice(1)
            , f = d.reduce(function (g, w) {
                return w(g)
            }, c());
        return r = dC(f),
            o = r.cache.get,
            i = r.cache.set,
            s = l,
            l(u)
    }
    function l(u) {
        var c = o(u);
        if (c)
            return c;
        var d = pC(u, r);
        return i(u, d),
            d
    }
    return function () {
        return s(nC.apply(null, arguments))
    }
}
function q(e) {
    var t = function (r) {
        return r[e] || []
    };
    return t.isThemeGetter = !0,
        t
}
var Og = /^\[(?:([a-z-]+):)?(.+)\]$/i
    , mC = /^\d+\/\d+$/
    , gC = new Set(["px", "full", "screen"])
    , vC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
    , yC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
    , xC = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ut(e) {
    return Ln(e) || gC.has(e) || mC.test(e) || cu(e)
}
function cu(e) {
    return Xn(e, "length", PC)
}
function wC(e) {
    return Xn(e, "size", Ig)
}
function SC(e) {
    return Xn(e, "position", Ig)
}
function CC(e) {
    return Xn(e, "url", bC)
}
function Ei(e) {
    return Xn(e, "number", Ln)
}
function Ln(e) {
    return !Number.isNaN(Number(e))
}
function TC(e) {
    return e.endsWith("%") && Ln(e.slice(0, -1))
}
function to(e) {
    return Mf(e) || Xn(e, "number", Mf)
}
function z(e) {
    return Og.test(e)
}
function no() {
    return !0
}
function Ht(e) {
    return vC.test(e)
}
function EC(e) {
    return Xn(e, "", NC)
}
function Xn(e, t, n) {
    var r = Og.exec(e);
    return r ? r[1] ? r[1] === t : n(r[2]) : !1
}
function PC(e) {
    return yC.test(e)
}
function Ig() {
    return !1
}
function bC(e) {
    return e.startsWith("url(")
}
function Mf(e) {
    return Number.isInteger(Number(e))
}
function NC(e) {
    return xC.test(e)
}
function kC() {
    var e = q("colors")
        , t = q("spacing")
        , n = q("blur")
        , r = q("brightness")
        , o = q("borderColor")
        , i = q("borderRadius")
        , s = q("borderSpacing")
        , a = q("borderWidth")
        , l = q("contrast")
        , u = q("grayscale")
        , c = q("hueRotate")
        , d = q("invert")
        , f = q("gap")
        , g = q("gradientColorStops")
        , w = q("gradientColorStopPositions")
        , y = q("inset")
        , S = q("margin")
        , x = q("opacity")
        , h = q("padding")
        , v = q("saturate")
        , C = q("scale")
        , T = q("sepia")
        , P = q("skew")
        , E = q("space")
        , b = q("translate")
        , A = function () {
            return ["auto", "contain", "none"]
        }
        , R = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"]
        }
        , H = function () {
            return ["auto", z, t]
        }
        , O = function () {
            return [z, t]
        }
        , oe = function () {
            return ["", ut]
        }
        , M = function () {
            return ["auto", Ln, z]
        }
        , ee = function () {
            return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
        }
        , U = function () {
            return ["solid", "dashed", "dotted", "double", "none"]
        }
        , de = function () {
            return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
        }
        , k = function () {
            return ["start", "end", "center", "between", "around", "evenly", "stretch"]
        }
        , D = function () {
            return ["", "0", z]
        }
        , _ = function () {
            return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
        }
        , L = function () {
            return [Ln, Ei]
        }
        , $ = function () {
            return [Ln, z]
        };
    return {
        cacheSize: 500,
        theme: {
            colors: [no],
            spacing: [ut],
            blur: ["none", "", Ht, z],
            brightness: L(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Ht, z],
            borderSpacing: O(),
            borderWidth: oe(),
            contrast: L(),
            grayscale: D(),
            hueRotate: $(),
            invert: D(),
            gap: O(),
            gradientColorStops: [e],
            gradientColorStopPositions: [TC, cu],
            inset: H(),
            margin: H(),
            opacity: L(),
            padding: O(),
            saturate: L(),
            scale: L(),
            sepia: D(),
            skew: $(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", z]
            }],
            container: ["container"],
            columns: [{
                columns: [Ht]
            }],
            "break-after": [{
                "break-after": _()
            }],
            "break-before": [{
                "break-before": _()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(ee(), [z])
            }],
            overflow: [{
                overflow: R()
            }],
            "overflow-x": [{
                "overflow-x": R()
            }],
            "overflow-y": [{
                "overflow-y": R()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", to]
            }],
            basis: [{
                basis: H()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", z]
            }],
            grow: [{
                grow: D()
            }],
            shrink: [{
                shrink: D()
            }],
            order: [{
                order: ["first", "last", "none", to]
            }],
            "grid-cols": [{
                "grid-cols": [no]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", to]
                }, z]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [no]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [to]
                }, z]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", z]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal"].concat(k())
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal"].concat(k(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(k(), ["baseline"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", z, t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", z, ut]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [Ht]
                }, Ht, z]
            }],
            h: [{
                h: [z, t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", z, ut]
            }],
            "max-h": [{
                "max-h": [z, t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Ht, cu]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ei]
            }],
            "font-family": [{
                font: [no]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Ln, Ei]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, ut]
            }],
            "list-image": [{
                "list-image": ["none", z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [x]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [x]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat(U(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", ut]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", z, ut]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [x]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(ee(), [SC])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", wC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, CC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [x]
            }],
            "border-style": [{
                border: [].concat(U(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [x]
            }],
            "divide-style": [{
                divide: U()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: [""].concat(U())
            }],
            "outline-offset": [{
                "outline-offset": [z, ut]
            }],
            "outline-w": [{
                outline: [ut]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: oe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [x]
            }],
            "ring-offset-w": [{
                "ring-offset": [ut]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Ht, EC]
            }],
            "shadow-color": [{
                shadow: [no]
            }],
            opacity: [{
                opacity: [x]
            }],
            "mix-blend": [{
                "mix-blend": de()
            }],
            "bg-blend": [{
                "bg-blend": de()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Ht, z]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [T]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [x]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [T]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
            }],
            duration: [{
                duration: $()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", z]
            }],
            delay: [{
                delay: $()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [to, z]
            }],
            "translate-x": [{
                "translate-x": [b]
            }],
            "translate-y": [{
                "translate-y": [b]
            }],
            "skew-x": [{
                "skew-x": [P]
            }],
            "skew-y": [{
                "skew-y": [P]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [ut, Ei]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
var AC = hC(kC);
function Ie(...e) {
    return AC(Rg(e))
}
function ge(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if (e == null || e(o),
            n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Df(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function _g(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Df(o, t);
            return !n && typeof i == "function" && (n = !0),
                i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Df(e[o], null)
                }
            }
    }
}
function Qe(...e) {
    return m.useCallback(_g(...e), e)
}
function jC(e, t) {
    const n = m.createContext(t)
        , r = i => {
            const { children: s, ...a } = i
                , l = m.useMemo(() => a, Object.values(a));
            return p.jsx(n.Provider, {
                value: l,
                children: s
            })
        }
        ;
    r.displayName = e + "Provider";
    function o(i) {
        const s = m.useContext(n);
        if (s)
            return s;
        if (t !== void 0)
            return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Js(e, t = []) {
    let n = [];
    function r(i, s) {
        const a = m.createContext(s)
            , l = n.length;
        n = [...n, s];
        const u = d => {
            var x;
            const { scope: f, children: g, ...w } = d
                , y = ((x = f == null ? void 0 : f[e]) == null ? void 0 : x[l]) || a
                , S = m.useMemo(() => w, Object.values(w));
            return p.jsx(y.Provider, {
                value: S,
                children: g
            })
        }
            ;
        u.displayName = i + "Provider";
        function c(d, f) {
            var y;
            const g = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
                , w = m.useContext(g);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => m.createContext(s));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return m.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
        ;
    return o.scopeName = e,
        [r, RC(o, ...t)]
}
function RC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (i) {
            const s = r.reduce((a, { useScope: l, scopeName: u }) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
                , {});
            return m.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
function Wo(e) {
    const t = DC(e)
        , n = m.forwardRef((r, o) => {
            const { children: i, ...s } = r
                , a = m.Children.toArray(i)
                , l = a.find(OC);
            if (l) {
                const u = l.props.children
                    , c = a.map(d => d === l ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : d);
                return p.jsx(t, {
                    ...s,
                    ref: o,
                    children: m.isValidElement(u) ? m.cloneElement(u, void 0, c) : null
                })
            }
            return p.jsx(t, {
                ...s,
                ref: o,
                children: i
            })
        }
        );
    return n.displayName = `${e}.Slot`,
        n
}
var MC = Wo("Slot");
function DC(e) {
    const t = m.forwardRef((n, r) => {
        const { children: o, ...i } = n;
        if (m.isValidElement(o)) {
            const s = _C(o)
                , a = IC(i, o.props);
            return o.type !== m.Fragment && (a.ref = r ? _g(r, s) : s),
                m.cloneElement(o, a)
        }
        return m.Children.count(o) > 1 ? m.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
        t
}
var Vg = Symbol("radix.slottable");
function LC(e) {
    const t = ({ children: n }) => p.jsx(p.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
        t.__radixId = Vg,
        t
}
function OC(e) {
    return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vg
}
function IC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
            , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
                l
        }
            : o && (n[r] = o) : r === "style" ? n[r] = {
                ...o,
                ...i
            } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function _C(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
function VC(e) {
    const t = e + "CollectionProvider"
        , [n, r] = Js(t)
        , [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        })
        , s = y => {
            const { scope: S, children: x } = y
                , h = G.useRef(null)
                , v = G.useRef(new Map).current;
            return p.jsx(o, {
                scope: S,
                itemMap: v,
                collectionRef: h,
                children: x
            })
        }
        ;
    s.displayName = t;
    const a = e + "CollectionSlot"
        , l = Wo(a)
        , u = G.forwardRef((y, S) => {
            const { scope: x, children: h } = y
                , v = i(a, x)
                , C = Qe(S, v.collectionRef);
            return p.jsx(l, {
                ref: C,
                children: h
            })
        }
        );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
        , d = "data-radix-collection-item"
        , f = Wo(c)
        , g = G.forwardRef((y, S) => {
            const { scope: x, children: h, ...v } = y
                , C = G.useRef(null)
                , T = Qe(S, C)
                , P = i(c, x);
            return G.useEffect(() => (P.itemMap.set(C, {
                ref: C,
                ...v
            }),
                () => void P.itemMap.delete(C))),
                p.jsx(f, {
                    [d]: "",
                    ref: T,
                    children: h
                })
        }
        );
    g.displayName = c;
    function w(y) {
        const S = i(e + "CollectionConsumer", y);
        return G.useCallback(() => {
            const h = S.collectionRef.current;
            if (!h)
                return [];
            const v = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(S.itemMap.values()).sort((P, E) => v.indexOf(P.ref.current) - v.indexOf(E.ref.current))
        }
            , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: g
    }, w, r]
}
var FC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
    , Ae = FC.reduce((e, t) => {
        const n = Wo(`Primitive.${t}`)
            , r = m.forwardRef((o, i) => {
                const { asChild: s, ...a } = o
                    , l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
                    p.jsx(l, {
                        ...a,
                        ref: i
                    })
            }
            );
        return r.displayName = `Primitive.${t}`,
        {
            ...e,
            [t]: r
        }
    }
        , {});
function Fg(e, t) {
    e && Xs.flushSync(() => e.dispatchEvent(t))
}
function Ft(e) {
    const t = m.useRef(e);
    return m.useEffect(() => {
        t.current = e
    }
    ),
        m.useMemo(() => (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n)
        }
            , [])
}
function BC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e);
    m.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
            ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
            () => t.removeEventListener("keydown", r, {
                capture: !0
            })
    }
        , [n, t])
}
var zC = "DismissableLayer", du = "dismissableLayer.update", UC = "dismissableLayer.pointerDownOutside", $C = "dismissableLayer.focusOutside", Lf, Bg = m.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Nc = m.forwardRef((e, t) => {
    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l } = e
        , u = m.useContext(Bg)
        , [c, d] = m.useState(null)
        , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
        , [, g] = m.useState({})
        , w = Qe(t, E => d(E))
        , y = Array.from(u.layers)
        , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
        , x = y.indexOf(S)
        , h = c ? y.indexOf(c) : -1
        , v = u.layersWithOutsidePointerEventsDisabled.size > 0
        , C = h >= x
        , T = HC(E => {
            const b = E.target
                , A = [...u.branches].some(R => R.contains(b));
            !C || A || (o == null || o(E),
                s == null || s(E),
                E.defaultPrevented || a == null || a())
        }
            , f)
        , P = GC(E => {
            const b = E.target;
            [...u.branches].some(R => R.contains(b)) || (i == null || i(E),
                s == null || s(E),
                E.defaultPrevented || a == null || a())
        }
            , f);
    return BC(E => {
        h === u.layers.size - 1 && (r == null || r(E),
            !E.defaultPrevented && a && (E.preventDefault(),
                a()))
    }
        , f),
        m.useEffect(() => {
            if (c)
                return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Lf = f.body.style.pointerEvents,
                    f.body.style.pointerEvents = "none"),
                    u.layersWithOutsidePointerEventsDisabled.add(c)),
                    u.layers.add(c),
                    Of(),
                    () => {
                        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Lf)
                    }
        }
            , [c, f, n, u]),
        m.useEffect(() => () => {
            c && (u.layers.delete(c),
                u.layersWithOutsidePointerEventsDisabled.delete(c),
                Of())
        }
            , [c, u]),
        m.useEffect(() => {
            const E = () => g({});
            return document.addEventListener(du, E),
                () => document.removeEventListener(du, E)
        }
            , []),
        p.jsx(Ae.div, {
            ...l,
            ref: w,
            style: {
                pointerEvents: v ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: ge(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: ge(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: ge(e.onPointerDownCapture, T.onPointerDownCapture)
        })
}
);
Nc.displayName = zC;
var WC = "DismissableLayerBranch"
    , zg = m.forwardRef((e, t) => {
        const n = m.useContext(Bg)
            , r = m.useRef(null)
            , o = Qe(t, r);
        return m.useEffect(() => {
            const i = r.current;
            if (i)
                return n.branches.add(i),
                    () => {
                        n.branches.delete(i)
                    }
        }
            , [n.branches]),
            p.jsx(Ae.div, {
                ...e,
                ref: o
            })
    }
    );
zg.displayName = WC;
function HC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
        , r = m.useRef(!1)
        , o = m.useRef(() => { }
        );
    return m.useEffect(() => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function () {
                    Ug(UC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                    o.current = l,
                    t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
            , s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }
                , 0);
        return () => {
            window.clearTimeout(s),
                t.removeEventListener("pointerdown", i),
                t.removeEventListener("click", o.current)
        }
    }
        , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function GC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
        , r = m.useRef(!1);
    return m.useEffect(() => {
        const o = i => {
            i.target && !r.current && Ug($C, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
            ;
        return t.addEventListener("focusin", o),
            () => t.removeEventListener("focusin", o)
    }
        , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Of() {
    const e = new CustomEvent(du);
    document.dispatchEvent(e)
}
function Ug(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target
        , i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }),
        r ? Fg(o, i) : o.dispatchEvent(i)
}
var KC = Nc
    , YC = zg
    , _r = globalThis != null && globalThis.document ? m.useLayoutEffect : () => { }
    , XC = "Portal"
    , kc = m.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e
            , [o, i] = m.useState(!1);
        _r(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? f1.createPortal(p.jsx(Ae.div, {
            ...r,
            ref: t
        }), s) : null
    }
    );
kc.displayName = XC;
function QC(e, t) {
    return m.useReducer((n, r) => t[n][r] ?? n, e)
}
var ei = e => {
    const { present: t, children: n } = e
        , r = qC(t)
        , o = typeof n == "function" ? n({
            present: r.isPresent
        }) : m.Children.only(n)
        , i = Qe(r.ref, ZC(o));
    return typeof n == "function" || r.isPresent ? m.cloneElement(o, {
        ref: i
    }) : null
}
    ;
ei.displayName = "Presence";
function qC(e) {
    const [t, n] = m.useState()
        , r = m.useRef(null)
        , o = m.useRef(e)
        , i = m.useRef("none")
        , s = e ? "mounted" : "unmounted"
        , [a, l] = QC(s, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
    return m.useEffect(() => {
        const u = Pi(r.current);
        i.current = a === "mounted" ? u : "none"
    }
        , [a]),
        _r(() => {
            const u = r.current
                , c = o.current;
            if (c !== e) {
                const f = i.current
                    , g = Pi(u);
                e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== g ? "ANIMATION_OUT" : "UNMOUNT"),
                    o.current = e
            }
        }
            , [e, l]),
        _r(() => {
            if (t) {
                let u;
                const c = t.ownerDocument.defaultView ?? window
                    , d = g => {
                        const y = Pi(r.current).includes(CSS.escape(g.animationName));
                        if (g.target === t && y && (l("ANIMATION_END"),
                            !o.current)) {
                            const S = t.style.animationFillMode;
                            t.style.animationFillMode = "forwards",
                                u = c.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                                }
                                )
                        }
                    }
                    , f = g => {
                        g.target === t && (i.current = Pi(r.current))
                    }
                    ;
                return t.addEventListener("animationstart", f),
                    t.addEventListener("animationcancel", d),
                    t.addEventListener("animationend", d),
                    () => {
                        c.clearTimeout(u),
                            t.removeEventListener("animationstart", f),
                            t.removeEventListener("animationcancel", d),
                            t.removeEventListener("animationend", d)
                    }
            } else
                l("ANIMATION_END")
        }
            , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: m.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
                n(u)
        }
            , [])
    }
}
function Pi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function ZC(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
var JC = Lu[" useInsertionEffect ".trim().toString()] || _r;
function $g({ prop: e, defaultProp: t, onChange: n = () => { }
    , caller: r }) {
    const [o, i, s] = eT({
        defaultProp: t,
        onChange: n
    })
        , a = e !== void 0
        , l = a ? e : o;
    {
        const c = m.useRef(e !== void 0);
        m.useEffect(() => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
                c.current = a
        }
            , [a, r])
    }
    const u = m.useCallback(c => {
        var d;
        if (a) {
            const f = tT(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            i(c)
    }
        , [a, e, i, s]);
    return [l, u]
}
function eT({ defaultProp: e, onChange: t }) {
    const [n, r] = m.useState(e)
        , o = m.useRef(n)
        , i = m.useRef(t);
    return JC(() => {
        i.current = t
    }
        , [t]),
        m.useEffect(() => {
            var s;
            o.current !== n && ((s = i.current) == null || s.call(i, n),
                o.current = n)
        }
            , [n, o]),
        [n, r, i]
}
function tT(e) {
    return typeof e == "function"
}
var nT = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
    , rT = "VisuallyHidden"
    , Ac = m.forwardRef((e, t) => p.jsx(Ae.span, {
        ...e,
        ref: t,
        style: {
            ...nT,
            ...e.style
        }
    }));
Ac.displayName = rT;
var jc = "ToastProvider"
    , [Rc, oT, iT] = VC("Toast")
    , [Wg, FA] = Js("Toast", [iT])
    , [sT, ea] = Wg(jc)
    , Hg = e => {
        const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: i = 50, children: s } = e
            , [a, l] = m.useState(null)
            , [u, c] = m.useState(0)
            , d = m.useRef(!1)
            , f = m.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${jc}\`. Expected non-empty \`string\`.`),
            p.jsx(Rc.Provider, {
                scope: t,
                children: p.jsx(sT, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: i,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: l,
                    onToastAdd: m.useCallback(() => c(g => g + 1), []),
                    onToastRemove: m.useCallback(() => c(g => g - 1), []),
                    isFocusedToastEscapeKeyDownRef: d,
                    isClosePausedRef: f,
                    children: s
                })
            })
    }
    ;
Hg.displayName = jc;
var Gg = "ToastViewport"
    , aT = ["F8"]
    , fu = "toast.viewportPause"
    , pu = "toast.viewportResume"
    , Kg = m.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = aT, label: o = "Notifications ({hotkey})", ...i } = e
            , s = ea(Gg, n)
            , a = oT(n)
            , l = m.useRef(null)
            , u = m.useRef(null)
            , c = m.useRef(null)
            , d = m.useRef(null)
            , f = Qe(t, d, s.onViewportChange)
            , g = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
            , w = s.toastCount > 0;
        m.useEffect(() => {
            const S = x => {
                var v;
                r.length !== 0 && r.every(C => x[C] || x.code === C) && ((v = d.current) == null || v.focus())
            }
                ;
            return document.addEventListener("keydown", S),
                () => document.removeEventListener("keydown", S)
        }
            , [r]),
            m.useEffect(() => {
                const S = l.current
                    , x = d.current;
                if (w && S && x) {
                    const h = () => {
                        if (!s.isClosePausedRef.current) {
                            const P = new CustomEvent(fu);
                            x.dispatchEvent(P),
                                s.isClosePausedRef.current = !0
                        }
                    }
                        , v = () => {
                            if (s.isClosePausedRef.current) {
                                const P = new CustomEvent(pu);
                                x.dispatchEvent(P),
                                    s.isClosePausedRef.current = !1
                            }
                        }
                        , C = P => {
                            !S.contains(P.relatedTarget) && v()
                        }
                        , T = () => {
                            S.contains(document.activeElement) || v()
                        }
                        ;
                    return S.addEventListener("focusin", h),
                        S.addEventListener("focusout", C),
                        S.addEventListener("pointermove", h),
                        S.addEventListener("pointerleave", T),
                        window.addEventListener("blur", h),
                        window.addEventListener("focus", v),
                        () => {
                            S.removeEventListener("focusin", h),
                                S.removeEventListener("focusout", C),
                                S.removeEventListener("pointermove", h),
                                S.removeEventListener("pointerleave", T),
                                window.removeEventListener("blur", h),
                                window.removeEventListener("focus", v)
                        }
                }
            }
                , [w, s.isClosePausedRef]);
        const y = m.useCallback(({ tabbingDirection: S }) => {
            const h = a().map(v => {
                const C = v.ref.current
                    , T = [C, ...wT(C)];
                return S === "forwards" ? T : T.reverse()
            }
            );
            return (S === "forwards" ? h.reverse() : h).flat()
        }
            , [a]);
        return m.useEffect(() => {
            const S = d.current;
            if (S) {
                const x = h => {
                    var T, P, E;
                    const v = h.altKey || h.ctrlKey || h.metaKey;
                    if (h.key === "Tab" && !v) {
                        const b = document.activeElement
                            , A = h.shiftKey;
                        if (h.target === S && A) {
                            (T = u.current) == null || T.focus();
                            return
                        }
                        const O = y({
                            tabbingDirection: A ? "backwards" : "forwards"
                        })
                            , oe = O.findIndex(M => M === b);
                        za(O.slice(oe + 1)) ? h.preventDefault() : A ? (P = u.current) == null || P.focus() : (E = c.current) == null || E.focus()
                    }
                }
                    ;
                return S.addEventListener("keydown", x),
                    () => S.removeEventListener("keydown", x)
            }
        }
            , [a, y]),
            p.jsxs(YC, {
                ref: l,
                role: "region",
                "aria-label": o.replace("{hotkey}", g),
                tabIndex: -1,
                style: {
                    pointerEvents: w ? void 0 : "none"
                },
                children: [w && p.jsx(hu, {
                    ref: u,
                    onFocusFromOutsideViewport: () => {
                        const S = y({
                            tabbingDirection: "forwards"
                        });
                        za(S)
                    }
                }), p.jsx(Rc.Slot, {
                    scope: n,
                    children: p.jsx(Ae.ol, {
                        tabIndex: -1,
                        ...i,
                        ref: f
                    })
                }), w && p.jsx(hu, {
                    ref: c,
                    onFocusFromOutsideViewport: () => {
                        const S = y({
                            tabbingDirection: "backwards"
                        });
                        za(S)
                    }
                })]
            })
    }
    );
Kg.displayName = Gg;
var Yg = "ToastFocusProxy"
    , hu = m.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e
            , i = ea(Yg, n);
        return p.jsx(Ac, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r()
            }
        })
    }
    );
hu.displayName = Yg;
var ti = "Toast"
    , lT = "toast.swipeStart"
    , uT = "toast.swipeMove"
    , cT = "toast.swipeCancel"
    , dT = "toast.swipeEnd"
    , Xg = m.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e
            , [a, l] = $g({
                prop: r,
                defaultProp: o ?? !0,
                onChange: i,
                caller: ti
            });
        return p.jsx(ei, {
            present: n || a,
            children: p.jsx(hT, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: Ft(e.onPause),
                onResume: Ft(e.onResume),
                onSwipeStart: ge(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }
                ),
                onSwipeMove: ge(e.onSwipeMove, u => {
                    const { x: c, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }
                ),
                onSwipeCancel: ge(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }
                ),
                onSwipeEnd: ge(e.onSwipeEnd, u => {
                    const { x: c, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                        l(!1)
                }
                )
            })
        })
    }
    );
Xg.displayName = ti;
var [fT, pT] = Wg(ti, {
    onClose() { }
})
    , hT = m.forwardRef((e, t) => {
        const { __scopeToast: n, type: r = "foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: g, ...w } = e
            , y = ea(ti, n)
            , [S, x] = m.useState(null)
            , h = Qe(t, M => x(M))
            , v = m.useRef(null)
            , C = m.useRef(null)
            , T = o || y.duration
            , P = m.useRef(0)
            , E = m.useRef(T)
            , b = m.useRef(0)
            , { onToastAdd: A, onToastRemove: R } = y
            , H = Ft(() => {
                var ee;
                (S == null ? void 0 : S.contains(document.activeElement)) && ((ee = y.viewport) == null || ee.focus()),
                    s()
            }
            )
            , O = m.useCallback(M => {
                !M || M === 1 / 0 || (window.clearTimeout(b.current),
                    P.current = new Date().getTime(),
                    b.current = window.setTimeout(H, M))
            }
                , [H]);
        m.useEffect(() => {
            const M = y.viewport;
            if (M) {
                const ee = () => {
                    O(E.current),
                        u == null || u()
                }
                    , U = () => {
                        const de = new Date().getTime() - P.current;
                        E.current = E.current - de,
                            window.clearTimeout(b.current),
                            l == null || l()
                    }
                    ;
                return M.addEventListener(fu, U),
                    M.addEventListener(pu, ee),
                    () => {
                        M.removeEventListener(fu, U),
                            M.removeEventListener(pu, ee)
                    }
            }
        }
            , [y.viewport, T, l, u, O]),
            m.useEffect(() => {
                i && !y.isClosePausedRef.current && O(T)
            }
                , [i, T, y.isClosePausedRef, O]),
            m.useEffect(() => (A(),
                () => R()), [A, R]);
        const oe = m.useMemo(() => S ? nv(S) : null, [S]);
        return y.viewport ? p.jsxs(p.Fragment, {
            children: [oe && p.jsx(mT, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                children: oe
            }), p.jsx(fT, {
                scope: n,
                onClose: H,
                children: Xs.createPortal(p.jsx(Rc.ItemSlot, {
                    scope: n,
                    children: p.jsx(KC, {
                        asChild: !0,
                        onEscapeKeyDown: ge(a, () => {
                            y.isFocusedToastEscapeKeyDownRef.current || H(),
                                y.isFocusedToastEscapeKeyDownRef.current = !1
                        }
                        ),
                        children: p.jsx(Ae.li, {
                            tabIndex: 0,
                            "data-state": i ? "open" : "closed",
                            "data-swipe-direction": y.swipeDirection,
                            ...w,
                            ref: h,
                            style: {
                                userSelect: "none",
                                touchAction: "none",
                                ...e.style
                            },
                            onKeyDown: ge(e.onKeyDown, M => {
                                M.key === "Escape" && (a == null || a(M.nativeEvent),
                                    M.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                                        H()))
                            }
                            ),
                            onPointerDown: ge(e.onPointerDown, M => {
                                M.button === 0 && (v.current = {
                                    x: M.clientX,
                                    y: M.clientY
                                })
                            }
                            ),
                            onPointerMove: ge(e.onPointerMove, M => {
                                if (!v.current)
                                    return;
                                const ee = M.clientX - v.current.x
                                    , U = M.clientY - v.current.y
                                    , de = !!C.current
                                    , k = ["left", "right"].includes(y.swipeDirection)
                                    , D = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                                    , _ = k ? D(0, ee) : 0
                                    , L = k ? 0 : D(0, U)
                                    , $ = M.pointerType === "touch" ? 10 : 2
                                    , Y = {
                                        x: _,
                                        y: L
                                    }
                                    , We = {
                                        originalEvent: M,
                                        delta: Y
                                    };
                                de ? (C.current = Y,
                                    bi(uT, d, We, {
                                        discrete: !1
                                    })) : If(Y, y.swipeDirection, $) ? (C.current = Y,
                                        bi(lT, c, We, {
                                            discrete: !1
                                        }),
                                        M.target.setPointerCapture(M.pointerId)) : (Math.abs(ee) > $ || Math.abs(U) > $) && (v.current = null)
                            }
                            ),
                            onPointerUp: ge(e.onPointerUp, M => {
                                const ee = C.current
                                    , U = M.target;
                                if (U.hasPointerCapture(M.pointerId) && U.releasePointerCapture(M.pointerId),
                                    C.current = null,
                                    v.current = null,
                                    ee) {
                                    const de = M.currentTarget
                                        , k = {
                                            originalEvent: M,
                                            delta: ee
                                        };
                                    If(ee, y.swipeDirection, y.swipeThreshold) ? bi(dT, g, k, {
                                        discrete: !0
                                    }) : bi(cT, f, k, {
                                        discrete: !0
                                    }),
                                        de.addEventListener("click", D => D.preventDefault(), {
                                            once: !0
                                        })
                                }
                            }
                            )
                        })
                    })
                }), y.viewport)
            })]
        }) : null
    }
    )
    , mT = e => {
        const { __scopeToast: t, children: n, ...r } = e
            , o = ea(ti, t)
            , [i, s] = m.useState(!1)
            , [a, l] = m.useState(!1);
        return yT(() => s(!0)),
            m.useEffect(() => {
                const u = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(u)
            }
                , []),
            a ? null : p.jsx(kc, {
                asChild: !0,
                children: p.jsx(Ac, {
                    ...r,
                    children: i && p.jsxs(p.Fragment, {
                        children: [o.label, " ", n]
                    })
                })
            })
    }
    , gT = "ToastTitle"
    , Qg = m.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return p.jsx(Ae.div, {
            ...r,
            ref: t
        })
    }
    );
Qg.displayName = gT;
var vT = "ToastDescription"
    , qg = m.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return p.jsx(Ae.div, {
            ...r,
            ref: t
        })
    }
    );
qg.displayName = vT;
var Zg = "ToastAction"
    , Jg = m.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim() ? p.jsx(tv, {
            altText: n,
            asChild: !0,
            children: p.jsx(Mc, {
                ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Zg}\`. Expected non-empty \`string\`.`),
            null)
    }
    );
Jg.displayName = Zg;
var ev = "ToastClose"
    , Mc = m.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e
            , o = pT(ev, n);
        return p.jsx(tv, {
            asChild: !0,
            children: p.jsx(Ae.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: ge(e.onClick, o.onClose)
            })
        })
    }
    );
Mc.displayName = ev;
var tv = m.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return p.jsx(Ae.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function nv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
            xT(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
                , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...nv(r))
        }
    }
    ),
        t
}
function bi(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget
        , i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }),
        r ? Fg(o, i) : o.dispatchEvent(i)
}
var If = (e, t, n = 0) => {
    const r = Math.abs(e.x)
        , o = Math.abs(e.y)
        , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
    ;
function yT(e = () => { }
) {
    const t = Ft(e);
    _r(() => {
        let n = 0
            , r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)),
            () => {
                window.cancelAnimationFrame(n),
                    window.cancelAnimationFrame(r)
            }
    }
        , [t])
}
function xT(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function wT(e) {
    const t = []
        , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();)
        t.push(n.currentNode);
    return t
}
function za(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
        document.activeElement !== t))
}
var ST = Hg
    , rv = Kg
    , ov = Xg
    , iv = Qg
    , sv = qg
    , av = Jg
    , lv = Mc;
const _f = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
    , Vf = Rg
    , uv = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Vf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t
            , s = Object.keys(o).map(u => {
                const c = n == null ? void 0 : n[u]
                    , d = i == null ? void 0 : i[u];
                if (c === null)
                    return null;
                const f = _f(c) || _f(d);
                return o[u][f]
            }
            )
            , a = n && Object.entries(n).reduce((u, c) => {
                let [d, f] = c;
                return f === void 0 || (u[d] = f),
                    u
            }
                , {})
            , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
                let { class: d, className: f, ...g } = c;
                return Object.entries(g).every(w => {
                    let [y, S] = w;
                    return Array.isArray(S) ? S.includes({
                        ...i,
                        ...a
                    }[y]) : {
                        ...i,
                        ...a
                    }[y] === S
                }
                ) ? [...u, d, f] : u
            }
                , []);
        return Vf(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    }
    ;
var CT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const TT = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    , Qn = (e, t) => {
        const n = m.forwardRef(({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: s, children: a, ...l }, u) => m.createElement("svg", {
            ref: u,
            ...CT,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: s ? Number(i) * 24 / Number(o) : i,
            className: `lucide lucide-${TT(e)}`,
            ...l
        }, [...t.map(([c, d]) => m.createElement(c, d)), ...(Array.isArray(a) ? a : [a]) || []]));
        return n.displayName = `${e}`,
            n
    }
    , Dc = Qn("AlertTriangle", [["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4"
    }], ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }], ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]])
    , jn = Qn("CheckCircle", [["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }], ["polyline", {
        points: "22 4 12 14.01 9 11.01",
        key: "6xbx8j"
    }]])
    , ET = Qn("CreditCard", [["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z"
    }], ["line", {
        x1: "2",
        x2: "22",
        y1: "10",
        y2: "10",
        key: "1b3vmo"
    }]])
    , PT = Qn("Gift", [["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }], ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }], ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }], ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]])
    , mu = Qn("Shield", [["path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
        key: "1irkt0"
    }]])
    , bT = Qn("Smartphone", [["rect", {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3"
    }], ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }]])
    , NT = Qn("X", [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]])
    , kT = ST
    , cv = G.forwardRef(({ className: e, ...t }, n) => p.jsx(rv, {
        ref: n,
        className: Ie("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
cv.displayName = rv.displayName;
const AT = uv("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full", {
    variants: {
        variant: {
            default: "bg-background border",
            destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
    , dv = G.forwardRef(({ className: e, variant: t, ...n }, r) => p.jsx(ov, {
        ref: r,
        className: Ie(AT({
            variant: t
        }), e),
        ...n
    }));
dv.displayName = ov.displayName;
const jT = G.forwardRef(({ className: e, ...t }, n) => p.jsx(av, {
    ref: n,
    className: Ie("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
jT.displayName = av.displayName;
const fv = G.forwardRef(({ className: e, ...t }, n) => p.jsx(lv, {
    ref: n,
    className: Ie("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: p.jsx(NT, {
        className: "h-4 w-4"
    })
}));
fv.displayName = lv.displayName;
const pv = G.forwardRef(({ className: e, ...t }, n) => p.jsx(iv, {
    ref: n,
    className: Ie("text-sm font-semibold", e),
    ...t
}));
pv.displayName = iv.displayName;
const hv = G.forwardRef(({ className: e, ...t }, n) => p.jsx(sv, {
    ref: n,
    className: Ie("text-sm opacity-90", e),
    ...t
}));
hv.displayName = sv.displayName;
const RT = 1;
let Ua = 0;
function MT() {
    return Ua = (Ua + 1) % Number.MAX_VALUE,
        Ua.toString()
}
const je = {
    state: {
        toasts: []
    },
    listeners: [],
    getState: () => je.state,
    setState: e => {
        typeof e == "function" ? je.state = e(je.state) : je.state = {
            ...je.state,
            ...e
        },
            je.listeners.forEach(t => t(je.state))
    }
    ,
    subscribe: e => (je.listeners.push(e),
        () => {
            je.listeners = je.listeners.filter(t => t !== e)
        }
    )
}
    , DT = ({ ...e }) => {
        const t = MT()
            , n = o => je.setState(i => ({
                ...i,
                toasts: i.toasts.map(s => s.id === t ? {
                    ...s,
                    ...o
                } : s)
            }))
            , r = () => je.setState(o => ({
                ...o,
                toasts: o.toasts.filter(i => i.id !== t)
            }));
        return je.setState(o => ({
            ...o,
            toasts: [{
                ...e,
                id: t,
                dismiss: r
            }, ...o.toasts].slice(0, RT)
        })),
        {
            id: t,
            dismiss: r,
            update: n
        }
    }
    ;
function ta() {
    const [e, t] = m.useState(je.getState());
    return m.useEffect(() => je.subscribe(r => {
        t(r)
    }
    ), []),
        m.useEffect(() => {
            const n = [];
            return e.toasts.forEach(r => {
                if (r.duration === 1 / 0)
                    return;
                const o = setTimeout(() => {
                    r.dismiss()
                }
                    , r.duration || 5e3);
                n.push(o)
            }
            ),
                () => {
                    n.forEach(r => clearTimeout(r))
                }
        }
            , [e.toasts]),
    {
        toast: DT,
        toasts: e.toasts
    }
}
function LT() {
    const { toasts: e } = ta();
    return p.jsxs(kT, {
        children: [e.map(({ id: t, title: n, description: r, action: o, ...i }) => p.jsxs(dv, {
            ...i,
            children: [p.jsxs("div", {
                className: "grid gap-1",
                children: [n && p.jsx(pv, {
                    children: n
                }), r && p.jsx(hv, {
                    children: r
                })]
            }), o, p.jsx(fv, {})]
        }, t)), p.jsx(cv, {})]
    })
}
const OT = () => {
    const e = Jo();
    return m.useEffect(() => {
        if (!document.querySelector("#utmify-pixel")) {
            window.pixelId = "68c183a9bc40cfe42b9716e5";
            const t = document.createElement("script");
            t.id = "utmify-pixel",
                t.async = !0,
                t.defer = !0,
                t.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js",
                document.head.appendChild(t)
        }
        if (!document.querySelector("#utmify-utms")) {
            const t = document.createElement("script");
            t.id = "utmify-utms",
                t.src = "https://cdn.utmify.com.br/scripts/utms/latest.js",
                t.setAttribute("data-utmify-prevent-xcod-sck", ""),
                t.setAttribute("data-utmify-prevent-subids", ""),
                t.async = !0,
                t.defer = !0,
                document.body.appendChild(t)
        }
        window.fbq && window.fbq("track", "PageView")
    }
        , [e.pathname]),
        null
}
    , mv = m.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    })
    , na = m.createContext({})
    , ra = m.createContext(null)
    , oa = typeof document < "u"
    , Lc = oa ? m.useLayoutEffect : m.useEffect
    , gv = m.createContext({
        strict: !1
    })
    , Oc = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    , IT = "framerAppearId"
    , vv = "data-" + Oc(IT);
function _T(e, t, n, r) {
    const { visualElement: o } = m.useContext(na)
        , i = m.useContext(gv)
        , s = m.useContext(ra)
        , a = m.useContext(mv).reducedMotion
        , l = m.useRef();
    r = r || i.renderer,
        !l.current && r && (l.current = r(e, {
            visualState: t,
            parent: o,
            props: n,
            presenceContext: s,
            blockInitialAnimation: s ? s.initial === !1 : !1,
            reducedMotionConfig: a
        }));
    const u = l.current;
    m.useInsertionEffect(() => {
        u && u.update(n, s)
    }
    );
    const c = m.useRef(!!(n[vv] && !window.HandoffComplete));
    return Lc(() => {
        u && (u.render(),
            c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
        m.useEffect(() => {
            u && (u.updateFeatures(),
                !c.current && u.animationState && u.animationState.animateChanges(),
                c.current && (c.current = !1,
                    window.HandoffComplete = !0))
        }
        ),
        u
}
function vr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function VT(e, t, n) {
    return m.useCallback(r => {
        r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == "function" ? n(r) : vr(n) && (n.current = r))
    }
        , [t])
}
function Ho(e) {
    return typeof e == "string" || Array.isArray(e)
}
function ia(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ic = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
    , _c = ["initial", ...Ic];
function sa(e) {
    return ia(e.animate) || _c.some(t => Ho(e[t]))
}
function yv(e) {
    return !!(sa(e) || e.variants)
}
function FT(e, t) {
    if (sa(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || Ho(n) ? n : void 0,
            animate: Ho(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function BT(e) {
    const { initial: t, animate: n } = FT(e, m.useContext(na));
    return m.useMemo(() => ({
        initial: t,
        animate: n
    }), [Ff(t), Ff(n)])
}
function Ff(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Bf = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
    , Go = {};
for (const e in Bf)
    Go[e] = {
        isEnabled: t => Bf[e].some(n => !!t[n])
    };
function zT(e) {
    for (const t in e)
        Go[t] = {
            ...Go[t],
            ...e[t]
        }
}
const Vc = m.createContext({})
    , xv = m.createContext({})
    , UT = Symbol.for("motionComponentSymbol");
function $T({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
    e && zT(e);
    function i(a, l) {
        let u;
        const c = {
            ...m.useContext(mv),
            ...a,
            layoutId: WT(a)
        }
            , { isStatic: d } = c
            , f = BT(a)
            , g = r(a, d);
        if (!d && oa) {
            f.visualElement = _T(o, g, c, t);
            const w = m.useContext(xv)
                , y = m.useContext(gv).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, w))
        }
        return m.createElement(na.Provider, {
            value: f
        }, u && f.visualElement ? m.createElement(u, {
            visualElement: f.visualElement,
            ...c
        }) : null, n(o, a, VT(g, f.visualElement, l), g, d, f.visualElement))
    }
    const s = m.forwardRef(i);
    return s[UT] = o,
        s
}
function WT({ layoutId: e }) {
    const t = m.useContext(Vc).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function HT(e) {
    function t(r, o = {}) {
        return $T(e(r, o))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, o) => (n.has(o) || n.set(o, t(o)),
            n.get(o))
    })
}
const GT = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Fc(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(GT.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Es = {};
function KT(e) {
    Object.assign(Es, e)
}
const ni = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
    , qn = new Set(ni);
function wv(e, { layout: t, layoutId: n }) {
    return qn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Es[e] || e === "opacity")
}
const $e = e => !!(e && e.getVelocity)
    , YT = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
    , XT = ni.length;
function QT(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
    let i = "";
    for (let s = 0; s < XT; s++) {
        const a = ni[s];
        if (e[a] !== void 0) {
            const l = YT[a] || a;
            i += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"),
        i = i.trim(),
        o ? i = o(e, r ? "" : i) : n && r && (i = "none"),
        i
}
const Sv = e => t => typeof t == "string" && t.startsWith(e)
    , Cv = Sv("--")
    , gu = Sv("var(--")
    , qT = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    , ZT = (e, t) => t && typeof e == "number" ? t.transform(e) : e
    , mn = (e, t, n) => Math.min(Math.max(n, e), t)
    , Zn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    }
    , wo = {
        ...Zn,
        transform: e => mn(0, 1, e)
    }
    , Ni = {
        ...Zn,
        default: 1
    }
    , So = e => Math.round(e * 1e5) / 1e5
    , aa = /(-)?([\d]*\.?[\d])+/g
    , Tv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
    , JT = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ri(e) {
    return typeof e == "string"
}
const oi = e => ({
    test: t => ri(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
    , Gt = oi("deg")
    , Pt = oi("%")
    , I = oi("px")
    , eE = oi("vh")
    , tE = oi("vw")
    , zf = {
        ...Pt,
        parse: e => Pt.parse(e) / 100,
        transform: e => Pt.transform(e * 100)
    }
    , Uf = {
        ...Zn,
        transform: Math.round
    }
    , Ev = {
        borderWidth: I,
        borderTopWidth: I,
        borderRightWidth: I,
        borderBottomWidth: I,
        borderLeftWidth: I,
        borderRadius: I,
        radius: I,
        borderTopLeftRadius: I,
        borderTopRightRadius: I,
        borderBottomRightRadius: I,
        borderBottomLeftRadius: I,
        width: I,
        maxWidth: I,
        height: I,
        maxHeight: I,
        size: I,
        top: I,
        right: I,
        bottom: I,
        left: I,
        padding: I,
        paddingTop: I,
        paddingRight: I,
        paddingBottom: I,
        paddingLeft: I,
        margin: I,
        marginTop: I,
        marginRight: I,
        marginBottom: I,
        marginLeft: I,
        rotate: Gt,
        rotateX: Gt,
        rotateY: Gt,
        rotateZ: Gt,
        scale: Ni,
        scaleX: Ni,
        scaleY: Ni,
        scaleZ: Ni,
        skew: Gt,
        skewX: Gt,
        skewY: Gt,
        distance: I,
        translateX: I,
        translateY: I,
        translateZ: I,
        x: I,
        y: I,
        z: I,
        perspective: I,
        transformPerspective: I,
        opacity: wo,
        originX: zf,
        originY: zf,
        originZ: I,
        zIndex: Uf,
        fillOpacity: wo,
        strokeOpacity: wo,
        numOctaves: Uf
    };
function Bc(e, t, n, r) {
    const { style: o, vars: i, transform: s, transformOrigin: a } = e;
    let l = !1
        , u = !1
        , c = !0;
    for (const d in t) {
        const f = t[d];
        if (Cv(d)) {
            i[d] = f;
            continue
        }
        const g = Ev[d]
            , w = ZT(f, g);
        if (qn.has(d)) {
            if (l = !0,
                s[d] = w,
                !c)
                continue;
            f !== (g.default || 0) && (c = !1)
        } else
            d.startsWith("origin") ? (u = !0,
                a[d] = w) : o[d] = w
    }
    if (t.transform || (l || r ? o.transform = QT(e.transform, n, c, r) : o.transform && (o.transform = "none")),
        u) {
        const { originX: d = "50%", originY: f = "50%", originZ: g = 0 } = a;
        o.transformOrigin = `${d} ${f} ${g}`
    }
}
const zc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Pv(e, t, n) {
    for (const r in t)
        !$e(t[r]) && !wv(r, n) && (e[r] = t[r])
}
function nE({ transformTemplate: e }, t, n) {
    return m.useMemo(() => {
        const r = zc();
        return Bc(r, t, {
            enableHardwareAcceleration: !n
        }, e),
            Object.assign({}, r.vars, r.style)
    }
        , [t])
}
function rE(e, t, n) {
    const r = e.style || {}
        , o = {};
    return Pv(o, r, e),
        Object.assign(o, nE(e, t, n)),
        e.transformValues ? e.transformValues(o) : o
}
function oE(e, t, n) {
    const r = {}
        , o = rE(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
        o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
        o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
        r.style = o,
        r
}
const iE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Ps(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || iE.has(e)
}
let bv = e => !Ps(e);
function sE(e) {
    e && (bv = t => t.startsWith("on") ? !Ps(t) : e(t))
}
try {
    sE(require("@emotion/is-prop-valid").default)
} catch { }
function aE(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (bv(o) || n === !0 && Ps(o) || !t && !Ps(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
function $f(e, t, n) {
    return typeof e == "string" ? e : I.transform(t + n * e)
}
function lE(e, t, n) {
    const r = $f(t, e.x, e.width)
        , o = $f(n, e.y, e.height);
    return `${r} ${o}`
}
const uE = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
    , cE = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function dE(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? uE : cE;
    e[i.offset] = I.transform(-r);
    const s = I.transform(t)
        , a = I.transform(n);
    e[i.array] = `${s} ${a}`
}
function Uc(e, { attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...u }, c, d, f) {
    if (Bc(e, u, c, f),
        d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
        e.style = {};
    const { attrs: g, style: w, dimensions: y } = e;
    g.transform && (y && (w.transform = g.transform),
        delete g.transform),
        y && (o !== void 0 || i !== void 0 || w.transform) && (w.transformOrigin = lE(y, o !== void 0 ? o : .5, i !== void 0 ? i : .5)),
        t !== void 0 && (g.x = t),
        n !== void 0 && (g.y = n),
        r !== void 0 && (g.scale = r),
        s !== void 0 && dE(g, s, a, l, !1)
}
const Nv = () => ({
    ...zc(),
    attrs: {}
})
    , $c = e => typeof e == "string" && e.toLowerCase() === "svg";
function fE(e, t, n, r) {
    const o = m.useMemo(() => {
        const i = Nv();
        return Uc(i, t, {
            enableHardwareAcceleration: !1
        }, $c(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
        , [t]);
    if (e.style) {
        const i = {};
        Pv(i, e.style, e),
            o.style = {
                ...i,
                ...o.style
            }
    }
    return o
}
function pE(e = !1) {
    return (n, r, o, { latestValues: i }, s) => {
        const l = (Fc(n) ? fE : oE)(r, i, s, n)
            , c = {
                ...aE(r, typeof n == "string", e),
                ...l,
                ref: o
            }
            , { children: d } = r
            , f = m.useMemo(() => $e(d) ? d.get() : d, [d]);
        return m.createElement(n, {
            ...c,
            children: f
        })
    }
}
function kv(e, { style: t, vars: n }, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const Av = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function jv(e, t, n, r) {
    kv(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(Av.has(o) ? o : Oc(o), t.attrs[o])
}
function Wc(e, t) {
    const { style: n } = e
        , r = {};
    for (const o in n)
        ($e(n[o]) || t.style && $e(t.style[o]) || wv(o, e)) && (r[o] = n[o]);
    return r
}
function Rv(e, t) {
    const n = Wc(e, t);
    for (const r in e)
        if ($e(e[r]) || $e(t[r])) {
            const o = ni.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[o] = e[r]
        }
    return n
}
function Hc(e, t, n, r = {}, o = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
        typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
        t
}
function Mv(e) {
    const t = m.useRef(null);
    return t.current === null && (t.current = e()),
        t.current
}
const bs = e => Array.isArray(e)
    , hE = e => !!(e && typeof e == "object" && e.mix && e.toValue)
    , mE = e => bs(e) ? e[e.length - 1] || 0 : e;
function Yi(e) {
    const t = $e(e) ? e.get() : e;
    return hE(t) ? t.toValue() : t
}
function gE({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
    const s = {
        latestValues: vE(r, o, i, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)),
        s
}
const Dv = e => (t, n) => {
    const r = m.useContext(na)
        , o = m.useContext(ra)
        , i = () => gE(e, t, r, o);
    return n ? i() : Mv(i)
}
    ;
function vE(e, t, n, r) {
    const o = {}
        , i = r(e, {});
    for (const f in i)
        o[f] = Yi(i[f]);
    let { initial: s, animate: a } = e;
    const l = sa(e)
        , u = yv(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
        a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    return d && typeof d != "boolean" && !ia(d) && (Array.isArray(d) ? d : [d]).forEach(g => {
        const w = Hc(e, g);
        if (!w)
            return;
        const { transitionEnd: y, transition: S, ...x } = w;
        for (const h in x) {
            let v = x[h];
            if (Array.isArray(v)) {
                const C = c ? v.length - 1 : 0;
                v = v[C]
            }
            v !== null && (o[h] = v)
        }
        for (const h in y)
            o[h] = y[h]
    }
    ),
        o
}
const ce = e => e;
class Wf {
    constructor() {
        this.order = [],
            this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
                this.order.push(t),
                !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
            this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
            this.scheduled.clear()
    }
}
function yE(e) {
    let t = new Wf
        , n = new Wf
        , r = 0
        , o = !1
        , i = !1;
    const s = new WeakSet
        , a = {
            schedule: (l, u = !1, c = !1) => {
                const d = c && o
                    , f = d ? t : n;
                return u && s.add(l),
                    f.add(l) && d && o && (r = t.order.length),
                    l
            }
            ,
            cancel: l => {
                n.remove(l),
                    s.delete(l)
            }
            ,
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0,
                    [t, n] = [n, t],
                    n.clear(),
                    r = t.order.length,
                    r)
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        c(l),
                            s.has(c) && (a.schedule(c),
                                e())
                    }
                o = !1,
                    i && (i = !1,
                        a.process(l))
            }
        };
    return a
}
const ki = ["prepare", "read", "update", "preRender", "render", "postRender"]
    , xE = 40;
function wE(e, t) {
    let n = !1
        , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , i = ki.reduce((d, f) => (d[f] = yE(() => n = !0),
            d), {})
        , s = d => i[d].process(o)
        , a = () => {
            const d = performance.now();
            n = !1,
                o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, xE), 1),
                o.timestamp = d,
                o.isProcessing = !0,
                ki.forEach(s),
                o.isProcessing = !1,
                n && t && (r = !1,
                    e(a))
        }
        , l = () => {
            n = !0,
                r = !0,
                o.isProcessing || e(a)
        }
        ;
    return {
        schedule: ki.reduce((d, f) => {
            const g = i[f];
            return d[f] = (w, y = !1, S = !1) => (n || l(),
                g.schedule(w, y, S)),
                d
        }
            , {}),
        cancel: d => ki.forEach(f => i[f].cancel(d)),
        state: o,
        steps: i
    }
}
const { schedule: Q, cancel: Bt, state: be, steps: $a } = wE(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ce, !0)
    , SE = {
        useVisualState: Dv({
            scrapeMotionValuesFromProps: Rv,
            createRenderState: Nv,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                Q.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }
                ),
                    Q.render(() => {
                        Uc(n, r, {
                            enableHardwareAcceleration: !1
                        }, $c(t.tagName), e.transformTemplate),
                            jv(t, n)
                    }
                    )
            }
        })
    }
    , CE = {
        useVisualState: Dv({
            scrapeMotionValuesFromProps: Wc,
            createRenderState: zc
        })
    };
function TE(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
        ...Fc(e) ? SE : CE,
        preloadedFeatures: n,
        useRender: pE(t),
        createVisualElement: r,
        Component: e
    }
}
function Rt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r),
        () => e.removeEventListener(t, n)
}
const Lv = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function la(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const EE = e => t => Lv(t) && e(t, la(t));
function Dt(e, t, n, r) {
    return Rt(e, t, EE(n), r)
}
const PE = (e, t) => n => t(e(n))
    , dn = (...e) => e.reduce(PE);
function Ov(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
            ;
        return t === null ? (t = e,
            n) : !1
    }
}
const Hf = Ov("dragHorizontal")
    , Gf = Ov("dragVertical");
function Iv(e) {
    let t = !1;
    if (e === "y")
        t = Gf();
    else if (e === "x")
        t = Hf();
    else {
        const n = Hf()
            , r = Gf();
        n && r ? t = () => {
            n(),
                r()
        }
            : (n && n(),
                r && r())
    }
    return t
}
function _v() {
    const e = Iv(!0);
    return e ? (e(),
        !1) : !0
}
class Sn {
    constructor(t) {
        this.isMounted = !1,
            this.node = t
    }
    update() { }
}
function Kf(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
        , r = "onHover" + (t ? "Start" : "End")
        , o = (i, s) => {
            if (i.pointerType === "touch" || _v())
                return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t),
                a[r] && Q.update(() => a[r](i, s))
        }
        ;
    return Dt(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class bE extends Sn {
    mount() {
        this.unmount = dn(Kf(this.node, !0), Kf(this.node, !1))
    }
    unmount() { }
}
class NE extends Sn {
    constructor() {
        super(...arguments),
            this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
    }
    mount() {
        this.unmount = dn(Rt(this.node.current, "focus", () => this.onFocus()), Rt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}
const Vv = (e, t) => t ? e === t ? !0 : Vv(e, t.parentElement) : !1;
function Wa(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, la(n))
}
class kE extends Sn {
    constructor() {
        super(...arguments),
            this.removeStartListeners = ce,
            this.removeEndListeners = ce,
            this.removeAccessibleListeners = ce,
            this.startPointerPress = (t, n) => {
                if (this.isPressing)
                    return;
                this.removeEndListeners();
                const r = this.node.getProps()
                    , i = Dt(window, "pointerup", (a, l) => {
                        if (!this.checkPressEnd())
                            return;
                        const { onTap: u, onTapCancel: c, globalTapTarget: d } = this.node.getProps();
                        Q.update(() => {
                            !d && !Vv(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                        }
                        )
                    }
                        , {
                            passive: !(r.onTap || r.onPointerUp)
                        })
                    , s = Dt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                        passive: !(r.onTapCancel || r.onPointerCancel)
                    });
                this.removeEndListeners = dn(i, s),
                    this.startPress(t, n)
            }
            ,
            this.startAccessiblePress = () => {
                const t = i => {
                    if (i.key !== "Enter" || this.isPressing)
                        return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || Wa("up", (l, u) => {
                            const { onTap: c } = this.node.getProps();
                            c && Q.update(() => c(l, u))
                        }
                        )
                    }
                        ;
                    this.removeEndListeners(),
                        this.removeEndListeners = Rt(this.node.current, "keyup", s),
                        Wa("down", (a, l) => {
                            this.startPress(a, l)
                        }
                        )
                }
                    , n = Rt(this.node.current, "keydown", t)
                    , r = () => {
                        this.isPressing && Wa("cancel", (i, s) => this.cancelPress(i, s))
                    }
                    , o = Rt(this.node.current, "blur", r);
                this.removeAccessibleListeners = dn(n, o)
            }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: o } = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
            r && Q.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
            this.isPressing = !1,
            this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
            !_v()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel: r } = this.node.getProps();
        r && Q.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
            , n = Dt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            })
            , r = Rt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = dn(n, r)
    }
    unmount() {
        this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners()
    }
}
const vu = new WeakMap
    , Ha = new WeakMap
    , AE = e => {
        const t = vu.get(e.target);
        t && t(e)
    }
    , jE = e => {
        e.forEach(AE)
    }
    ;
function RE({ root: e, ...t }) {
    const n = e || document;
    Ha.has(n) || Ha.set(n, {});
    const r = Ha.get(n)
        , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(jE, {
        root: e,
        ...t
    })),
        r[o]
}
function ME(e, t, n) {
    const r = RE(t);
    return vu.set(e, n),
        r.observe(e),
        () => {
            vu.delete(e),
                r.unobserve(e)
        }
}
const DE = {
    some: 0,
    all: 1
};
class LE extends Sn {
    constructor() {
        super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps()
            , { root: n, margin: r, amount: o = "some", once: i } = t
            , s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof o == "number" ? o : DE[o]
            }
            , a = l => {
                const { isIntersecting: u } = l;
                if (this.isInView === u || (this.isInView = u,
                    i && !u && this.hasEnteredView))
                    return;
                u && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", u);
                const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps()
                    , f = u ? c : d;
                f && f(l)
            }
            ;
        return ME(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(OE(t, n)) && this.startObserver()
    }
    unmount() { }
}
function OE({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return n => e[n] !== t[n]
}
const IE = {
    inView: {
        Feature: LE
    },
    tap: {
        Feature: kE
    },
    focus: {
        Feature: NE
    },
    hover: {
        Feature: bE
    }
};
function Fv(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function _E(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()),
        t
}
function VE(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()),
        t
}
function ua(e, t, n) {
    const r = e.getProps();
    return Hc(r, t, n !== void 0 ? n : r.custom, _E(e), VE(e))
}
let FE = ce
    , Gc = ce;
const fn = e => e * 1e3
    , Lt = e => e / 1e3
    , BE = {
        current: !1
    }
    , Bv = e => Array.isArray(e) && typeof e[0] == "number";
function zv(e) {
    return !!(!e || typeof e == "string" && Uv[e] || Bv(e) || Array.isArray(e) && e.every(zv))
}
const uo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
    , Uv = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: uo([0, .65, .55, 1]),
        circOut: uo([.55, 0, 1, .45]),
        backIn: uo([.31, .01, .66, -.59]),
        backOut: uo([.33, 1.53, .69, .99])
    };
function $v(e) {
    if (e)
        return Bv(e) ? uo(e) : Array.isArray(e) ? e.map($v) : Uv[e]
}
function zE(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = $v(a);
    return Array.isArray(c) && (u.easing = c),
        e.animate(u, {
            delay: r,
            duration: o,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: i + 1,
            direction: s === "reverse" ? "alternate" : "normal"
        })
}
function UE(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Wv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    , $E = 1e-7
    , WE = 12;
function HE(e, t, n, r, o) {
    let i, s, a = 0;
    do
        s = t + (n - t) / 2,
            i = Wv(s, r, o) - e,
            i > 0 ? n = s : t = s;
    while (Math.abs(i) > $E && ++a < WE);
    return s
}
function ii(e, t, n, r) {
    if (e === t && n === r)
        return ce;
    const o = i => HE(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Wv(o(i), t, r)
}
const GE = ii(.42, 0, 1, 1)
    , KE = ii(0, 0, .58, 1)
    , Hv = ii(.42, 0, .58, 1)
    , YE = e => Array.isArray(e) && typeof e[0] != "number"
    , Gv = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    , Kv = e => t => 1 - e(1 - t)
    , Kc = e => 1 - Math.sin(Math.acos(e))
    , Yv = Kv(Kc)
    , XE = Gv(Kc)
    , Xv = ii(.33, 1.53, .69, .99)
    , Yc = Kv(Xv)
    , QE = Gv(Yc)
    , qE = e => (e *= 2) < 1 ? .5 * Yc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
    , ZE = {
        linear: ce,
        easeIn: GE,
        easeInOut: Hv,
        easeOut: KE,
        circIn: Kc,
        circInOut: XE,
        circOut: Yv,
        backIn: Yc,
        backInOut: QE,
        backOut: Xv,
        anticipate: qE
    }
    , Yf = e => {
        if (Array.isArray(e)) {
            Gc(e.length === 4);
            const [t, n, r, o] = e;
            return ii(t, n, r, o)
        } else if (typeof e == "string")
            return ZE[e];
        return e
    }
    , Xc = (e, t) => n => !!(ri(n) && JT.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
    , Qv = (e, t, n) => r => {
        if (!ri(r))
            return r;
        const [o, i, s, a] = r.match(aa);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    }
    , JE = e => mn(0, 255, e)
    , Ga = {
        ...Zn,
        transform: e => Math.round(JE(e))
    }
    , On = {
        test: Xc("rgb", "red"),
        parse: Qv("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ga.transform(e) + ", " + Ga.transform(t) + ", " + Ga.transform(n) + ", " + So(wo.transform(r)) + ")"
    };
function eP(e) {
    let t = ""
        , n = ""
        , r = ""
        , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        r = e.substring(5, 7),
        o = e.substring(7, 9)) : (t = e.substring(1, 2),
            n = e.substring(2, 3),
            r = e.substring(3, 4),
            o = e.substring(4, 5),
            t += t,
            n += n,
            r += r,
            o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const yu = {
    test: Xc("#"),
    parse: eP,
    transform: On.transform
}
    , yr = {
        test: Xc("hsl", "hue"),
        parse: Qv("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Pt.transform(So(t)) + ", " + Pt.transform(So(n)) + ", " + So(wo.transform(r)) + ")"
    }
    , Re = {
        test: e => On.test(e) || yu.test(e) || yr.test(e),
        parse: e => On.test(e) ? On.parse(e) : yr.test(e) ? yr.parse(e) : yu.parse(e),
        transform: e => ri(e) ? e : e.hasOwnProperty("red") ? On.transform(e) : yr.transform(e)
    }
    , se = (e, t, n) => -n * e + n * t + e;
function Ka(e, t, n) {
    return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function tP({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360,
        t /= 100,
        n /= 100;
    let o = 0
        , i = 0
        , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
            , l = 2 * n - a;
        o = Ka(l, a, e + 1 / 3),
            i = Ka(l, a, e),
            s = Ka(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const Ya = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
    , nP = [yu, On, yr]
    , rP = e => nP.find(t => t.test(e));
function Xf(e) {
    const t = rP(e);
    let n = t.parse(e);
    return t === yr && (n = tP(n)),
        n
}
const qv = (e, t) => {
    const n = Xf(e)
        , r = Xf(t)
        , o = {
            ...n
        };
    return i => (o.red = Ya(n.red, r.red, i),
        o.green = Ya(n.green, r.green, i),
        o.blue = Ya(n.blue, r.blue, i),
        o.alpha = se(n.alpha, r.alpha, i),
        On.transform(o))
}
    ;
function oP(e) {
    var t, n;
    return isNaN(e) && ri(e) && (((t = e.match(aa)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Tv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Zv = {
    regex: qT,
    countKey: "Vars",
    token: "${v}",
    parse: ce
}
    , Jv = {
        regex: Tv,
        countKey: "Colors",
        token: "${c}",
        parse: Re.parse
    }
    , ey = {
        regex: aa,
        countKey: "Numbers",
        token: "${n}",
        parse: Zn.parse
    };
function Xa(e, { regex: t, countKey: n, token: r, parse: o }) {
    const i = e.tokenised.match(t);
    i && (e["num" + n] = i.length,
        e.tokenised = e.tokenised.replace(t, r),
        e.values.push(...i.map(o)))
}
function Ns(e) {
    const t = e.toString()
        , n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && Xa(n, Zv),
        Xa(n, Jv),
        Xa(n, ey),
        n
}
function ty(e) {
    return Ns(e).values
}
function ny(e) {
    const { values: t, numColors: n, numVars: r, tokenised: o } = Ns(e)
        , i = t.length;
    return s => {
        let a = o;
        for (let l = 0; l < i; l++)
            l < r ? a = a.replace(Zv.token, s[l]) : l < r + n ? a = a.replace(Jv.token, Re.transform(s[l])) : a = a.replace(ey.token, So(s[l]));
        return a
    }
}
const iP = e => typeof e == "number" ? 0 : e;
function sP(e) {
    const t = ty(e);
    return ny(e)(t.map(iP))
}
const gn = {
    test: oP,
    parse: ty,
    createTransformer: ny,
    getAnimatableNone: sP
}
    , ry = (e, t) => n => `${n > 0 ? t : e}`;
function oy(e, t) {
    return typeof e == "number" ? n => se(e, t, n) : Re.test(e) ? qv(e, t) : e.startsWith("var(") ? ry(e, t) : sy(e, t)
}
const iy = (e, t) => {
    const n = [...e]
        , r = n.length
        , o = e.map((i, s) => oy(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
    , aP = (e, t) => {
        const n = {
            ...e,
            ...t
        }
            , r = {};
        for (const o in n)
            e[o] !== void 0 && t[o] !== void 0 && (r[o] = oy(e[o], t[o]));
        return o => {
            for (const i in r)
                n[i] = r[i](o);
            return n
        }
    }
    , sy = (e, t) => {
        const n = gn.createTransformer(t)
            , r = Ns(e)
            , o = Ns(t);
        return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? dn(iy(r.values, o.values), n) : ry(e, t)
    }
    , Ko = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }
    , Qf = (e, t) => n => se(e, t, n);
function lP(e) {
    return typeof e == "number" ? Qf : typeof e == "string" ? Re.test(e) ? qv : sy : Array.isArray(e) ? iy : typeof e == "object" ? aP : Qf
}
function uP(e, t, n) {
    const r = []
        , o = n || lP(e[0])
        , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || ce : t;
            a = dn(l, a)
        }
        r.push(a)
    }
    return r
}
function ay(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
    const i = e.length;
    if (Gc(i === t.length),
        i === 1)
        return () => t[0];
    e[0] > e[i - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
    const s = uP(t, r, o)
        , a = s.length
        , l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                    ;
            const d = Ko(e[c], e[c + 1], u);
            return s[c](d)
        }
        ;
    return n ? u => l(mn(e[0], e[i - 1], u)) : l
}
function cP(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Ko(0, t, r);
        e.push(se(n, 1, o))
    }
}
function dP(e) {
    const t = [0];
    return cP(t, e.length - 1),
        t
}
function fP(e, t) {
    return e.map(n => n * t)
}
function pP(e, t) {
    return e.map(() => t || Hv).splice(0, e.length - 1)
}
function ks({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const o = YE(r) ? r.map(Yf) : Yf(r)
        , i = {
            done: !1,
            value: t[0]
        }
        , s = fP(n && n.length === t.length ? n : dP(t), e)
        , a = ay(s, t, {
            ease: Array.isArray(o) ? o : pP(t, o)
        });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l),
            i.done = l >= e,
            i)
    }
}
function ly(e, t) {
    return t ? e * (1e3 / t) : 0
}
const hP = 5;
function uy(e, t, n) {
    const r = Math.max(t - hP, 0);
    return ly(n - e(r), t - r)
}
const Qa = .001
    , mP = .01
    , qf = 10
    , gP = .05
    , vP = 1;
function yP({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
    let o, i;
    FE(e <= fn(qf));
    let s = 1 - t;
    s = mn(gP, vP, s),
        e = mn(mP, qf, Lt(e)),
        s < 1 ? (o = u => {
            const c = u * s
                , d = c * e
                , f = c - n
                , g = xu(u, s)
                , w = Math.exp(-d);
            return Qa - f / g * w
        }
            ,
            i = u => {
                const d = u * s * e
                    , f = d * n + n
                    , g = Math.pow(s, 2) * Math.pow(u, 2) * e
                    , w = Math.exp(-d)
                    , y = xu(Math.pow(u, 2), s);
                return (-o(u) + Qa > 0 ? -1 : 1) * ((f - g) * w) / y
            }
        ) : (o = u => {
            const c = Math.exp(-u * e)
                , d = (u - n) * e + 1;
            return -Qa + c * d
        }
            ,
            i = u => {
                const c = Math.exp(-u * e)
                    , d = (n - u) * (e * e);
                return c * d
            }
        );
    const a = 5 / e
        , l = wP(o, i, a);
    if (e = fn(e),
        isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const xP = 12;
function wP(e, t, n) {
    let r = n;
    for (let o = 1; o < xP; o++)
        r = r - e(r) / t(r);
    return r
}
function xu(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const SP = ["duration", "bounce"]
    , CP = ["stiffness", "damping", "mass"];
function Zf(e, t) {
    return t.some(n => e[n] !== void 0)
}
function TP(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Zf(e, CP) && Zf(e, SP)) {
        const n = yP(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
            t.isResolvedFromDuration = !0
    }
    return t
}
function cy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const o = e[0]
        , i = e[e.length - 1]
        , s = {
            done: !1,
            value: o
        }
        , { stiffness: a, damping: l, mass: u, duration: c, velocity: d, isResolvedFromDuration: f } = TP({
            ...r,
            velocity: -Lt(r.velocity || 0)
        })
        , g = d || 0
        , w = l / (2 * Math.sqrt(a * u))
        , y = i - o
        , S = Lt(Math.sqrt(a / u))
        , x = Math.abs(y) < 5;
    n || (n = x ? .01 : 2),
        t || (t = x ? .005 : .5);
    let h;
    if (w < 1) {
        const v = xu(S, w);
        h = C => {
            const T = Math.exp(-w * S * C);
            return i - T * ((g + w * S * y) / v * Math.sin(v * C) + y * Math.cos(v * C))
        }
    } else if (w === 1)
        h = v => i - Math.exp(-S * v) * (y + (g + S * y) * v);
    else {
        const v = S * Math.sqrt(w * w - 1);
        h = C => {
            const T = Math.exp(-w * S * C)
                , P = Math.min(v * C, 300);
            return i - T * ((g + w * S * y) * Math.sinh(P) + v * y * Math.cosh(P)) / v
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: v => {
            const C = h(v);
            if (f)
                s.done = v >= c;
            else {
                let T = g;
                v !== 0 && (w < 1 ? T = uy(h, v, C) : T = 0);
                const P = Math.abs(T) <= n
                    , E = Math.abs(i - C) <= t;
                s.done = P && E
            }
            return s.value = s.done ? i : C,
                s
        }
    }
}
function Jf({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: u = .5, restSpeed: c }) {
    const d = e[0]
        , f = {
            done: !1,
            value: d
        }
        , g = b => a !== void 0 && b < a || l !== void 0 && b > l
        , w = b => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
    let y = n * t;
    const S = d + y
        , x = s === void 0 ? S : s(S);
    x !== S && (y = x - d);
    const h = b => -y * Math.exp(-b / r)
        , v = b => x + h(b)
        , C = b => {
            const A = h(b)
                , R = v(b);
            f.done = Math.abs(A) <= u,
                f.value = f.done ? x : R
        }
        ;
    let T, P;
    const E = b => {
        g(f.value) && (T = b,
            P = cy({
                keyframes: [f.value, w(f.value)],
                velocity: uy(v, b, f.value),
                damping: o,
                stiffness: i,
                restDelta: u,
                restSpeed: c
            }))
    }
        ;
    return E(0),
    {
        calculatedDuration: null,
        next: b => {
            let A = !1;
            return !P && T === void 0 && (A = !0,
                C(b),
                E(b)),
                T !== void 0 && b > T ? P.next(b - T) : (!A && C(b),
                    f)
        }
    }
}
const EP = e => {
    const t = ({ timestamp: n }) => e(n);
    return {
        start: () => Q.update(t, !0),
        stop: () => Bt(t),
        now: () => be.isProcessing ? be.timestamp : performance.now()
    }
}
    , ep = 2e4;
function tp(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < ep;)
        t += n,
            r = e.next(t);
    return t >= ep ? 1 / 0 : t
}
const PP = {
    decay: Jf,
    inertia: Jf,
    tween: ks,
    keyframes: ks,
    spring: cy
};
function As({ autoplay: e = !0, delay: t = 0, driver: n = EP, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
    let g = 1, w = !1, y, S;
    const x = () => {
        S = new Promise(L => {
            y = L
        }
        )
    }
        ;
    x();
    let h;
    const v = PP[o] || ks;
    let C;
    v !== ks && typeof r[0] != "number" && (C = ay([0, 100], r, {
        clamp: !1
    }),
        r = [0, 100]);
    const T = v({
        ...f,
        keyframes: r
    });
    let P;
    a === "mirror" && (P = v({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let E = "idle"
        , b = null
        , A = null
        , R = null;
    T.calculatedDuration === null && i && (T.calculatedDuration = tp(T));
    const { calculatedDuration: H } = T;
    let O = 1 / 0
        , oe = 1 / 0;
    H !== null && (O = H + s,
        oe = O * (i + 1) - s);
    let M = 0;
    const ee = L => {
        if (A === null)
            return;
        g > 0 && (A = Math.min(A, L)),
            g < 0 && (A = Math.min(L - oe / g, A)),
            b !== null ? M = b : M = Math.round(L - A) * g;
        const $ = M - t * (g >= 0 ? 1 : -1)
            , Y = g >= 0 ? $ < 0 : $ > oe;
        M = Math.max($, 0),
            E === "finished" && b === null && (M = oe);
        let We = M
            , Jn = T;
        if (i) {
            const fa = Math.min(M, oe) / O;
            let si = Math.floor(fa)
                , Tn = fa % 1;
            !Tn && fa >= 1 && (Tn = 1),
                Tn === 1 && si--,
                si = Math.min(si, i + 1),
                !!(si % 2) && (a === "reverse" ? (Tn = 1 - Tn,
                    s && (Tn -= s / O)) : a === "mirror" && (Jn = P)),
                We = mn(0, 1, Tn) * O
        }
        const He = Y ? {
            done: !1,
            value: r[0]
        } : Jn.next(We);
        C && (He.value = C(He.value));
        let { done: Cn } = He;
        !Y && H !== null && (Cn = g >= 0 ? M >= oe : M <= 0);
        const F0 = b === null && (E === "finished" || E === "running" && Cn);
        return d && d(He.value),
            F0 && k(),
            He
    }
        , U = () => {
            h && h.stop(),
                h = void 0
        }
        , de = () => {
            E = "idle",
                U(),
                y(),
                x(),
                A = R = null
        }
        , k = () => {
            E = "finished",
                c && c(),
                U(),
                y()
        }
        , D = () => {
            if (w)
                return;
            h || (h = n(ee));
            const L = h.now();
            l && l(),
                b !== null ? A = L - b : (!A || E === "finished") && (A = L),
                E === "finished" && x(),
                R = A,
                b = null,
                E = "running",
                h.start()
        }
        ;
    e && D();
    const _ = {
        then(L, $) {
            return S.then(L, $)
        },
        get time() {
            return Lt(M)
        },
        set time(L) {
            L = fn(L),
                M = L,
                b !== null || !h || g === 0 ? b = L : A = h.now() - L / g
        },
        get duration() {
            const L = T.calculatedDuration === null ? tp(T) : T.calculatedDuration;
            return Lt(L)
        },
        get speed() {
            return g
        },
        set speed(L) {
            L === g || !h || (g = L,
                _.time = Lt(M))
        },
        get state() {
            return E
        },
        play: D,
        pause: () => {
            E = "paused",
                b = M
        }
        ,
        stop: () => {
            w = !0,
                E !== "idle" && (E = "idle",
                    u && u(),
                    de())
        }
        ,
        cancel: () => {
            R !== null && ee(R),
                de()
        }
        ,
        complete: () => {
            E = "finished"
        }
        ,
        sample: L => (A = 0,
            ee(L))
    };
    return _
}
function bP(e) {
    let t;
    return () => (t === void 0 && (t = e()),
        t)
}
const NP = bP(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
    , kP = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
    , Ai = 10
    , AP = 2e4
    , jP = (e, t) => t.type === "spring" || e === "backgroundColor" || !zv(t.ease);
function RP(e, t, { onUpdate: n, onComplete: r, ...o }) {
    if (!(NP() && kP.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
        return !1;
    let s = !1, a, l, u = !1;
    const c = () => {
        l = new Promise(v => {
            a = v
        }
        )
    }
        ;
    c();
    let { keyframes: d, duration: f = 300, ease: g, times: w } = o;
    if (jP(t, o)) {
        const v = As({
            ...o,
            repeat: 0,
            delay: 0
        });
        let C = {
            done: !1,
            value: d[0]
        };
        const T = [];
        let P = 0;
        for (; !C.done && P < AP;)
            C = v.sample(P),
                T.push(C.value),
                P += Ai;
        w = void 0,
            d = T,
            f = P - Ai,
            g = "linear"
    }
    const y = zE(e.owner.current, t, d, {
        ...o,
        duration: f,
        ease: g,
        times: w
    })
        , S = () => {
            u = !1,
                y.cancel()
        }
        , x = () => {
            u = !0,
                Q.update(S),
                a(),
                c()
        }
        ;
    return y.onfinish = () => {
        u || (e.set(UE(d, o)),
            r && r(),
            x())
    }
        ,
    {
        then(v, C) {
            return l.then(v, C)
        },
        attachTimeline(v) {
            return y.timeline = v,
                y.onfinish = null,
                ce
        },
        get time() {
            return Lt(y.currentTime || 0)
        },
        set time(v) {
            y.currentTime = fn(v)
        },
        get speed() {
            return y.playbackRate
        },
        set speed(v) {
            y.playbackRate = v
        },
        get duration() {
            return Lt(f)
        },
        play: () => {
            s || (y.play(),
                Bt(S))
        }
        ,
        pause: () => y.pause(),
        stop: () => {
            if (s = !0,
                y.playState === "idle")
                return;
            const { currentTime: v } = y;
            if (v) {
                const C = As({
                    ...o,
                    autoplay: !1
                });
                e.setWithVelocity(C.sample(v - Ai).value, C.sample(v).value, Ai)
            }
            x()
        }
        ,
        complete: () => {
            u || y.finish()
        }
        ,
        cancel: x
    }
}
function MP({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const o = () => (n && n(e[e.length - 1]),
        r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ce,
        pause: ce,
        stop: ce,
        then: i => (i(),
            Promise.resolve()),
        cancel: ce,
        complete: ce
    });
    return t ? As({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: o
    }) : o()
}
const DP = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
    , LP = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
    , OP = {
        type: "keyframes",
        duration: .8
    }
    , IP = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
    , _P = (e, { keyframes: t }) => t.length > 2 ? OP : qn.has(e) ? e.startsWith("scale") ? LP(t[1]) : DP : IP
    , wu = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (gn.test(t) || t === "0") && !t.startsWith("url("))
    , VP = new Set(["brightness", "contrast", "saturate", "opacity"]);
function FP(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(aa) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = VP.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
        t + "(" + i + o + ")"
}
const BP = /([a-z-]*)\(.*?\)/g
    , Su = {
        ...gn,
        getAnimatableNone: e => {
            const t = e.match(BP);
            return t ? t.map(FP).join(" ") : e
        }
    }
    , zP = {
        ...Ev,
        color: Re,
        backgroundColor: Re,
        outlineColor: Re,
        fill: Re,
        stroke: Re,
        borderColor: Re,
        borderTopColor: Re,
        borderRightColor: Re,
        borderBottomColor: Re,
        borderLeftColor: Re,
        filter: Su,
        WebkitFilter: Su
    }
    , Qc = e => zP[e];
function dy(e, t) {
    let n = Qc(e);
    return n !== Su && (n = gn),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const fy = e => /^0[^.\s]+$/.test(e);
function UP(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || fy(e)
}
function $P(e, t, n, r) {
    const o = wu(t, n);
    let i;
    Array.isArray(n) ? i = [...n] : i = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < i.length; u++)
        i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
            UP(i[u]) && l.push(u),
            typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
    if (o && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            i[c] = dy(t, a)
        }
    return i
}
function WP({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length
}
function qc(e, t) {
    return e[t] || e.default || e
}
const HP = {
    skipAnimations: !1
}
    , Zc = (e, t, n, r = {}) => o => {
        const i = qc(r, e) || {}
            , s = i.delay || r.delay || 0;
        let { elapsed: a = 0 } = r;
        a = a - fn(s);
        const l = $P(t, e, n, i)
            , u = l[0]
            , c = l[l.length - 1]
            , d = wu(e, u)
            , f = wu(e, c);
        let g = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...i,
            delay: -a,
            onUpdate: w => {
                t.set(w),
                    i.onUpdate && i.onUpdate(w)
            }
            ,
            onComplete: () => {
                o(),
                    i.onComplete && i.onComplete()
            }
        };
        if (WP(i) || (g = {
            ...g,
            ..._P(e, g)
        }),
            g.duration && (g.duration = fn(g.duration)),
            g.repeatDelay && (g.repeatDelay = fn(g.repeatDelay)),
            !d || !f || BE.current || i.type === !1 || HP.skipAnimations)
            return MP(g);
        if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
            const w = RP(t, e, g);
            if (w)
                return w
        }
        return As(g)
    }
    ;
function js(e) {
    return !!($e(e) && e.add)
}
const py = e => /^\-?\d*\.?\d+$/.test(e);
function Jc(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function ed(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class td {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Jc(this.subscriptions, t),
            () => ed(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const GP = e => !isNaN(parseFloat(e));
class KP {
    constructor(t, n = {}) {
        this.version = "10.18.0",
            this.timeDelta = 0,
            this.lastUpdated = 0,
            this.canTrackVelocity = !1,
            this.events = {},
            this.updateAndNotify = (r, o = !0) => {
                this.prev = this.current,
                    this.current = r;
                const { delta: i, timestamp: s } = be;
                this.lastUpdated !== s && (this.timeDelta = i,
                    this.lastUpdated = s,
                    Q.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }
            ,
            this.scheduleVelocityCheck = () => Q.postRender(this.velocityCheck),
            this.velocityCheck = ({ timestamp: r }) => {
                r !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
            }
            ,
            this.hasAnimated = !1,
            this.prev = this.current = t,
            this.canTrackVelocity = GP(this.current),
            this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new td);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
                Q.read(() => {
                    this.events.change.getSize() || this.stop()
                }
                )
        }
            : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
            this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            this.prev = t,
            this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
            this.prev = t,
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? ly(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
            new Promise(n => {
                this.hasAnimated = !0,
                    this.animation = t(n),
                    this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
            }
            )
    }
    stop() {
        this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Vr(e, t) {
    return new KP(e, t)
}
const hy = e => t => t.test(e)
    , YP = {
        test: e => e === "auto",
        parse: e => e
    }
    , my = [Zn, I, Pt, Gt, tE, eE, YP]
    , ro = e => my.find(hy(e))
    , XP = [...my, Re, gn]
    , QP = e => XP.find(hy(e));
function qP(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Vr(n))
}
function ZP(e, t) {
    const n = ua(e, t);
    let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const a = mE(i[s]);
        qP(e, s, a)
    }
}
function JP(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(a => !e.hasValue(a))
        , s = i.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = i[a]
                , u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
                c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]),
                c != null && (typeof c == "string" && (py(c) || fy(c)) ? c = parseFloat(c) : !QP(c) && gn.test(u) && (c = dy(l, u)),
                    e.addValue(l, Vr(c, {
                        owner: e
                    })),
                    n[l] === void 0 && (n[l] = c),
                    c !== null && e.setBaseTarget(l, c))
        }
}
function eb(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function tb(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = eb(o, t);
        if (i !== void 0)
            r[o] = i;
        else {
            const s = n.getValue(o);
            s && (r[o] = s.get())
        }
    }
    return r
}
function nb({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
        r
}
function rb(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function gy(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
    let { transition: i = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (i = r);
    const u = []
        , c = o && e.animationState && e.animationState.getState()[o];
    for (const d in a) {
        const f = e.getValue(d)
            , g = a[d];
        if (!f || g === void 0 || c && nb(c, d))
            continue;
        const w = {
            delay: n,
            elapsed: 0,
            ...qc(i || {}, d)
        };
        if (window.HandoffAppearAnimations) {
            const x = e.getProps()[vv];
            if (x) {
                const h = window.HandoffAppearAnimations(x, d, f, Q);
                h !== null && (w.elapsed = h,
                    w.isHandoff = !0)
            }
        }
        let y = !w.isHandoff && !rb(f, g);
        if (w.type === "spring" && (f.getVelocity() || w.velocity) && (y = !1),
            f.animation && (y = !1),
            y)
            continue;
        f.start(Zc(d, f, g, e.shouldReduceMotion && qn.has(d) ? {
            type: !1
        } : w));
        const S = f.animation;
        js(l) && (l.add(d),
            S.then(() => l.remove(d))),
            u.push(S)
    }
    return s && Promise.all(u).then(() => {
        s && ZP(e, s)
    }
    ),
        u
}
function Cu(e, t, n = {}) {
    const r = ua(e, t, n.custom);
    let { transition: o = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(gy(e, r, n)) : () => Promise.resolve()
        , s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
            return ob(e, t, u + l, c, d, n)
        }
            : () => Promise.resolve()
        , { when: a } = o;
    if (a) {
        const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
        return l().then(() => u())
    } else
        return Promise.all([i(), s(n.delay)])
}
function ob(e, t, n = 0, r = 0, o = 1, i) {
    const s = []
        , a = (e.variantChildren.size - 1) * r
        , l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(ib).forEach((u, c) => {
        u.notify("AnimationStart", t),
            s.push(Cu(u, t, {
                ...i,
                delay: n + l(c)
            }).then(() => u.notify("AnimationComplete", t)))
    }
    ),
        Promise.all(s)
}
function ib(e, t) {
    return e.sortNodePosition(t)
}
function sb(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => Cu(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = Cu(e, t, n);
    else {
        const o = typeof t == "function" ? ua(e, t, n.custom) : t;
        r = Promise.all(gy(e, o, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const ab = [...Ic].reverse()
    , lb = Ic.length;
function ub(e) {
    return t => Promise.all(t.map(({ animation: n, options: r }) => sb(e, n, r)))
}
function cb(e) {
    let t = ub(e);
    const n = fb();
    let r = !0;
    const o = (l, u) => {
        const c = ua(e, u);
        if (c) {
            const { transition: d, transitionEnd: f, ...g } = c;
            l = {
                ...l,
                ...g,
                ...f
            }
        }
        return l
    }
        ;
    function i(l) {
        t = l(e)
    }
    function s(l, u) {
        const c = e.getProps()
            , d = e.getVariantContext(!0) || {}
            , f = []
            , g = new Set;
        let w = {}
            , y = 1 / 0;
        for (let x = 0; x < lb; x++) {
            const h = ab[x]
                , v = n[h]
                , C = c[h] !== void 0 ? c[h] : d[h]
                , T = Ho(C)
                , P = h === u ? v.isActive : null;
            P === !1 && (y = x);
            let E = C === d[h] && C !== c[h] && T;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
                v.protectedKeys = {
                    ...w
                },
                !v.isActive && P === null || !C && !v.prevProp || ia(C) || typeof C == "boolean")
                continue;
            let A = db(v.prevProp, C) || h === u && v.isActive && !E && T || x > y && T
                , R = !1;
            const H = Array.isArray(C) ? C : [C];
            let O = H.reduce(o, {});
            P === !1 && (O = {});
            const { prevResolvedValues: oe = {} } = v
                , M = {
                    ...oe,
                    ...O
                }
                , ee = U => {
                    A = !0,
                        g.has(U) && (R = !0,
                            g.delete(U)),
                        v.needsAnimating[U] = !0
                }
                ;
            for (const U in M) {
                const de = O[U]
                    , k = oe[U];
                if (w.hasOwnProperty(U))
                    continue;
                let D = !1;
                bs(de) && bs(k) ? D = !Fv(de, k) : D = de !== k,
                    D ? de !== void 0 ? ee(U) : g.add(U) : de !== void 0 && g.has(U) ? ee(U) : v.protectedKeys[U] = !0
            }
            v.prevProp = C,
                v.prevResolvedValues = O,
                v.isActive && (w = {
                    ...w,
                    ...O
                }),
                r && e.blockInitialAnimation && (A = !1),
                A && (!E || R) && f.push(...H.map(U => ({
                    animation: U,
                    options: {
                        type: h,
                        ...l
                    }
                })))
        }
        if (g.size) {
            const x = {};
            g.forEach(h => {
                const v = e.getBaseTarget(h);
                v !== void 0 && (x[h] = v)
            }
            ),
                f.push({
                    animation: x
                })
        }
        let S = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (S = !1),
            r = !1,
            S ? t(f) : Promise.resolve()
    }
    function a(l, u, c) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(g => {
            var w;
            return (w = g.animationState) === null || w === void 0 ? void 0 : w.setActive(l, u)
        }
        ),
            n[l].isActive = u;
        const f = s(c, l);
        for (const g in n)
            n[g].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n
    }
}
function db(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Fv(t, e) : !1
}
function En(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function fb() {
    return {
        animate: En(!0),
        whileInView: En(),
        whileHover: En(),
        whileTap: En(),
        whileDrag: En(),
        whileFocus: En(),
        exit: En()
    }
}
class pb extends Sn {
    constructor(t) {
        super(t),
            t.animationState || (t.animationState = cb(t))
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        this.unmount(),
            ia(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: t } = this.node.getProps()
            , { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() { }
}
let hb = 0;
class mb extends Sn {
    constructor() {
        super(...arguments),
            this.id = hb++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext
            , { isPresent: o } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o)
            return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() { }
}
const gb = {
    animation: {
        Feature: pb
    },
    exit: {
        Feature: mb
    }
}
    , np = (e, t) => Math.abs(e - t);
function vb(e, t) {
    const n = np(e.x, t.x)
        , r = np(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class vy {
    constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
        if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const d = Za(this.lastMoveEventInfo, this.history)
                    , f = this.startEvent !== null
                    , g = vb(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !g)
                    return;
                const { point: w } = d
                    , { timestamp: y } = be;
                this.history.push({
                    ...w,
                    timestamp: y
                });
                const { onStart: S, onMove: x } = this.handlers;
                f || (S && S(this.lastMoveEvent, d),
                    this.startEvent = this.lastMoveEvent),
                    x && x(this.lastMoveEvent, d)
            }
            ,
            this.handlePointerMove = (d, f) => {
                this.lastMoveEvent = d,
                    this.lastMoveEventInfo = qa(f, this.transformPagePoint),
                    Q.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (d, f) => {
                this.end();
                const { onEnd: g, onSessionEnd: w, resumeAnimation: y } = this.handlers;
                if (this.dragSnapToOrigin && y && y(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const S = Za(d.type === "pointercancel" ? this.lastMoveEventInfo : qa(f, this.transformPagePoint), this.history);
                this.startEvent && g && g(d, S),
                    w && w(d, S)
            }
            ,
            !Lv(t))
            return;
        this.dragSnapToOrigin = i,
            this.handlers = n,
            this.transformPagePoint = r,
            this.contextWindow = o || window;
        const s = la(t)
            , a = qa(s, this.transformPagePoint)
            , { point: l } = a
            , { timestamp: u } = be;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const { onSessionStart: c } = n;
        c && c(t, Za(a, this.history)),
            this.removeListeners = dn(Dt(this.contextWindow, "pointermove", this.handlePointerMove), Dt(this.contextWindow, "pointerup", this.handlePointerUp), Dt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
            Bt(this.updatePoint)
    }
}
function qa(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function rp(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Za({ point: e }, t) {
    return {
        point: e,
        delta: rp(e, yy(t)),
        offset: rp(e, yb(t)),
        velocity: xb(t, .1)
    }
}
function yb(e) {
    return e[0]
}
function yy(e) {
    return e[e.length - 1]
}
function xb(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
        , r = null;
    const o = yy(e);
    for (; n >= 0 && (r = e[n],
        !(o.timestamp - r.timestamp > fn(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = Lt(o.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0),
        s.y === 1 / 0 && (s.y = 0),
        s
}
function qe(e) {
    return e.max - e.min
}
function Tu(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}
function op(e, t, n, r = .5) {
    e.origin = r,
        e.originPoint = se(t.min, t.max, e.origin),
        e.scale = qe(n) / qe(t),
        (Tu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        e.translate = se(n.min, n.max, e.origin) - e.originPoint,
        (Tu(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Co(e, t, n, r) {
    op(e.x, t.x, n.x, r ? r.originX : void 0),
        op(e.y, t.y, n.y, r ? r.originY : void 0)
}
function ip(e, t, n) {
    e.min = n.min + t.min,
        e.max = e.min + qe(t)
}
function wb(e, t, n) {
    ip(e.x, t.x, n.x),
        ip(e.y, t.y, n.y)
}
function sp(e, t, n) {
    e.min = t.min - n.min,
        e.max = e.min + qe(t)
}
function To(e, t, n) {
    sp(e.x, t.x, n.x),
        sp(e.y, t.y, n.y)
}
function Sb(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)),
        e
}
function ap(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function Cb(e, { top: t, left: n, bottom: r, right: o }) {
    return {
        x: ap(e.x, n, o),
        y: ap(e.y, t, r)
    }
}
function lp(e, t) {
    let n = t.min - e.min
        , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function Tb(e, t) {
    return {
        x: lp(e.x, t.x),
        y: lp(e.y, t.y)
    }
}
function Eb(e, t) {
    let n = .5;
    const r = qe(e)
        , o = qe(t);
    return o > r ? n = Ko(t.min, t.max - r, e.min) : r > o && (n = Ko(e.min, e.max - o, t.min)),
        mn(0, 1, n)
}
function Pb(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
}
const Eu = .35;
function bb(e = Eu) {
    return e === !1 ? e = 0 : e === !0 && (e = Eu),
    {
        x: up(e, "left", "right"),
        y: up(e, "top", "bottom")
    }
}
function up(e, t, n) {
    return {
        min: cp(e, t),
        max: cp(e, n)
    }
}
function cp(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const dp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
    , xr = () => ({
        x: dp(),
        y: dp()
    })
    , fp = () => ({
        min: 0,
        max: 0
    })
    , pe = () => ({
        x: fp(),
        y: fp()
    });
function tt(e) {
    return [e("x"), e("y")]
}
function xy({ top: e, left: t, right: n, bottom: r }) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function Nb({ x: e, y: t }) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function kb(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
        , r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Ja(e) {
    return e === void 0 || e === 1
}
function Pu({ scale: e, scaleX: t, scaleY: n }) {
    return !Ja(e) || !Ja(t) || !Ja(n)
}
function Nn(e) {
    return Pu(e) || wy(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function wy(e) {
    return pp(e.x) || pp(e.y)
}
function pp(e) {
    return e && e !== "0%"
}
function Rs(e, t, n) {
    const r = e - n
        , o = t * r;
    return n + o
}
function hp(e, t, n, r, o) {
    return o !== void 0 && (e = Rs(e, o, r)),
        Rs(e, n, r) + t
}
function bu(e, t = 0, n = 1, r, o) {
    e.min = hp(e.min, t, n, r, o),
        e.max = hp(e.max, t, n, r, o)
}
function Sy(e, { x: t, y: n }) {
    bu(e.x, t.translate, t.scale, t.originPoint),
        bu(e.y, n.translate, n.scale, n.originPoint)
}
function Ab(e, t, n, r = !1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
        i = n[a],
            s = i.projectionDelta;
        const l = i.instance;
        l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && wr(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
            s && (t.x *= s.x.scale,
                t.y *= s.y.scale,
                Sy(e, s)),
            r && Nn(i.latestValues) && wr(e, i.latestValues))
    }
    t.x = mp(t.x),
        t.y = mp(t.y)
}
function mp(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Qt(e, t) {
    e.min = e.min + t,
        e.max = e.max + t
}
function gp(e, t, [n, r, o]) {
    const i = t[o] !== void 0 ? t[o] : .5
        , s = se(e.min, e.max, i);
    bu(e, t[n], t[r], s, t.scale)
}
const jb = ["x", "scaleX", "originX"]
    , Rb = ["y", "scaleY", "originY"];
function wr(e, t) {
    gp(e.x, t, jb),
        gp(e.y, t, Rb)
}
function Cy(e, t) {
    return xy(kb(e.getBoundingClientRect(), t))
}
function Mb(e, t, n) {
    const r = Cy(e, n)
        , { scroll: o } = t;
    return o && (Qt(r.x, o.offset.x),
        Qt(r.y, o.offset.y)),
        r
}
const Ty = ({ current: e }) => e ? e.ownerDocument.defaultView : null
    , Db = new WeakMap;
class Lb {
    constructor(t) {
        this.openGlobalLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = pe(),
            this.visualElement = t
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const o = c => {
            const { dragSnapToOrigin: d } = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
                n && this.snapToCursor(la(c, "page").point)
        }
            , i = (c, d) => {
                const { drag: f, dragPropagation: g, onDragStart: w } = this.getProps();
                if (f && !g && (this.openGlobalLock && this.openGlobalLock(),
                    this.openGlobalLock = Iv(f),
                    !this.openGlobalLock))
                    return;
                this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                    tt(S => {
                        let x = this.getAxisMotionValue(S).get() || 0;
                        if (Pt.test(x)) {
                            const { projection: h } = this.visualElement;
                            if (h && h.layout) {
                                const v = h.layout.layoutBox[S];
                                v && (x = qe(v) * (parseFloat(x) / 100))
                            }
                        }
                        this.originPoint[S] = x
                    }
                    ),
                    w && Q.update(() => w(c, d), !1, !0);
                const { animationState: y } = this.visualElement;
                y && y.setActive("whileDrag", !0)
            }
            , s = (c, d) => {
                const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: w, onDrag: y } = this.getProps();
                if (!f && !this.openGlobalLock)
                    return;
                const { offset: S } = d;
                if (g && this.currentDirection === null) {
                    this.currentDirection = Ob(S),
                        this.currentDirection !== null && w && w(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, S),
                    this.updateAxis("y", d.point, S),
                    this.visualElement.render(),
                    y && y(c, d)
            }
            , a = (c, d) => this.stop(c, d)
            , l = () => tt(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }
            )
            , { dragSnapToOrigin: u } = this.getProps();
        this.panSession = new vy(t, {
            onSessionStart: o,
            onStart: i,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Ty(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
            !r)
            return;
        const { velocity: o } = n;
        this.startAnimation(o);
        const { onDragEnd: i } = this.getProps();
        i && Q.update(() => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
        const { dragPropagation: r } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
            this.openGlobalLock = null),
            n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const { drag: o } = this.getProps();
        if (!r || !ji(t, o, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = Sb(s, this.constraints[t], this.elastic[t])),
            i.set(s)
    }
    resolveConstraints() {
        var t;
        const { dragConstraints: n, dragElastic: r } = this.getProps()
            , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
            , i = this.constraints;
        n && vr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = Cb(o.layoutBox, n) : this.constraints = !1,
            this.elastic = bb(r),
            i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && tt(s => {
                this.getAxisMotionValue(s) && (this.constraints[s] = Pb(o.layoutBox[s], this.constraints[s]))
            }
            )
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !vr(t))
            return !1;
        const r = t.current
            , { projection: o } = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const i = Mb(r, o.root, this.visualElement.getTransformPagePoint());
        let s = Tb(o.layout.layoutBox, i);
        if (n) {
            const a = n(Nb(s));
            this.hasMutatedConstraints = !!a,
                a && (s = xy(a))
        }
        return s
    }
    startAnimation(t) {
        const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps()
            , l = this.constraints || {}
            , u = tt(c => {
                if (!ji(c, n, this.currentDirection))
                    return;
                let d = l && l[c] || {};
                s && (d = {
                    min: 0,
                    max: 0
                });
                const f = o ? 200 : 1e6
                    , g = o ? 40 : 1e7
                    , w = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: f,
                        bounceDamping: g,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...d
                    };
                return this.startAxisValueAnimation(c, w)
            }
            );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Zc(t, r, 0, n))
    }
    stopAnimation() {
        tt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        tt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
            , r = this.visualElement.getProps()
            , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        tt(n => {
            const { drag: r } = this.getProps();
            if (!ji(n, r, this.currentDirection))
                return;
            const { projection: o } = this.visualElement
                , i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const { min: s, max: a } = o.layout.layoutBox[n];
                i.set(t[n] - se(s, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag: t, dragConstraints: n } = this.getProps()
            , { projection: r } = this.visualElement;
        if (!vr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        tt(s => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                o[s] = Eb({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const { transformTemplate: i } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            tt(s => {
                if (!ji(s, t, null))
                    return;
                const a = this.getAxisMotionValue(s)
                    , { min: l, max: u } = this.constraints[s];
                a.set(se(l, u, o[s]))
            }
            )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Db.set(this.visualElement, this);
        const t = this.visualElement.current
            , n = Dt(t, "pointerdown", l => {
                const { drag: u, dragListener: c = !0 } = this.getProps();
                u && c && this.start(l)
            }
            )
            , r = () => {
                const { dragConstraints: l } = this.getProps();
                vr(l) && (this.constraints = this.resolveRefConstraints())
            }
            , { projection: o } = this.visualElement
            , i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(),
            o.updateLayout()),
            r();
        const s = Rt(window, "resize", () => this.scalePositionWithinConstraints())
            , a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
                this.isDragging && u && (tt(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate,
                        d.set(d.get() + l[c].translate))
                }
                ),
                    this.visualElement.render())
            }
            );
        return () => {
            s(),
                n(),
                i(),
                a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
            , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Eu, dragMomentum: a = !0 } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function ji(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Ob(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
        n
}
class Ib extends Sn {
    constructor(t) {
        super(t),
            this.removeGroupControls = ce,
            this.removeListeners = ce,
            this.controls = new Lb(t)
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || ce
    }
    unmount() {
        this.removeGroupControls(),
            this.removeListeners()
    }
}
const vp = e => (t, n) => {
    e && Q.update(() => e(t, n))
}
    ;
class _b extends Sn {
    constructor() {
        super(...arguments),
            this.removePointerDownListener = ce
    }
    onPointerDown(t) {
        this.session = new vy(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Ty(this.node)
        })
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
        return {
            onSessionStart: vp(t),
            onStart: vp(n),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session,
                    o && Q.update(() => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Dt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
            this.session && this.session.end()
    }
}
function Vb() {
    const e = m.useContext(ra);
    if (e === null)
        return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e
        , o = m.useId();
    return m.useEffect(() => r(o), []),
        !t && n ? [!1, () => n && n(o)] : [!0]
}
const Xi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function yp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const oo = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (I.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = yp(e, t.target.x)
            , r = yp(e, t.target.y);
        return `${n}% ${r}%`
    }
}
    , Fb = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e
                , o = gn.parse(e);
            if (o.length > 5)
                return r;
            const i = gn.createTransformer(e)
                , s = typeof o[0] != "number" ? 1 : 0
                , a = n.x.scale * t.x
                , l = n.y.scale * t.y;
            o[0 + s] /= a,
                o[1 + s] /= l;
            const u = se(a, l, .5);
            return typeof o[2 + s] == "number" && (o[2 + s] /= u),
                typeof o[3 + s] == "number" && (o[3 + s] /= u),
                i(o)
        }
    };
class Bb extends G.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props
            , { projection: i } = t;
        KT(zb),
            i && (n.group && n.group.add(i),
                r && r.register && o && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
            Xi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props
            , s = r.projection;
        return s && (s.isPresent = i,
            o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
            t.isPresent !== i && (i ? s.promote() : s.relegate() || Q.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove()
            }
            ))),
            null
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t && (t.root.didUpdate(),
            queueMicrotask(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
            , { projection: o } = t;
        o && (o.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(o),
            r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Ey(e) {
    const [t, n] = Vb()
        , r = m.useContext(Vc);
    return G.createElement(Bb, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: m.useContext(xv),
        isPresent: t,
        safeToRemove: n
    })
}
const zb = {
    borderRadius: {
        ...oo,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: oo,
    borderTopRightRadius: oo,
    borderBottomLeftRadius: oo,
    borderBottomRightRadius: oo,
    boxShadow: Fb
}
    , Py = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
    , Ub = Py.length
    , xp = e => typeof e == "string" ? parseFloat(e) : e
    , wp = e => typeof e == "number" || I.test(e);
function $b(e, t, n, r, o, i) {
    o ? (e.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, Wb(r)),
        e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, Hb(r))) : i && (e.opacity = se(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < Ub; s++) {
        const a = `border${Py[s]}Radius`;
        let l = Sp(t, a)
            , u = Sp(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
            u || (u = 0),
            l === 0 || u === 0 || wp(l) === wp(u) ? (e[a] = Math.max(se(xp(l), xp(u), r), 0),
                (Pt.test(u) || Pt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r))
}
function Sp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Wb = by(0, .5, Yv)
    , Hb = by(.5, .95, ce);
function by(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Ko(e, t, r))
}
function Cp(e, t) {
    e.min = t.min,
        e.max = t.max
}
function et(e, t) {
    Cp(e.x, t.x),
        Cp(e.y, t.y)
}
function Tp(e, t, n, r, o) {
    return e -= t,
        e = Rs(e, 1 / n, r),
        o !== void 0 && (e = Rs(e, 1 / o, r)),
        e
}
function Gb(e, t = 0, n = 1, r = .5, o, i = e, s = e) {
    if (Pt.test(t) && (t = parseFloat(t),
        t = se(s.min, s.max, t / 100) - s.min),
        typeof t != "number")
        return;
    let a = se(i.min, i.max, r);
    e === i && (a -= t),
        e.min = Tp(e.min, t, n, a, o),
        e.max = Tp(e.max, t, n, a, o)
}
function Ep(e, t, [n, r, o], i, s) {
    Gb(e, t[n], t[r], t[o], t.scale, i, s)
}
const Kb = ["x", "scaleX", "originX"]
    , Yb = ["y", "scaleY", "originY"];
function Pp(e, t, n, r) {
    Ep(e.x, t, Kb, n ? n.x : void 0, r ? r.x : void 0),
        Ep(e.y, t, Yb, n ? n.y : void 0, r ? r.y : void 0)
}
function bp(e) {
    return e.translate === 0 && e.scale === 1
}
function Ny(e) {
    return bp(e.x) && bp(e.y)
}
function Xb(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function ky(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function Np(e) {
    return qe(e.x) / qe(e.y)
}
class Qb {
    constructor() {
        this.members = []
    }
    add(t) {
        Jc(this.members, t),
            t.scheduleRender()
    }
    remove(t) {
        if (ed(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
            !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
            this.lead = t,
            t.show(),
            r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: o } = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function kp(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
        , i = e.y.translate / t.y;
    if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n) {
        const { rotate: l, rotateX: u, rotateY: c } = n;
        l && (r += `rotate(${l}deg) `),
            u && (r += `rotateX(${u}deg) `),
            c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x
        , a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`),
        r || "none"
}
const qb = (e, t) => e.depth - t.depth;
class Zb {
    constructor() {
        this.children = [],
            this.isDirty = !1
    }
    add(t) {
        Jc(this.children, t),
            this.isDirty = !0
    }
    remove(t) {
        ed(this.children, t),
            this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(qb),
            this.isDirty = !1,
            this.children.forEach(t)
    }
}
function Jb(e, t) {
    const n = performance.now()
        , r = ({ timestamp: o }) => {
            const i = o - n;
            i >= t && (Bt(r),
                e(i - t))
        }
        ;
    return Q.read(r, !0),
        () => Bt(r)
}
function eN(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function tN(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function nN(e, t, n) {
    const r = $e(e) ? e : Vr(e);
    return r.start(Zc("", r, t, n)),
        r.animation
}
const Ap = ["", "X", "Y", "Z"]
    , rN = {
        visibility: "hidden"
    }
    , jp = 1e3;
let oN = 0;
const kn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Ay({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = oN++,
                this.animationId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.updateScheduled = !1,
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                        kn.totalNodes = kn.resolvedTargetDeltas = kn.recalculatedProjection = 0,
                        this.nodes.forEach(aN),
                        this.nodes.forEach(fN),
                        this.nodes.forEach(pN),
                        this.nodes.forEach(lN),
                        eN(kn)
                }
                ,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = s,
                this.root = a ? a.root || a : this,
                this.path = a ? [...a.path, a] : [],
                this.parent = a,
                this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Zb)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new td),
                this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = tN(s),
                this.instance = s;
            const { layoutId: l, layout: u, visualElement: c } = this.options;
            if (c && !c.current && c.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                a && (u || l) && (this.isLayoutDirty = !0),
                e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                        d && d(),
                        d = Jb(f, 250),
                        Xi.hasAnimatedSinceResize && (Xi.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(Mp))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
                this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: w }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                            this.relativeTarget = void 0;
                        return
                    }
                    const y = this.options.transition || c.getDefaultTransition() || yN
                        , { onLayoutAnimationStart: S, onLayoutAnimationComplete: x } = c.getProps()
                        , h = !this.targetLayout || !ky(this.targetLayout, w) || g
                        , v = !f && g;
                    if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(d, v);
                        const C = {
                            ...qc(y, "layout"),
                            onPlay: S,
                            onComplete: x
                        };
                        (c.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0,
                            C.type = !1),
                            this.startAnimation(C)
                    } else
                        f || Mp(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = w
                }
                )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                Bt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(hN),
                this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                    d.updateScroll("snapshot"),
                    d.options.layoutRoot && d.willUpdate(!1)
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(Rp);
                return
            }
            this.isUpdating || this.nodes.forEach(cN),
                this.isUpdating = !1,
                this.nodes.forEach(dN),
                this.nodes.forEach(iN),
                this.nodes.forEach(sN),
                this.clearAllSnapshots();
            const a = performance.now();
            be.delta = mn(0, 1e3 / 60, a - be.timestamp),
                be.timestamp = a,
                be.isProcessing = !0,
                $a.update.process(be),
                $a.preRender.process(be),
                $a.render.process(be),
                be.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
                queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(uN),
                this.sharedNodes.forEach(mN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                Q.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Q.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
                this.layoutCorrected = pe(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
                a && (this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: r(this.instance),
                    offset: n(this.instance)
                })
        }
        resetTransform() {
            if (!o)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
                , a = this.projectionDelta && !Ny(this.projectionDelta)
                , l = this.getTransformTemplate()
                , u = l ? l(this.latestValues, "") : void 0
                , c = u !== this.prevTransformTemplateValue;
            s && (a || Nn(this.latestValues) || c) && (o(this.instance, u),
                this.shouldResetTransform = !1,
                this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
                xN(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const { visualElement: s } = this.options;
            if (!s)
                return pe();
            const a = s.measureViewportBox()
                , { scroll: l } = this.root;
            return l && (Qt(a.x, l.offset.x),
                Qt(a.y, l.offset.y)),
                a
        }
        removeElementScroll(s) {
            const a = pe();
            et(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l]
                    , { scroll: c, options: d } = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        et(a, s);
                        const { scroll: f } = this.root;
                        f && (Qt(a.x, -f.offset.x),
                            Qt(a.y, -f.offset.y))
                    }
                    Qt(a.x, c.offset.x),
                        Qt(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a = !1) {
            const l = pe();
            et(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && wr(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                    Nn(c.latestValues) && wr(l, c.latestValues)
            }
            return Nn(this.latestValues) && wr(l, this.latestValues),
                l
        }
        removeTransform(s) {
            const a = pe();
            et(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Nn(u.latestValues))
                    continue;
                Pu(u.latestValues) && u.updateSnapshot();
                const c = pe()
                    , d = u.measurePageBox();
                et(c, d),
                    Pp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Nn(this.latestValues) && Pp(a, this.latestValues),
                a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== be.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const { layout: d, layoutId: f } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = be.timestamp,
                    !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = pe(),
                        this.relativeTargetOrigin = pe(),
                        To(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                        et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = pe(),
                        this.targetWithTransforms = pe()),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                            wb(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : et(this.target, this.layout.layoutBox),
                                Sy(this.target, this.targetDelta)) : et(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = pe(),
                            this.relativeTargetOrigin = pe(),
                            To(this.relativeTargetOrigin, this.target, g.target),
                            et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    kn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Pu(this.parent.latestValues) || wy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead()
                , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
                l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
                this.resolvedRelativeTargetAt === be.timestamp && (u = !1),
                u)
                return;
            const { layout: c, layoutId: d } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(c || d))
                return;
            et(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
                , g = this.treeScale.y;
            Ab(this.layoutCorrected, this.treeScale, this.path, l),
                a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const { target: w } = a;
            if (!w) {
                this.projectionTransform && (this.projectionDelta = xr(),
                    this.projectionTransform = "none",
                    this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = xr(),
                this.projectionDeltaWithTransform = xr());
            const y = this.projectionTransform;
            Co(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
                this.projectionTransform = kp(this.projectionDelta, this.treeScale),
                (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== g) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", w)),
                kn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
                s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot
                , u = l ? l.latestValues : {}
                , c = {
                    ...this.latestValues
                }
                , d = xr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !a;
            const f = pe()
                , g = l ? l.source : void 0
                , w = this.layout ? this.layout.source : void 0
                , y = g !== w
                , S = this.getStack()
                , x = !S || S.members.length <= 1
                , h = !!(y && !x && this.options.crossfade === !0 && !this.path.some(vN));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = C => {
                const T = C / 1e3;
                Dp(d.x, s.x, T),
                    Dp(d.y, s.y, T),
                    this.setTargetDelta(d),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (To(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        gN(this.relativeTarget, this.relativeTargetOrigin, f, T),
                        v && Xb(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                        v || (v = pe()),
                        et(v, this.relativeTarget)),
                    y && (this.animationValues = c,
                        $b(c, u, this.latestValues, T, h, x)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = T
            }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (Bt(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                this.pendingAnimation = Q.update(() => {
                    Xi.hasAnimatedSinceResize = !0,
                        this.currentAnimation = nN(0, jp, {
                            ...s,
                            onUpdate: a => {
                                this.mixTargetDelta(a),
                                    s.onUpdate && s.onUpdate(a)
                            }
                            ,
                            onComplete: () => {
                                s.onComplete && s.onComplete(),
                                    this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                }
                )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(jp),
                this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && jy(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || pe();
                    const d = qe(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                        l.x.max = l.x.min + d;
                    const f = qe(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                        l.y.max = l.y.min + f
                }
                et(a, l),
                    wr(a, c),
                    Co(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Qb),
                this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l),
                s && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                a && this.setOptions({
                    transition: a
                })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const { visualElement: s } = this.options;
            if (!s)
                return;
            let a = !1;
            const { latestValues: l } = s;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
                !a)
                return;
            const u = {};
            for (let c = 0; c < Ap.length; c++) {
                const d = "rotate" + Ap[c];
                l[d] && (u[d] = l[d],
                    s.setStaticValue(d, 0))
            }
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return rN;
            const u = {
                visibility: ""
            }
                , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                    u.opacity = "",
                    u.pointerEvents = Yi(s == null ? void 0 : s.pointerEvents) || "",
                    u.transform = c ? c(this.latestValues, "") : "none",
                    u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                    y.pointerEvents = Yi(s == null ? void 0 : s.pointerEvents) || ""),
                    this.hasProjected && !Nn(this.latestValues) && (y.transform = c ? c({}, "") : "none",
                        this.hasProjected = !1),
                    y
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
                u.transform = kp(this.projectionDeltaWithTransform, this.treeScale, f),
                c && (u.transform = c(f, u.transform));
            const { x: g, y: w } = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`,
                d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const y in Es) {
                if (f[y] === void 0)
                    continue;
                const { correct: S, applyTo: x } = Es[y]
                    , h = u.transform === "none" ? f[y] : S(f[y], d);
                if (x) {
                    const v = x.length;
                    for (let C = 0; C < v; C++)
                        u[x[C]] = h
                } else
                    u[y] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Yi(s == null ? void 0 : s.pointerEvents) || "" : "none"),
                u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
                this.root.nodes.forEach(Rp),
                this.root.sharedNodes.clear()
        }
    }
}
function iN(e) {
    e.updateLayout()
}
function sN(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: o } = e.layout
            , { animationType: i } = e.options
            , s = n.source !== e.layout.source;
        i === "size" ? tt(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
                , g = qe(f);
            f.min = r[d].min,
                f.max = f.min + g
        }
        ) : jy(i, n.layoutBox, r) && tt(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
                , g = qe(r[d]);
            f.max = f.min + g,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[d].max = e.relativeTarget[d].min + g)
        }
        );
        const a = xr();
        Co(a, r, n.layoutBox);
        const l = xr();
        s ? Co(l, e.applyTransform(o, !0), n.measuredBox) : Co(l, r, n.layoutBox);
        const u = !Ny(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const { snapshot: f, layout: g } = d;
                if (f && g) {
                    const w = pe();
                    To(w, n.layoutBox, f.layoutBox);
                    const y = pe();
                    To(y, r, g.layoutBox),
                        ky(w, y) || (c = !0),
                        d.options.layoutRoot && (e.relativeTarget = y,
                            e.relativeTargetOrigin = w,
                            e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function aN(e) {
    kn.totalNodes++,
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function lN(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function uN(e) {
    e.clearSnapshot()
}
function Rp(e) {
    e.clearMeasurements()
}
function cN(e) {
    e.isLayoutDirty = !1
}
function dN(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
}
function Mp(e) {
    e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0,
        e.isProjectionDirty = !0
}
function fN(e) {
    e.resolveTargetDelta()
}
function pN(e) {
    e.calcProjection()
}
function hN(e) {
    e.resetRotation()
}
function mN(e) {
    e.removeLeadSnapshot()
}
function Dp(e, t, n) {
    e.translate = se(t.translate, 0, n),
        e.scale = se(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
}
function Lp(e, t, n, r) {
    e.min = se(t.min, n.min, r),
        e.max = se(t.max, n.max, r)
}
function gN(e, t, n, r) {
    Lp(e.x, t.x, n.x, r),
        Lp(e.y, t.y, n.y, r)
}
function vN(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const yN = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
    , Op = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
    , Ip = Op("applewebkit/") && !Op("chrome/") ? Math.round : ce;
function _p(e) {
    e.min = Ip(e.min),
        e.max = Ip(e.max)
}
function xN(e) {
    _p(e.x),
        _p(e.y)
}
function jy(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Tu(Np(t), Np(n), .2)
}
const wN = Ay({
    attachResizeListener: (e, t) => Rt(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
    , el = {
        current: void 0
    }
    , Ry = Ay({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!el.current) {
                const e = new wN({});
                e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    el.current = e
            }
            return el.current
        }
        ,
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        }
        ,
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    })
    , SN = {
        pan: {
            Feature: _b
        },
        drag: {
            Feature: Ib,
            ProjectionNode: Ry,
            MeasureLayout: Ey
        }
    }
    , CN = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function TN(e) {
    const t = CN.exec(e);
    if (!t)
        return [,];
    const [, n, r] = t;
    return [n, r]
}
function Nu(e, t, n = 1) {
    const [r, o] = TN(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return py(s) ? parseFloat(s) : s
    } else
        return gu(o) ? Nu(o, t, n + 1) : o
}
function EN(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
        e.values.forEach(o => {
            const i = o.get();
            if (!gu(i))
                return;
            const s = Nu(i, r);
            s && o.set(s)
        }
        );
    for (const o in t) {
        const i = t[o];
        if (!gu(i))
            continue;
        const s = Nu(i, r);
        s && (t[o] = s,
            n || (n = {}),
            n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const PN = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
    , My = e => PN.has(e)
    , bN = e => Object.keys(e).some(My)
    , Vp = e => e === Zn || e === I
    , Fp = (e, t) => parseFloat(e.split(", ")[t])
    , Bp = (e, t) => (n, { transform: r }) => {
        if (r === "none" || !r)
            return 0;
        const o = r.match(/^matrix3d\((.+)\)$/);
        if (o)
            return Fp(o[1], t);
        {
            const i = r.match(/^matrix\((.+)\)$/);
            return i ? Fp(i[1], e) : 0
        }
    }
    , NN = new Set(["x", "y", "z"])
    , kN = ni.filter(e => !NN.has(e));
function AN(e) {
    const t = [];
    return kN.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
            r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
        t.length && e.render(),
        t
}
const Fr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Bp(4, 13),
    y: Bp(5, 14)
};
Fr.translateX = Fr.x;
Fr.translateY = Fr.y;
const jN = (e, t, n) => {
    const r = t.measureViewportBox()
        , o = t.current
        , i = getComputedStyle(o)
        , { display: s } = i
        , a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
        n.forEach(u => {
            a[u] = Fr[u](r, i)
        }
        ),
        t.render();
    const l = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        c && c.jump(a[u]),
            e[u] = Fr[u](l, i)
    }
    ),
        e
}
    , RN = (e, t, n = {}, r = {}) => {
        t = {
            ...t
        },
            r = {
                ...r
            };
        const o = Object.keys(t).filter(My);
        let i = []
            , s = !1;
        const a = [];
        if (o.forEach(l => {
            const u = e.getValue(l);
            if (!e.hasValue(l))
                return;
            let c = n[l]
                , d = ro(c);
            const f = t[l];
            let g;
            if (bs(f)) {
                const w = f.length
                    , y = f[0] === null ? 1 : 0;
                c = f[y],
                    d = ro(c);
                for (let S = y; S < w && f[S] !== null; S++)
                    g ? Gc(ro(f[S]) === g) : g = ro(f[S])
            } else
                g = ro(f);
            if (d !== g)
                if (Vp(d) && Vp(g)) {
                    const w = u.get();
                    typeof w == "string" && u.set(parseFloat(w)),
                        typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && g === I && (t[l] = f.map(parseFloat))
                } else
                    d != null && d.transform && (g != null && g.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(g.transform(c)) : t[l] = d.transform(f) : (s || (i = AN(e),
                        s = !0),
                        a.push(l),
                        r[l] = r[l] !== void 0 ? r[l] : t[l],
                        u.jump(f))
        }
        ),
            a.length) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
                , u = jN(t, e, a);
            return i.length && i.forEach(([c, d]) => {
                e.getValue(c).set(d)
            }
            ),
                e.render(),
                oa && l !== null && window.scrollTo({
                    top: l
                }),
            {
                target: u,
                transitionEnd: r
            }
        } else
            return {
                target: t,
                transitionEnd: r
            }
    }
    ;
function MN(e, t, n, r) {
    return bN(t) ? RN(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const DN = (e, t, n, r) => {
    const o = EN(e, t, r);
    return t = o.target,
        r = o.transitionEnd,
        MN(e, t, n, r)
}
    , ku = {
        current: null
    }
    , Dy = {
        current: !1
    };
function LN() {
    if (Dy.current = !0,
        !!oa)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
                , t = () => ku.current = e.matches;
            e.addListener(t),
                t()
        } else
            ku.current = !1
}
function ON(e, t, n) {
    const { willChange: r } = t;
    for (const o in t) {
        const i = t[o]
            , s = n[o];
        if ($e(i))
            e.addValue(o, i),
                js(r) && r.add(o);
        else if ($e(s))
            e.addValue(o, Vr(i, {
                owner: e
            })),
                js(r) && r.remove(o);
        else if (s !== i)
            if (e.hasValue(o)) {
                const a = e.getValue(o);
                !a.hasAnimated && a.set(i)
            } else {
                const a = e.getStaticValue(o);
                e.addValue(o, Vr(a !== void 0 ? a : i, {
                    owner: e
                }))
            }
    }
    for (const o in n)
        t[o] === void 0 && e.removeValue(o);
    return t
}
const zp = new WeakMap
    , Ly = Object.keys(Go)
    , IN = Ly.length
    , Up = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
    , _N = _c.length;
class VN {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, s = {}) {
        this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.scheduleRender = () => Q.render(this.render, !1, !0);
        const { latestValues: a, renderState: l } = i;
        this.latestValues = a,
            this.baseTarget = {
                ...a
            },
            this.initialValues = n.initial ? {
                ...a
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = o,
            this.options = s,
            this.isControllingVariants = sa(n),
            this.isVariantNode = yv(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
        const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const f = c[d];
            a[d] !== void 0 && $e(f) && (f.set(a[d], !1),
                js(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
            zp.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            Dy.current || LN(),
            this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ku.current,
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
    }
    unmount() {
        zp.delete(this.current),
            this.projection && this.projection.unmount(),
            Bt(this.notifyUpdate),
            Bt(this.render),
            this.valueSubscriptions.forEach(t => t()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = qn.has(t)
            , o = n.on("change", s => {
                this.latestValues[t] = s,
                    this.props.onUpdate && Q.update(this.notifyUpdate, !1, !0),
                    r && this.projection && (this.projection.isTransformDirty = !0)
            }
            )
            , i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(),
                i()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({ children: t, ...n }, r, o, i) {
        let s, a;
        for (let l = 0; l < IN; l++) {
            const u = Ly[l]
                , { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: g } = Go[u];
            f && (s = f),
                c(n) && (!this.features[u] && d && (this.features[u] = new d(this)),
                    g && (a = g))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues, this.parent && this.parent.projection);
            const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: g } = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || d && vr(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: g
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
                n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pe()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = n;
        for (let r = 0; r < Up.length; r++) {
            const o = Up[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
                delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = ON(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
                r
        }
        const n = {};
        for (let r = 0; r < _N; r++) {
            const o = _c[r]
                , i = this.props[o];
            (Ho(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
            this.bindToMotionValue(t, n)),
            this.values.set(t, n),
            this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Vr(n, {
            owner: this
        }),
            this.addValue(t, r)),
            r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props
            , o = typeof r == "string" || typeof r == "object" ? (n = Hc(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0)
            return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !$e(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new td),
            this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Oy extends VN {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t],
            delete r[t]
    }
    makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, i) {
        let s = tb(r, t || {}, this);
        if (o && (n && (n = o(n)),
            r && (r = o(r)),
            s && (s = o(s))),
            i) {
            JP(this, r, s);
            const a = DN(this, r, s, n);
            n = a.transitionEnd,
                r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function FN(e) {
    return window.getComputedStyle(e)
}
class BN extends Oy {
    constructor() {
        super(...arguments),
            this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (qn.has(n)) {
            const r = Qc(n);
            return r && r.default || 0
        } else {
            const r = FN(t)
                , o = (Cv(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return Cy(t, n)
    }
    build(t, n, r, o) {
        Bc(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return Wc(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
        const { children: t } = this.props;
        $e(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, o) {
        kv(t, n, r, o)
    }
}
class zN extends Oy {
    constructor() {
        super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (qn.has(n)) {
            const r = Qc(n);
            return r && r.default || 0
        }
        return n = Av.has(n) ? n : Oc(n),
            t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return pe()
    }
    scrapeMotionValuesFromProps(t, n) {
        return Rv(t, n)
    }
    build(t, n, r, o) {
        Uc(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        jv(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = $c(t.tagName),
            super.mount(t)
    }
}
const UN = (e, t) => Fc(e) ? new zN(t, {
    enableHardwareAcceleration: !1
}) : new BN(t, {
    enableHardwareAcceleration: !0
})
    , $N = {
        layout: {
            ProjectionNode: Ry,
            MeasureLayout: Ey
        }
    }
    , WN = {
        ...gb,
        ...IE,
        ...SN,
        ...$N
    }
    , V = HT((e, t) => TE(e, t, WN, UN));
function Iy() {
    const e = m.useRef(!1);
    return Lc(() => (e.current = !0,
        () => {
            e.current = !1
        }
    ), []),
        e
}
function HN() {
    const e = Iy()
        , [t, n] = m.useState(0)
        , r = m.useCallback(() => {
            e.current && n(t + 1)
        }
            , [t]);
    return [m.useCallback(() => Q.postRender(r), [r]), t]
}
class GN extends m.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
                r.width = n.offsetWidth || 0,
                r.top = n.offsetTop,
                r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() { }
    render() {
        return this.props.children
    }
}
function KN({ children: e, isPresent: t }) {
    const n = m.useId()
        , r = m.useRef(null)
        , o = m.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return m.useInsertionEffect(() => {
        const { width: i, height: s, top: a, left: l } = o.current;
        if (t || !r.current || !i || !s)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u),
            u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
            () => {
                document.head.removeChild(u)
            }
    }
        , [t]),
        m.createElement(GN, {
            isPresent: t,
            childRef: r,
            sizeRef: o
        }, m.cloneElement(e, {
            ref: r
        }))
}
const tl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: s }) => {
    const a = Mv(YN)
        , l = m.useId()
        , u = m.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: o,
            onExitComplete: c => {
                a.set(c, !0);
                for (const d of a.values())
                    if (!d)
                        return;
                r && r()
            }
            ,
            register: c => (a.set(c, !1),
                () => a.delete(c))
        }), i ? void 0 : [n]);
    return m.useMemo(() => {
        a.forEach((c, d) => a.set(d, !1))
    }
        , [n]),
        m.useEffect(() => {
            !n && !a.size && r && r()
        }
            , [n]),
        s === "popLayout" && (e = m.createElement(KN, {
            isPresent: n
        }, e)),
        m.createElement(ra.Provider, {
            value: u
        }, e)
}
    ;
function YN() {
    return new Map
}
function XN(e) {
    return m.useEffect(() => () => e(), [])
}
const An = e => e.key || "";
function QN(e, t) {
    e.forEach(n => {
        const r = An(n);
        t.set(r, n)
    }
    )
}
function qN(e) {
    const t = [];
    return m.Children.forEach(e, n => {
        m.isValidElement(n) && t.push(n)
    }
    ),
        t
}
const _y = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: s = "sync" }) => {
    const a = m.useContext(Vc).forceRender || HN()[0]
        , l = Iy()
        , u = qN(e);
    let c = u;
    const d = m.useRef(new Map).current
        , f = m.useRef(c)
        , g = m.useRef(new Map).current
        , w = m.useRef(!0);
    if (Lc(() => {
        w.current = !1,
            QN(u, g),
            f.current = c
    }
    ),
        XN(() => {
            w.current = !0,
                g.clear(),
                d.clear()
        }
        ),
        w.current)
        return m.createElement(m.Fragment, null, c.map(h => m.createElement(tl, {
            key: An(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s
        }, h)));
    c = [...c];
    const y = f.current.map(An)
        , S = u.map(An)
        , x = y.length;
    for (let h = 0; h < x; h++) {
        const v = y[h];
        S.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0)
    }
    return s === "wait" && d.size && (c = []),
        d.forEach((h, v) => {
            if (S.indexOf(v) !== -1)
                return;
            const C = g.get(v);
            if (!C)
                return;
            const T = y.indexOf(v);
            let P = h;
            if (!P) {
                const E = () => {
                    d.delete(v);
                    const b = Array.from(g.keys()).filter(A => !S.includes(A));
                    if (b.forEach(A => g.delete(A)),
                        f.current = u.filter(A => {
                            const R = An(A);
                            return R === v || b.includes(R)
                        }
                        ),
                        !d.size) {
                        if (l.current === !1)
                            return;
                        a(),
                            r && r()
                    }
                }
                    ;
                P = m.createElement(tl, {
                    key: An(C),
                    isPresent: !1,
                    onExitComplete: E,
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: s
                }, C),
                    d.set(v, P)
            }
            c.splice(T, 0, P)
        }
        ),
        c = c.map(h => {
            const v = h.key;
            return d.has(v) ? h : m.createElement(tl, {
                key: An(h),
                isPresent: !0,
                presenceAffectsLayout: i,
                mode: s
            }, h)
        }
        ),
        m.createElement(m.Fragment, null, d.size ? c : c.map(h => m.cloneElement(h)))
}
    , nd = uv("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    })
    , Ut = G.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
        const s = r ? MC : "button";
        return p.jsx(s, {
            className: Ie(nd({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    }
    );
Ut.displayName = "Button";
const ZN = () => {
    const e = wn()
        , t = () => {
            e("/identificacao")
        }
        ;
    return p.jsxs("div", {
        className: "min-h-screen bg-white flex flex-col",
        children: [p.jsx(V.header, {
            className: "text-center py-8 px-6",
            initial: {
                opacity: 0,
                y: -16
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6
            },
            children: p.jsxs("div", {
                className: "flex items-center justify-center mb-6",
                children: [p.jsx("h1", {
                    className: "text-3xl font-black text-black",
                    children: "cupom"
                }), p.jsx("div", {
                    className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                    children: p.jsx("span", {
                        className: "text-black font-bold text-sm",
                        children: "$"
                    })
                }), p.jsx("span", {
                    className: "text-sm font-medium text-gray-600 block leading-tight ml-2",
                    children: "DA VEZ"
                })]
            })
        }), p.jsx(V.section, {
            className: "px-6 flex-1 flex flex-col justify-center",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .1
            },
            children: p.jsxs("div", {
                className: "max-w-md mx-auto w-full text-center space-y-6",
                children: [p.jsxs("div", {
                    className: "space-y-3",
                    children: [p.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Bem-vindo!"
                    }), p.jsx("h3", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: "Que tal fazermos uma renda extra juntos?"
                    })]
                }), p.jsxs(V.p, {
                    className: "text-md font-semibold text-gray-800",
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    children: ["😄 Mais de ", p.jsx("span", {
                        className: "font-bold",
                        children: "3.600 angolanos"
                    }), " já lucraram com o", " ", p.jsx("span", {
                        className: "font-bold",
                        children: "Cupom da Vez!"
                    })]
                }), p.jsx(V.div, {
                    className: "block",
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .25
                    },
                    children: p.jsx("img", {
                        src: "https://i.ibb.co/B5rqssH3/Captura-de-ecra-2025-11-08-a-s-07-35-41.png",
                        alt: "Captura-de-ecra-2025-11-08-a-s-07-35-41",
                        border: "0",
                        className: "rounded-2xl w-full shadow-md mx-auto"
                    })
                }), p.jsx("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: "Descubra o segredo que está ajudando milhares de pessoas a ganhar dinheiro apenas digitando cupons de desconto de produtos famosos."
                }), p.jsxs("div", {
                    className: "space-y-1 text-gray-700",
                    children: [p.jsx("p", {
                        children: "📜 É simples. 💬 É rápido."
                    }), p.jsx("p", {
                        children: "📱 E qualquer pessoa pode fazer — direto do telemóvel!"
                    })]
                }), p.jsxs(V.div, {
                    className: "pt-4",
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .35
                    },
                    children: [p.jsx("p", {
                        className: "font-semibold text-gray-900 mb-3",
                        children: "👉 Quer participar e começar a ganhar também?"
                    }), p.jsx(Ut, {
                        onClick: t,
                        className: "w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-2xl text-lg shadow-lg transition",
                        children: "Começar Agora"
                    })]
                }), p.jsx(V.div, {
                    className: "bg-gray-50 rounded-2xl p-4 mt-6",
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .45
                    },
                    children: p.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [p.jsxs("div", {
                            className: "flex items-center",
                            children: [p.jsx("div", {
                                className: "w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3",
                                children: p.jsx("span", {
                                    className: "text-gray-600 font-bold text-sm",
                                    children: "2"
                                })
                            }), p.jsxs("div", {
                                className: "text-left",
                                children: [p.jsx("h4", {
                                    className: "font-semibold text-gray-700",
                                    children: "Realize seu saque"
                                }), p.jsx("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Aumente seu saldo para realizar seu primeiro saque."
                                })]
                            })]
                        }), p.jsx("span", {
                            className: "text-gray-400 text-lg",
                            children: "→"
                        })]
                    })
                })]
            })
        }), p.jsxs(V.section, {
            className: "px-6 pb-10",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .6
            },
            children: [p.jsxs("div", {
                className: "flex justify-center mb-4 space-x-4",
                children: [p.jsx("div", {
                    className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",
                    children: p.jsx(mu, {
                        className: "w-6 h-6 text-green-600"
                    })
                }), p.jsx("div", {
                    className: "w-12 h-12 bg-red-100 rounded-full flex items-center justify-center",
                    children: p.jsx(jn, {
                        className: "w-6 h-6 text-red-600"
                    })
                }), p.jsx("div", {
                    className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",
                    children: p.jsx(jn, {
                        className: "w-6 h-6 text-green-600"
                    })
                })]
            }), p.jsxs("div", {
                className: "text-center",
                children: [p.jsx("h3", {
                    className: "font-bold text-gray-900 mb-2",
                    children: "Suas informações estão 100% protegidas!"
                }), p.jsx("p", {
                    className: "text-sm text-gray-600 mb-1",
                    children: "Este site é seguro e possui Certificado SSL."
                }), p.jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Sua privacidade é totalmente garantida por nossa política de segurança."
                })]
            })]
        })]
    })
}
    , JN = () => {
        const [e, t] = m.useState("")
            , n = wn()
            , { toast: r } = ta()
            , o = () => {
                if (!e.trim()) {
                    r({
                        title: "Nome obrigatório",
                        description: "Por favor, digite seu nome para continuar.",
                        variant: "destructive"
                    });
                    return
                }
                localStorage.setItem("userName", e.trim()),
                    n("/validacao/1")
            }
            ;
        return p.jsxs("div", {
            className: "min-h-screen bg-white flex flex-col",
            children: [p.jsx(V.div, {
                className: "text-center py-8 px-6",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: p.jsxs("div", {
                    className: "flex items-center justify-center mb-6",
                    children: [p.jsx("h1", {
                        className: "text-3xl font-black text-black",
                        children: "cupom"
                    }), p.jsx("div", {
                        className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                        children: p.jsx("span", {
                            className: "text-black font-bold text-sm",
                            children: "$"
                        })
                    }), p.jsx("div", {
                        className: "ml-2",
                        children: p.jsx("span", {
                            className: "text-sm font-medium text-gray-600 block leading-tight",
                            children: "DA VEZ"
                        })
                    })]
                })
            }), p.jsxs(V.div, {
                className: "flex-1 px-6 flex flex-col justify-center",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .2
                },
                children: [p.jsxs("div", {
                    className: "text-center mb-8",
                    children: [p.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Olá! Como você se chama?"
                    }), p.jsx("p", {
                        className: "text-gray-600",
                        children: "Vamos personalizar sua experiência"
                    })]
                }), p.jsx(V.div, {
                    className: "mb-6",
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .4
                    },
                    children: p.jsx("input", {
                        type: "text",
                        placeholder: "Digite seu nome",
                        value: e,
                        onChange: i => t(i.target.value),
                        className: "w-full px-4 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:outline-none input-focus",
                        maxLength: 50
                    })
                }), p.jsx(V.div, {
                    className: "mb-8",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .6
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: .98
                    },
                    children: p.jsx(Ut, {
                        onClick: o,
                        className: "w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-2xl text-lg shadow-lg button-hover",
                        children: "Continuar"
                    })
                }), p.jsx(V.p, {
                    className: "text-center text-sm text-gray-500 px-4",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .8
                    },
                    children: "Ao continuar, você concorda com nossos termos de uso"
                })]
            })]
        })
    }
    ;
var ek = Lu[" useId ".trim().toString()] || (() => { }
)
    , tk = 0;
function nl(e) {
    const [t, n] = m.useState(ek());
    return _r(() => {
        e || n(r => r ?? String(tk++))
    }
        , [e]),
        e || (t ? `radix-${t}` : "")
}
var rl = "focusScope.autoFocusOnMount"
    , ol = "focusScope.autoFocusOnUnmount"
    , $p = {
        bubbles: !1,
        cancelable: !0
    }
    , nk = "FocusScope"
    , Vy = m.forwardRef((e, t) => {
        const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s } = e
            , [a, l] = m.useState(null)
            , u = Ft(o)
            , c = Ft(i)
            , d = m.useRef(null)
            , f = Qe(t, y => l(y))
            , g = m.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
        m.useEffect(() => {
            if (r) {
                let y = function (v) {
                    if (g.paused || !a)
                        return;
                    const C = v.target;
                    a.contains(C) ? d.current = C : Kt(d.current, {
                        select: !0
                    })
                }
                    , S = function (v) {
                        if (g.paused || !a)
                            return;
                        const C = v.relatedTarget;
                        C !== null && (a.contains(C) || Kt(d.current, {
                            select: !0
                        }))
                    }
                    , x = function (v) {
                        if (document.activeElement === document.body)
                            for (const T of v)
                                T.removedNodes.length > 0 && Kt(a)
                    };
                document.addEventListener("focusin", y),
                    document.addEventListener("focusout", S);
                const h = new MutationObserver(x);
                return a && h.observe(a, {
                    childList: !0,
                    subtree: !0
                }),
                    () => {
                        document.removeEventListener("focusin", y),
                            document.removeEventListener("focusout", S),
                            h.disconnect()
                    }
            }
        }
            , [r, a, g.paused]),
            m.useEffect(() => {
                if (a) {
                    Hp.add(g);
                    const y = document.activeElement;
                    if (!a.contains(y)) {
                        const x = new CustomEvent(rl, $p);
                        a.addEventListener(rl, u),
                            a.dispatchEvent(x),
                            x.defaultPrevented || (rk(lk(Fy(a)), {
                                select: !0
                            }),
                                document.activeElement === y && Kt(a))
                    }
                    return () => {
                        a.removeEventListener(rl, u),
                            setTimeout(() => {
                                const x = new CustomEvent(ol, $p);
                                a.addEventListener(ol, c),
                                    a.dispatchEvent(x),
                                    x.defaultPrevented || Kt(y ?? document.body, {
                                        select: !0
                                    }),
                                    a.removeEventListener(ol, c),
                                    Hp.remove(g)
                            }
                                , 0)
                    }
                }
            }
                , [a, u, c, g]);
        const w = m.useCallback(y => {
            if (!n && !r || g.paused)
                return;
            const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey
                , x = document.activeElement;
            if (S && x) {
                const h = y.currentTarget
                    , [v, C] = ok(h);
                v && C ? !y.shiftKey && x === C ? (y.preventDefault(),
                    n && Kt(v, {
                        select: !0
                    })) : y.shiftKey && x === v && (y.preventDefault(),
                        n && Kt(C, {
                            select: !0
                        })) : x === h && y.preventDefault()
            }
        }
            , [n, r, g.paused]);
        return p.jsx(Ae.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: w
        })
    }
    );
Vy.displayName = nk;
function rk(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (Kt(r, {
            select: t
        }),
            document.activeElement !== n)
            return
}
function ok(e) {
    const t = Fy(e)
        , n = Wp(t, e)
        , r = Wp(t.reverse(), e);
    return [n, r]
}
function Fy(e) {
    const t = []
        , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();)
        t.push(n.currentNode);
    return t
}
function Wp(e, t) {
    for (const n of e)
        if (!ik(n, {
            upTo: t
        }))
            return n
}
function ik(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e;) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function sk(e) {
    return e instanceof HTMLInputElement && "select" in e
}
function Kt(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
            e !== n && sk(e) && t && e.select()
    }
}
var Hp = ak();
function ak() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
                e = Gp(e, t),
                e.unshift(t)
        },
        remove(t) {
            var n;
            e = Gp(e, t),
                (n = e[0]) == null || n.resume()
        }
    }
}
function Gp(e, t) {
    const n = [...e]
        , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
        n
}
function lk(e) {
    return e.filter(t => t.tagName !== "A")
}
var il = 0;
function uk() {
    m.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Kp()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? Kp()),
            il++,
            () => {
                il === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
                    il--
            }
    }
        , [])
}
function Kp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
        e.tabIndex = 0,
        e.style.outline = "none",
        e.style.opacity = "0",
        e.style.position = "fixed",
        e.style.pointerEvents = "none",
        e
}
var Ct = function () {
    return Ct = Object.assign || function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
        ,
        Ct.apply(this, arguments)
};
function By(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function ck(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
                i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Qi = "right-scroll-bar-position"
    , qi = "width-before-scroll-bar"
    , dk = "with-scroll-bars-hidden"
    , fk = "--removed-body-scroll-bar-size";
function sl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
        e
}
function pk(e, t) {
    var n = m.useState(function () {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                        n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
        n.facade
}
var hk = typeof window < "u" ? m.useLayoutEffect : m.useEffect
    , Yp = new WeakMap;
function mk(e, t) {
    var n = pk(t || null, function (r) {
        return e.forEach(function (o) {
            return sl(o, r)
        })
    });
    return hk(function () {
        var r = Yp.get(n);
        if (r) {
            var o = new Set(r)
                , i = new Set(e)
                , s = n.current;
            o.forEach(function (a) {
                i.has(a) || sl(a, null)
            }),
                i.forEach(function (a) {
                    o.has(a) || sl(a, s)
                })
        }
        Yp.set(n, e)
    }, [e]),
        n
}
function gk(e) {
    return e
}
function vk(e, t) {
    t === void 0 && (t = gk);
    var n = []
        , r = !1
        , o = {
            read: function () {
                if (r)
                    throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function (i) {
                var s = t(i, r);
                return n.push(s),
                    function () {
                        n = n.filter(function (a) {
                            return a !== s
                        })
                    }
            },
            assignSyncMedium: function (i) {
                for (r = !0; n.length;) {
                    var s = n;
                    n = [],
                        s.forEach(i)
                }
                n = {
                    push: function (a) {
                        return i(a)
                    },
                    filter: function () {
                        return n
                    }
                }
            },
            assignMedium: function (i) {
                r = !0;
                var s = [];
                if (n.length) {
                    var a = n;
                    n = [],
                        a.forEach(i),
                        s = n
                }
                var l = function () {
                    var c = s;
                    s = [],
                        c.forEach(i)
                }
                    , u = function () {
                        return Promise.resolve().then(l)
                    };
                u(),
                    n = {
                        push: function (c) {
                            s.push(c),
                                u()
                        },
                        filter: function (c) {
                            return s = s.filter(c),
                                n
                        }
                    }
            }
        };
    return o
}
function yk(e) {
    e === void 0 && (e = {});
    var t = vk(null);
    return t.options = Ct({
        async: !0,
        ssr: !1
    }, e),
        t
}
var zy = function (e) {
    var t = e.sideCar
        , n = By(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return m.createElement(r, Ct({}, n))
};
zy.isSideCarExport = !0;
function xk(e, t) {
    return e.useMedium(t),
        zy
}
var Uy = yk()
    , al = function () { }
    , ca = m.forwardRef(function (e, t) {
        var n = m.useRef(null)
            , r = m.useState({
                onScrollCapture: al,
                onWheelCapture: al,
                onTouchMoveCapture: al
            })
            , o = r[0]
            , i = r[1]
            , s = e.forwardProps
            , a = e.children
            , l = e.className
            , u = e.removeScrollBar
            , c = e.enabled
            , d = e.shards
            , f = e.sideCar
            , g = e.noRelative
            , w = e.noIsolation
            , y = e.inert
            , S = e.allowPinchZoom
            , x = e.as
            , h = x === void 0 ? "div" : x
            , v = e.gapMode
            , C = By(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
            , T = f
            , P = mk([n, t])
            , E = Ct(Ct({}, C), o);
        return m.createElement(m.Fragment, null, c && m.createElement(T, {
            sideCar: Uy,
            removeScrollBar: u,
            shards: d,
            noRelative: g,
            noIsolation: w,
            inert: y,
            setCallbacks: i,
            allowPinchZoom: !!S,
            lockRef: n,
            gapMode: v
        }), s ? m.cloneElement(m.Children.only(a), Ct(Ct({}, E), {
            ref: P
        })) : m.createElement(h, Ct({}, E, {
            className: l,
            ref: P
        }), a))
    });
ca.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ca.classNames = {
    fullWidth: qi,
    zeroRight: Qi
};
var Xp, wk = function () {
    if (Xp)
        return Xp;
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function Sk() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = wk();
    return t && e.setAttribute("nonce", t),
        e
}
function Ck(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function Tk(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Ek = function () {
    var e = 0
        , t = null;
    return {
        add: function (n) {
            e == 0 && (t = Sk()) && (Ck(t, n),
                Tk(t)),
                e++
        },
        remove: function () {
            e--,
                !e && t && (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
        }
    }
}
    , Pk = function () {
        var e = Ek();
        return function (t, n) {
            m.useEffect(function () {
                return e.add(t),
                    function () {
                        e.remove()
                    }
            }, [t && n])
        }
    }
    , $y = function () {
        var e = Pk()
            , t = function (n) {
                var r = n.styles
                    , o = n.dynamic;
                return e(r, o),
                    null
            };
        return t
    }
    , bk = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    }
    , ll = function (e) {
        return parseInt(e || "", 10) || 0
    }
    , Nk = function (e) {
        var t = window.getComputedStyle(document.body)
            , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
            , r = t[e === "padding" ? "paddingTop" : "marginTop"]
            , o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [ll(n), ll(r), ll(o)]
    }
    , kk = function (e) {
        if (e === void 0 && (e = "margin"),
            typeof window > "u")
            return bk;
        var t = Nk(e)
            , n = document.documentElement.clientWidth
            , r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    }
    , Ak = $y()
    , kr = "data-scroll-locked"
    , jk = function (e, t, n, r) {
        var o = e.left
            , i = e.top
            , s = e.right
            , a = e.gap;
        return n === void 0 && (n = "margin"),
            `
  .`.concat(dk, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(kr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Qi, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(qi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Qi, " .").concat(Qi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(qi, " .").concat(qi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kr, `] {
    `).concat(fk, ": ").concat(a, `px;
  }
`)
    }
    , Qp = function () {
        var e = parseInt(document.body.getAttribute(kr) || "0", 10);
        return isFinite(e) ? e : 0
    }
    , Rk = function () {
        m.useEffect(function () {
            return document.body.setAttribute(kr, (Qp() + 1).toString()),
                function () {
                    var e = Qp() - 1;
                    e <= 0 ? document.body.removeAttribute(kr) : document.body.setAttribute(kr, e.toString())
                }
        }, [])
    }
    , Mk = function (e) {
        var t = e.noRelative
            , n = e.noImportant
            , r = e.gapMode
            , o = r === void 0 ? "margin" : r;
        Rk();
        var i = m.useMemo(function () {
            return kk(o)
        }, [o]);
        return m.createElement(Ak, {
            styles: jk(i, !t, o, n ? "" : "!important")
        })
    }
    , Au = !1;
if (typeof window < "u")
    try {
        var Ri = Object.defineProperty({}, "passive", {
            get: function () {
                return Au = !0,
                    !0
            }
        });
        window.addEventListener("test", Ri, Ri),
            window.removeEventListener("test", Ri, Ri)
    } catch {
        Au = !1
    }
var nr = Au ? {
    passive: !1
} : !1
    , Dk = function (e) {
        return e.tagName === "TEXTAREA"
    }
    , Wy = function (e, t) {
        if (!(e instanceof Element))
            return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Dk(e) && n[t] === "visible")
    }
    , Lk = function (e) {
        return Wy(e, "overflowY")
    }
    , Ok = function (e) {
        return Wy(e, "overflowX")
    }
    , qp = function (e, t) {
        var n = t.ownerDocument
            , r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = Hy(e, r);
            if (o) {
                var i = Gy(e, r)
                    , s = i[1]
                    , a = i[2];
                if (s > a)
                    return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    }
    , Ik = function (e) {
        var t = e.scrollTop
            , n = e.scrollHeight
            , r = e.clientHeight;
        return [t, n, r]
    }
    , _k = function (e) {
        var t = e.scrollLeft
            , n = e.scrollWidth
            , r = e.clientWidth;
        return [t, n, r]
    }
    , Hy = function (e, t) {
        return e === "v" ? Lk(t) : Ok(t)
    }
    , Gy = function (e, t) {
        return e === "v" ? Ik(t) : _k(t)
    }
    , Vk = function (e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    }
    , Fk = function (e, t, n, r, o) {
        var i = Vk(e, window.getComputedStyle(t).direction)
            , s = i * r
            , a = n.target
            , l = t.contains(a)
            , u = !1
            , c = s > 0
            , d = 0
            , f = 0;
        do {
            if (!a)
                break;
            var g = Gy(e, a)
                , w = g[0]
                , y = g[1]
                , S = g[2]
                , x = y - S - i * w;
            (w || x) && Hy(e, a) && (d += x,
                f += w);
            var h = a.parentNode;
            a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
        } while (!l && a !== document.body || l && (t.contains(a) || t === a));
        return (c && (o && Math.abs(d) < 1 || !o && s > d) || !c && (o && Math.abs(f) < 1 || !o && -s > f)) && (u = !0),
            u
    }
    , Mi = function (e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    }
    , Zp = function (e) {
        return [e.deltaX, e.deltaY]
    }
    , Jp = function (e) {
        return e && "current" in e ? e.current : e
    }
    , Bk = function (e, t) {
        return e[0] === t[0] && e[1] === t[1]
    }
    , zk = function (e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    }
    , Uk = 0
    , rr = [];
function $k(e) {
    var t = m.useRef([])
        , n = m.useRef([0, 0])
        , r = m.useRef()
        , o = m.useState(Uk++)[0]
        , i = m.useState($y)[0]
        , s = m.useRef(e);
    m.useEffect(function () {
        s.current = e
    }, [e]),
        m.useEffect(function () {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var y = ck([e.lockRef.current], (e.shards || []).map(Jp), !0).filter(Boolean);
                return y.forEach(function (S) {
                    return S.classList.add("allow-interactivity-".concat(o))
                }),
                    function () {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                            y.forEach(function (S) {
                                return S.classList.remove("allow-interactivity-".concat(o))
                            })
                    }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
    var a = m.useCallback(function (y, S) {
        if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
            return !s.current.allowPinchZoom;
        var x = Mi(y), h = n.current, v = "deltaX" in y ? y.deltaX : h[0] - x[0], C = "deltaY" in y ? y.deltaY : h[1] - x[1], T, P = y.target, E = Math.abs(v) > Math.abs(C) ? "h" : "v";
        if ("touches" in y && E === "h" && P.type === "range")
            return !1;
        var b = qp(E, P);
        if (!b)
            return !0;
        if (b ? T = E : (T = E === "v" ? "h" : "v",
            b = qp(E, P)),
            !b)
            return !1;
        if (!r.current && "changedTouches" in y && (v || C) && (r.current = T),
            !T)
            return !0;
        var A = r.current || T;
        return Fk(A, S, y, A === "h" ? v : C, !0)
    }, [])
        , l = m.useCallback(function (y) {
            var S = y;
            if (!(!rr.length || rr[rr.length - 1] !== i)) {
                var x = "deltaY" in S ? Zp(S) : Mi(S)
                    , h = t.current.filter(function (T) {
                        return T.name === S.type && (T.target === S.target || S.target === T.shadowParent) && Bk(T.delta, x)
                    })[0];
                if (h && h.should) {
                    S.cancelable && S.preventDefault();
                    return
                }
                if (!h) {
                    var v = (s.current.shards || []).map(Jp).filter(Boolean).filter(function (T) {
                        return T.contains(S.target)
                    })
                        , C = v.length > 0 ? a(S, v[0]) : !s.current.noIsolation;
                    C && S.cancelable && S.preventDefault()
                }
            }
        }, [])
        , u = m.useCallback(function (y, S, x, h) {
            var v = {
                name: y,
                delta: S,
                target: x,
                should: h,
                shadowParent: Wk(x)
            };
            t.current.push(v),
                setTimeout(function () {
                    t.current = t.current.filter(function (C) {
                        return C !== v
                    })
                }, 1)
        }, [])
        , c = m.useCallback(function (y) {
            n.current = Mi(y),
                r.current = void 0
        }, [])
        , d = m.useCallback(function (y) {
            u(y.type, Zp(y), y.target, a(y, e.lockRef.current))
        }, [])
        , f = m.useCallback(function (y) {
            u(y.type, Mi(y), y.target, a(y, e.lockRef.current))
        }, []);
    m.useEffect(function () {
        return rr.push(i),
            e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: f
            }),
            document.addEventListener("wheel", l, nr),
            document.addEventListener("touchmove", l, nr),
            document.addEventListener("touchstart", c, nr),
            function () {
                rr = rr.filter(function (y) {
                    return y !== i
                }),
                    document.removeEventListener("wheel", l, nr),
                    document.removeEventListener("touchmove", l, nr),
                    document.removeEventListener("touchstart", c, nr)
            }
    }, []);
    var g = e.removeScrollBar
        , w = e.inert;
    return m.createElement(m.Fragment, null, w ? m.createElement(i, {
        styles: zk(o)
    }) : null, g ? m.createElement(Mk, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function Wk(e) {
    for (var t = null; e !== null;)
        e instanceof ShadowRoot && (t = e.host,
            e = e.host),
            e = e.parentNode;
    return t
}
const Hk = xk(Uy, $k);
var Ky = m.forwardRef(function (e, t) {
    return m.createElement(ca, Ct({}, e, {
        ref: t,
        sideCar: Hk
    }))
});
Ky.classNames = ca.classNames;
const Gk = Ky;
var Kk = function (e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
    , or = new WeakMap
    , Di = new WeakMap
    , Li = {}
    , ul = 0
    , Yy = function (e) {
        return e && (e.host || Yy(e.parentNode))
    }
    , Yk = function (e, t) {
        return t.map(function (n) {
            if (e.contains(n))
                return n;
            var r = Yy(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
                null)
        }).filter(function (n) {
            return !!n
        })
    }
    , Xk = function (e, t, n, r) {
        var o = Yk(t, Array.isArray(e) ? e : [e]);
        Li[n] || (Li[n] = new WeakMap);
        var i = Li[n]
            , s = []
            , a = new Set
            , l = new Set(o)
            , u = function (d) {
                !d || a.has(d) || (a.add(d),
                    u(d.parentNode))
            };
        o.forEach(u);
        var c = function (d) {
            !d || l.has(d) || Array.prototype.forEach.call(d.children, function (f) {
                if (a.has(f))
                    c(f);
                else
                    try {
                        var g = f.getAttribute(r)
                            , w = g !== null && g !== "false"
                            , y = (or.get(f) || 0) + 1
                            , S = (i.get(f) || 0) + 1;
                        or.set(f, y),
                            i.set(f, S),
                            s.push(f),
                            y === 1 && w && Di.set(f, !0),
                            S === 1 && f.setAttribute(n, "true"),
                            w || f.setAttribute(r, "true")
                    } catch (x) {
                        console.error("aria-hidden: cannot operate on ", f, x)
                    }
            })
        };
        return c(t),
            a.clear(),
            ul++,
            function () {
                s.forEach(function (d) {
                    var f = or.get(d) - 1
                        , g = i.get(d) - 1;
                    or.set(d, f),
                        i.set(d, g),
                        f || (Di.has(d) || d.removeAttribute(r),
                            Di.delete(d)),
                        g || d.removeAttribute(n)
                }),
                    ul--,
                    ul || (or = new WeakMap,
                        or = new WeakMap,
                        Di = new WeakMap,
                        Li = {})
            }
    }
    , Qk = function (e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e])
            , o = t || Kk(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
            Xk(r, o, n, "aria-hidden")) : function () {
                return null
            }
    }
    , da = "Dialog"
    , [Xy, Qy] = Js(da)
    , [qk, vt] = Xy(da)
    , qy = e => {
        const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s = !0 } = e
            , a = m.useRef(null)
            , l = m.useRef(null)
            , [u, c] = $g({
                prop: r,
                defaultProp: o ?? !1,
                onChange: i,
                caller: da
            });
        return p.jsx(qk, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: nl(),
            titleId: nl(),
            descriptionId: nl(),
            open: u,
            onOpenChange: c,
            onOpenToggle: m.useCallback(() => c(d => !d), [c]),
            modal: s,
            children: n
        })
    }
    ;
qy.displayName = da;
var Zy = "DialogTrigger"
    , Jy = m.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e
            , o = vt(Zy, n)
            , i = Qe(t, o.triggerRef);
        return p.jsx(Ae.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": id(o.open),
            ...r,
            ref: i,
            onClick: ge(e.onClick, o.onOpenToggle)
        })
    }
    );
Jy.displayName = Zy;
var rd = "DialogPortal"
    , [Zk, e0] = Xy(rd, {
        forceMount: void 0
    })
    , t0 = e => {
        const { __scopeDialog: t, forceMount: n, children: r, container: o } = e
            , i = vt(rd, t);
        return p.jsx(Zk, {
            scope: t,
            forceMount: n,
            children: m.Children.map(r, s => p.jsx(ei, {
                present: n || i.open,
                children: p.jsx(kc, {
                    asChild: !0,
                    container: o,
                    children: s
                })
            }))
        })
    }
    ;
t0.displayName = rd;
var Ms = "DialogOverlay"
    , n0 = m.forwardRef((e, t) => {
        const n = e0(Ms, e.__scopeDialog)
            , { forceMount: r = n.forceMount, ...o } = e
            , i = vt(Ms, e.__scopeDialog);
        return i.modal ? p.jsx(ei, {
            present: r || i.open,
            children: p.jsx(eA, {
                ...o,
                ref: t
            })
        }) : null
    }
    );
n0.displayName = Ms;
var Jk = Wo("DialogOverlay.RemoveScroll")
    , eA = m.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e
            , o = vt(Ms, n);
        return p.jsx(Gk, {
            as: Jk,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: p.jsx(Ae.div, {
                "data-state": id(o.open),
                ...r,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }
    )
    , Hn = "DialogContent"
    , r0 = m.forwardRef((e, t) => {
        const n = e0(Hn, e.__scopeDialog)
            , { forceMount: r = n.forceMount, ...o } = e
            , i = vt(Hn, e.__scopeDialog);
        return p.jsx(ei, {
            present: r || i.open,
            children: i.modal ? p.jsx(tA, {
                ...o,
                ref: t
            }) : p.jsx(nA, {
                ...o,
                ref: t
            })
        })
    }
    );
r0.displayName = Hn;
var tA = m.forwardRef((e, t) => {
    const n = vt(Hn, e.__scopeDialog)
        , r = m.useRef(null)
        , o = Qe(t, n.contentRef, r);
    return m.useEffect(() => {
        const i = r.current;
        if (i)
            return Qk(i)
    }
        , []),
        p.jsx(o0, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ge(e.onCloseAutoFocus, i => {
                var s;
                i.preventDefault(),
                    (s = n.triggerRef.current) == null || s.focus()
            }
            ),
            onPointerDownOutside: ge(e.onPointerDownOutside, i => {
                const s = i.detail.originalEvent
                    , a = s.button === 0 && s.ctrlKey === !0;
                (s.button === 2 || a) && i.preventDefault()
            }
            ),
            onFocusOutside: ge(e.onFocusOutside, i => i.preventDefault())
        })
}
)
    , nA = m.forwardRef((e, t) => {
        const n = vt(Hn, e.__scopeDialog)
            , r = m.useRef(!1)
            , o = m.useRef(!1);
        return p.jsx(o0, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: i => {
                var s, a;
                (s = e.onCloseAutoFocus) == null || s.call(e, i),
                    i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
                        i.preventDefault()),
                    r.current = !1,
                    o.current = !1
            }
            ,
            onInteractOutside: i => {
                var l, u;
                (l = e.onInteractOutside) == null || l.call(e, i),
                    i.defaultPrevented || (r.current = !0,
                        i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const s = i.target;
                ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(),
                    i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
            }
        })
    }
    )
    , o0 = m.forwardRef((e, t) => {
        const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e
            , a = vt(Hn, n)
            , l = m.useRef(null)
            , u = Qe(t, l);
        return uk(),
            p.jsxs(p.Fragment, {
                children: [p.jsx(Vy, {
                    asChild: !0,
                    loop: !0,
                    trapped: r,
                    onMountAutoFocus: o,
                    onUnmountAutoFocus: i,
                    children: p.jsx(Nc, {
                        role: "dialog",
                        id: a.contentId,
                        "aria-describedby": a.descriptionId,
                        "aria-labelledby": a.titleId,
                        "data-state": id(a.open),
                        ...s,
                        ref: u,
                        onDismiss: () => a.onOpenChange(!1)
                    })
                }), p.jsxs(p.Fragment, {
                    children: [p.jsx(oA, {
                        titleId: a.titleId
                    }), p.jsx(sA, {
                        contentRef: l,
                        descriptionId: a.descriptionId
                    })]
                })]
            })
    }
    )
    , od = "DialogTitle"
    , i0 = m.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e
            , o = vt(od, n);
        return p.jsx(Ae.h2, {
            id: o.titleId,
            ...r,
            ref: t
        })
    }
    );
i0.displayName = od;
var s0 = "DialogDescription"
    , a0 = m.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e
            , o = vt(s0, n);
        return p.jsx(Ae.p, {
            id: o.descriptionId,
            ...r,
            ref: t
        })
    }
    );
a0.displayName = s0;
var l0 = "DialogClose"
    , u0 = m.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e
            , o = vt(l0, n);
        return p.jsx(Ae.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ge(e.onClick, () => o.onOpenChange(!1))
        })
    }
    );
u0.displayName = l0;
function id(e) {
    return e ? "open" : "closed"
}
var c0 = "DialogTitleWarning"
    , [rA, d0] = jC(c0, {
        contentName: Hn,
        titleName: od,
        docsSlug: "dialog"
    })
    , oA = ({ titleId: e }) => {
        const t = d0(c0)
            , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return m.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }
            , [n, e]),
            null
    }
    , iA = "DialogDescriptionWarning"
    , sA = ({ contentRef: e, descriptionId: t }) => {
        const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${d0(iA).contentName}}.`;
        return m.useEffect(() => {
            var i;
            const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(r))
        }
            , [r, e, t]),
            null
    }
    , aA = qy
    , lA = Jy
    , uA = t0
    , cA = n0
    , dA = r0
    , fA = i0
    , pA = a0
    , f0 = u0
    , p0 = "AlertDialog"
    , [hA, zA] = Js(p0, [Qy])
    , $t = Qy()
    , h0 = e => {
        const { __scopeAlertDialog: t, ...n } = e
            , r = $t(t);
        return p.jsx(aA, {
            ...r,
            ...n,
            modal: !0
        })
    }
    ;
h0.displayName = p0;
var mA = "AlertDialogTrigger"
    , gA = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e
            , o = $t(n);
        return p.jsx(lA, {
            ...o,
            ...r,
            ref: t
        })
    }
    );
gA.displayName = mA;
var vA = "AlertDialogPortal"
    , m0 = e => {
        const { __scopeAlertDialog: t, ...n } = e
            , r = $t(t);
        return p.jsx(uA, {
            ...r,
            ...n
        })
    }
    ;
m0.displayName = vA;
var yA = "AlertDialogOverlay"
    , g0 = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e
            , o = $t(n);
        return p.jsx(cA, {
            ...o,
            ...r,
            ref: t
        })
    }
    );
g0.displayName = yA;
var Ar = "AlertDialogContent"
    , [xA, wA] = hA(Ar)
    , SA = LC("AlertDialogContent")
    , v0 = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, children: r, ...o } = e
            , i = $t(n)
            , s = m.useRef(null)
            , a = Qe(t, s)
            , l = m.useRef(null);
        return p.jsx(rA, {
            contentName: Ar,
            titleName: y0,
            docsSlug: "alert-dialog",
            children: p.jsx(xA, {
                scope: n,
                cancelRef: l,
                children: p.jsxs(dA, {
                    role: "alertdialog",
                    ...i,
                    ...o,
                    ref: a,
                    onOpenAutoFocus: ge(o.onOpenAutoFocus, u => {
                        var c;
                        u.preventDefault(),
                            (c = l.current) == null || c.focus({
                                preventScroll: !0
                            })
                    }
                    ),
                    onPointerDownOutside: u => u.preventDefault(),
                    onInteractOutside: u => u.preventDefault(),
                    children: [p.jsx(SA, {
                        children: r
                    }), p.jsx(TA, {
                        contentRef: s
                    })]
                })
            })
        })
    }
    );
v0.displayName = Ar;
var y0 = "AlertDialogTitle"
    , x0 = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e
            , o = $t(n);
        return p.jsx(fA, {
            ...o,
            ...r,
            ref: t
        })
    }
    );
x0.displayName = y0;
var w0 = "AlertDialogDescription"
    , S0 = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e
            , o = $t(n);
        return p.jsx(pA, {
            ...o,
            ...r,
            ref: t
        })
    }
    );
S0.displayName = w0;
var CA = "AlertDialogAction"
    , C0 = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e
            , o = $t(n);
        return p.jsx(f0, {
            ...o,
            ...r,
            ref: t
        })
    }
    );
C0.displayName = CA;
var T0 = "AlertDialogCancel"
    , E0 = m.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e
            , { cancelRef: o } = wA(T0, n)
            , i = $t(n)
            , s = Qe(t, o);
        return p.jsx(f0, {
            ...i,
            ...r,
            ref: s
        })
    }
    );
E0.displayName = T0;
var TA = ({ contentRef: e }) => {
    const t = `\`${Ar}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Ar}\` by passing a \`${w0}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Ar}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return m.useEffect(() => {
        var r;
        document.getElementById((r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")) || console.warn(t)
    }
        , [t, e]),
        null
}
    , EA = h0
    , PA = m0
    , P0 = g0
    , b0 = v0
    , N0 = C0
    , k0 = E0
    , A0 = x0
    , j0 = S0;
const bA = EA
    , NA = PA
    , R0 = G.forwardRef(({ className: e, ...t }, n) => p.jsx(P0, {
        className: Ie("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
        ...t,
        ref: n
    }));
R0.displayName = P0.displayName;
const M0 = G.forwardRef(({ className: e, ...t }, n) => p.jsxs(NA, {
    children: [p.jsx(R0, {}), p.jsx(b0, {
        ref: n,
        className: Ie("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...t
    })]
}));
M0.displayName = b0.displayName;
const D0 = ({ className: e, ...t }) => p.jsx("div", {
    className: Ie("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
});
D0.displayName = "AlertDialogHeader";
const L0 = ({ className: e, ...t }) => p.jsx("div", {
    className: Ie("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
});
L0.displayName = "AlertDialogFooter";
const O0 = G.forwardRef(({ className: e, ...t }, n) => p.jsx(A0, {
    ref: n,
    className: Ie("text-lg font-semibold", e),
    ...t
}));
O0.displayName = A0.displayName;
const I0 = G.forwardRef(({ className: e, ...t }, n) => p.jsx(j0, {
    ref: n,
    className: Ie("text-sm text-muted-foreground", e),
    ...t
}));
I0.displayName = j0.displayName;
const _0 = G.forwardRef(({ className: e, ...t }, n) => p.jsx(N0, {
    ref: n,
    className: Ie(nd(), e),
    ...t
}));
_0.displayName = N0.displayName;
const kA = G.forwardRef(({ className: e, ...t }, n) => p.jsx(k0, {
    ref: n,
    className: Ie(nd({
        variant: "outline"
    }), "mt-2 sm:mt-0", e),
    ...t
}));
kA.displayName = k0.displayName;
const AA = () => {
    const { step: e } = U1()
        , t = parseInt(e)
        , n = wn()
        , { toast: r } = ta()
        , [o, i] = m.useState("")
        , [s, a] = m.useState("")
        , [l, u] = m.useState(0)
        , [c, d] = m.useState(!1)
        , [f, g] = m.useState(0)
        , w = [{
            id: 1,
            brand: "Nike",
            product: "Nike Air Force (Black)",
            code: "96714954",
            value: 10500,
            image: "https://horizons-cdn.hostinger.com/3750fcf7-2e15-49f4-9407-69873196af8a/b5449f3a92f476905318a21c0a5f4aea.webp"
        }, {
            id: 2,
            brand: "Nike",
            product: "Nike Air Force (Rosa)",
            code: "87526465",
            value: 12e3,
            image: "https://horizons-cdn.hostinger.com/3750fcf7-2e15-49f4-9407-69873196af8a/a621a24909417901e1ba3b787e8d259b.webp"
        }, {
            id: 3,
            brand: "JBL",
            product: "JBL Caixa de Som",
            code: "94141786",
            value: 21e3,
            image: "https://horizons-cdn.hostinger.com/3750fcf7-2e15-49f4-9407-69873196af8a/8ff68eb842adee5d416e83d7388a0bd5.webp"
        }, {
            id: 4,
            brand: "Riachuelo",
            product: "Sapato de Salto",
            code: "66777793",
            value: 15e3,
            image: "https://horizons-cdn.hostinger.com/3750fcf7-2e15-49f4-9407-69873196af8a/28363d3c2fc37fedb1911e0039deb7c0.webp"
        }, {
            id: 5,
            brand: "Samsung",
            product: "Samsung Galaxy",
            code: "67661371",
            value: 25e3,
            image: "https://horizons-cdn.hostinger.com/3750fcf7-2e15-49f4-9407-69873196af8a/113a782acf4fea572b03eeee82fa74aa.webp"
        }, {
            id: 6,
            brand: "Samsung",
            product: "Samsung Galaxy (Light Blue)",
            code: "81795889",
            value: 18e3,
            image: "https://horizons-cdn.hostinger.com/3750fcf7-2e15-49f4-9407-69873196af8a/8ec60d140da3cadb6ac0b9181ea8e59c.webp"
        }]
        , y = w[t - 1];
    m.useEffect(() => {
        const v = localStorage.getItem("userName") || "Usuário"
            , C = parseInt(localStorage.getItem("totalBalance") || "0");
        a(v),
            u(C)
    }
        , [t]);
    const S = () => {
        if (!o.trim()) {
            r({
                title: "Código obrigatório",
                description: "Por favor, digite o código do cupom.",
                variant: "destructive"
            });
            return
        }
        if (o.trim() !== y.code) {
            r({
                title: "Código incorreto",
                description: "O código digitado não confere com o da imagem.",
                variant: "destructive"
            });
            return
        }
        const v = l + y.value;
        localStorage.setItem("totalBalance", v.toString()),
            g(y.value),
            d(!0)
    }
        , x = () => {
            d(!1);
            const v = t + 1;
            v <= w.length ? (n(`/validacao/${v}`),
                i("")) : n("/limite-atingido")
        }
        , h = () => p.jsx("div", {
            className: "progress-dots",
            children: [1, 2, 3, 4, 5, 6].map(v => p.jsx("div", {
                className: `progress-dot ${v < t ? "completed" : v === t ? "active" : ""}`
            }, v))
        });
    return y ? p.jsxs(p.Fragment, {
        children: [p.jsxs("div", {
            className: "min-h-screen bg-white",
            children: [p.jsxs(V.div, {
                className: "flex justify-between items-center p-4 bg-white",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [p.jsxs("div", {
                    className: "flex items-center",
                    children: [p.jsx("h1", {
                        className: "text-2xl font-black text-black",
                        children: "cupom"
                    }), p.jsx("div", {
                        className: "w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                        children: p.jsx("span", {
                            className: "text-black font-bold text-xs",
                            children: "$"
                        })
                    }), p.jsx("div", {
                        className: "ml-1",
                        children: p.jsx("span", {
                            className: "text-xs font-medium text-gray-600 block leading-tight",
                            children: "DA VEZ"
                        })
                    })]
                }), p.jsxs("div", {
                    className: "text-right",
                    children: [p.jsxs("p", {
                        className: "text-sm text-gray-600",
                        children: ["Olá, ", s.split(" ")[0]]
                    }), p.jsxs("p", {
                        className: "text-lg font-bold text-yellow-600",
                        children: [l.toLocaleString(), " Kz"]
                    })]
                })]
            }), p.jsxs(V.div, {
                className: "px-4 pb-8",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .2
                },
                children: [p.jsxs("div", {
                    className: "text-center mb-4",
                    children: [p.jsx("h2", {
                        className: "text-xl font-bold text-green-600 mb-2",
                        children: "NOVO CUPOM ENCONTRADO!"
                    }), h(), p.jsxs("p", {
                        className: "text-gray-600",
                        children: ["Cupom ", t, " de 6"]
                    })]
                }), p.jsx(V.div, {
                    className: "coupon-card mb-6 fade-in",
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .4
                    },
                    children: p.jsx("div", {
                        className: "relative",
                        children: p.jsx("img", {
                            src: y.image,
                            alt: y.product,
                            className: "w-full h-64 object-contain"
                        })
                    })
                }), p.jsxs(V.div, {
                    className: "mb-6",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .6
                    },
                    children: [p.jsxs("p", {
                        className: "text-center text-blue-600 mb-4 flex items-center justify-center",
                        children: [p.jsx("span", {
                            className: "mr-2",
                            children: "⬇️"
                        }), "Digite o código da imagem acima", p.jsx("span", {
                            className: "ml-2",
                            children: "⬇️"
                        })]
                    }), p.jsx("input", {
                        type: "number",
                        inputMode: "numeric",
                        placeholder: "Digite os 8",
                        value: o,
                        onChange: v => i(v.target.value.replace(/\D/g, "").slice(0, 8)),
                        className: "w-full px-4 py-4 border-2 border-gray-200 rounded-2xl text-lg text-center font-bold focus:border-yellow-400 focus:outline-none input-focus",
                        maxLength: 8
                    })]
                }), p.jsxs(V.div, {
                    className: "text-center mb-6",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .8
                    },
                    children: [p.jsxs("div", {
                        className: "flex items-center justify-center mb-2",
                        children: [p.jsx("div", {
                            className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2",
                            children: p.jsx("span", {
                                className: "text-white text-xs",
                                children: "🎯"
                            })
                        }), p.jsx("span", {
                            className: "font-semibold",
                            children: y.product
                        })]
                    }), p.jsxs("p", {
                        className: "text-xl font-bold text-yellow-600",
                        children: ["Valor a ganhar: ", y.value.toLocaleString(), " Kz"]
                    })]
                }), p.jsx(V.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: 1
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: .98
                    },
                    children: p.jsx(Ut, {
                        onClick: S,
                        className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg button-hover",
                        children: "Validar Cupão"
                    })
                })]
            })]
        }), p.jsx(bA, {
            open: c,
            onOpenChange: d,
            children: p.jsxs(M0, {
                className: "bg-white text-center p-8 rounded-2xl max-w-sm mx-auto",
                children: [p.jsxs(D0, {
                    children: [p.jsx("div", {
                        className: "w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: p.jsx(PT, {
                            className: "w-12 h-12 text-green-600"
                        })
                    }), p.jsx(O0, {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Nova Recompensa Desbloqueada!"
                    }), p.jsx(I0, {
                        className: "text-gray-600 mb-6",
                        children: "Você ganhou"
                    }), p.jsxs("div", {
                        className: "text-4xl font-bold text-green-600 mb-8",
                        children: ["Kz ", f.toLocaleString()]
                    }), p.jsx("p", {
                        className: "text-gray-600 mb-8",
                        children: "Continue a avaliar para ganhar ainda mais!"
                    })]
                }), p.jsx(L0, {
                    className: "w-full",
                    children: p.jsx(_0, {
                        onClick: x,
                        className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg",
                        children: "Continuar"
                    })
                })]
            })
        })]
    }) : (n("/limite-atingido"),
        null)
}
    , jA = () => {
        const e = wn()
            , [t, n] = m.useState(0);
        m.useEffect(() => {
            const o = parseInt(localStorage.getItem("totalBalance") || "0");
            n(o)
        }
            , []);
        const r = () => {
            e("/metodo-saque")
        }
            ;
        return p.jsxs("div", {
            className: "min-h-screen bg-white flex flex-col",
            children: [p.jsx(V.div, {
                className: "text-center py-8 px-6",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: p.jsxs("div", {
                    className: "flex items-center justify-center mb-6",
                    children: [p.jsx("h1", {
                        className: "text-3xl font-black text-black",
                        children: "cupom"
                    }), p.jsx("div", {
                        className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                        children: p.jsx("span", {
                            className: "text-black font-bold text-sm",
                            children: "$"
                        })
                    }), p.jsx("div", {
                        className: "ml-2",
                        children: p.jsx("span", {
                            className: "text-sm font-medium text-gray-600 block leading-tight",
                            children: "DA VEZ"
                        })
                    })]
                })
            }), p.jsxs(V.div, {
                className: "flex-1 px-6 flex flex-col justify-center",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .2
                },
                children: [p.jsxs("div", {
                    className: "text-center mb-8",
                    children: [p.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900 mb-4",
                        children: "Limite Diário Atingido!"
                    }), p.jsx("p", {
                        className: "text-gray-600 mb-6",
                        children: "Você atingiu o limite de cupões diários."
                    }), p.jsxs(V.div, {
                        className: "bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8",
                        initial: {
                            opacity: 0,
                            scale: .9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .6,
                            delay: .4
                        },
                        children: [p.jsx("p", {
                            className: "text-gray-600 mb-2",
                            children: "Saldo Total Acumulado:"
                        }), p.jsxs("p", {
                            className: "text-4xl font-bold text-green-600 glow-effect",
                            children: [t.toLocaleString(), " Kz"]
                        })]
                    }), p.jsxs("div", {
                        className: "flex items-center justify-center mb-8",
                        children: [p.jsx("span", {
                            className: "mr-2",
                            children: "⬇️"
                        }), p.jsx("p", {
                            className: "text-blue-600 font-medium",
                            children: "Realize o seu saque abaixo"
                        }), p.jsx("span", {
                            className: "ml-2",
                            children: "⬇️"
                        })]
                    })]
                }), p.jsx(V.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .6
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: .98
                    },
                    children: p.jsx(Ut, {
                        onClick: r,
                        className: "w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-2xl text-lg shadow-lg button-hover pulse-animation",
                        children: "REALIZAR SAQUE"
                    })
                })]
            })]
        })
    }
    , RA = () => {
        const e = wn()
            , { toast: t } = ta()
            , [n, r] = m.useState("multicaixa")
            , [o, i] = m.useState("")
            , [s, a] = m.useState("")
            , [l, u] = m.useState(0);
        m.useEffect(() => {
            const d = parseInt(localStorage.getItem("totalBalance") || "0");
            u(d)
        }
            , []);
        const c = () => {
            if (n === "multicaixa") {
                if (!o.trim() || o.length !== 9) {
                    t({
                        title: "Número inválido",
                        description: "Por favor, digite um número de telefone válido com 9 dígitos.",
                        variant: "destructive"
                    });
                    return
                }
            } else if (!s.trim() || s.length !== 21) {
                t({
                    title: "IBAN inválido",
                    description: "Por favor, digite um IBAN válido com 21 dígitos.",
                    variant: "destructive"
                });
                return
            }
            localStorage.setItem("withdrawalMethod", n),
                localStorage.setItem("withdrawalAccount", n === "multicaixa" ? o : s),
                e("/confirmacao-seguranca")
        }
            ;
        return p.jsx("div", {
            className: "min-h-screen bg-gray-50 p-4",
            children: p.jsxs(V.div, {
                className: "max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden slide-up",
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [p.jsxs("div", {
                    className: "bg-white p-6 text-center",
                    children: [p.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Solicitar Saque"
                    }), p.jsx("p", {
                        className: "text-gray-600",
                        children: "Sistema de Pagamento Seguro"
                    })]
                }), p.jsxs(V.div, {
                    className: "bg-green-50 p-4 mx-6 rounded-2xl mb-6",
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: [p.jsx("p", {
                        className: "text-center text-gray-600 mb-1",
                        children: "Valor Disponível:"
                    }), p.jsxs("p", {
                        className: "text-center text-3xl font-bold text-green-600",
                        children: ["Kz ", l.toLocaleString()]
                    })]
                }), p.jsxs("div", {
                    className: "p-6",
                    children: [p.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Escolha o método de saque:"
                    }), p.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 mb-6",
                        children: [p.jsx(V.div, {
                            className: `border-2 rounded-2xl p-4 cursor-pointer transition-all ${n === "iban" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`,
                            onClick: () => r("iban"),
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: .98
                            },
                            children: p.jsxs("div", {
                                className: "text-center",
                                children: [p.jsx(ET, {
                                    className: "w-8 h-8 mx-auto mb-2 text-gray-600"
                                }), p.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: "IBAN Bancário"
                                })]
                            })
                        }), p.jsx(V.div, {
                            className: `border-2 rounded-2xl p-4 cursor-pointer transition-all ${n === "multicaixa" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`,
                            onClick: () => r("multicaixa"),
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: .98
                            },
                            children: p.jsxs("div", {
                                className: "text-center",
                                children: [p.jsx(bT, {
                                    className: "w-8 h-8 mx-auto mb-2 text-gray-600"
                                }), p.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: "Multicaixa Express"
                                })]
                            })
                        })]
                    }), p.jsx(V.div, {
                        className: "mb-6",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .4
                        },
                        children: n === "multicaixa" ? p.jsxs(p.Fragment, {
                            children: [p.jsx("label", {
                                className: "block text-gray-700 font-semibold mb-2",
                                children: "Número de Telefone (Express)"
                            }), p.jsx("input", {
                                type: "tel",
                                placeholder: "9XX XXX XXX",
                                value: o,
                                onChange: d => i(d.target.value.replace(/\D/g, "").slice(0, 9)),
                                className: "w-full px-4 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:outline-none input-focus",
                                maxLength: 9
                            })]
                        }) : p.jsxs(p.Fragment, {
                            children: [p.jsx("label", {
                                className: "block text-gray-700 font-semibold mb-2",
                                children: "Número IBAN (21 dígitos)"
                            }), p.jsx("input", {
                                type: "text",
                                placeholder: "Digite o IBAN completo",
                                value: s,
                                onChange: d => a(d.target.value.replace(/\D/g, "").slice(0, 21)),
                                className: "w-full px-4 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:outline-none input-focus",
                                maxLength: 21
                            })]
                        })
                    }), p.jsx(V.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .6
                        },
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        children: p.jsx(Ut, {
                            onClick: c,
                            className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg button-hover",
                            children: "💳 Confirmar e Sacar"
                        })
                    })]
                })]
            })
        })
    }
    , MA = () => {
        const e = wn()
            , [t, n] = m.useState(0);
        m.useEffect(() => {
            const o = parseInt(localStorage.getItem("totalBalance") || "0");
            n(o)
        }
            , []);
        const r = () => {
            e("/final")
        }
            ;
        return p.jsx("div", {
            className: "min-h-screen bg-gray-900 flex items-center justify-center p-4",
            children: p.jsxs(V.div, {
                className: "max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden slide-up",
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [p.jsxs("div", {
                    className: "bg-gradient-to-r from-orange-400 to-red-500 p-6 text-center",
                    children: [p.jsx(mu, {
                        className: "w-12 h-12 text-white mx-auto mb-2"
                    }), p.jsx("h1", {
                        className: "text-xl font-bold text-white",
                        children: "🔒 Confirmação de Segurança Necessária"
                    })]
                }), p.jsxs("div", {
                    className: "p-6",
                    children: [p.jsxs("div", {
                        className: "text-center mb-6",
                        children: [p.jsx("p", {
                            className: "text-gray-600 mb-2",
                            children: "Antes de liberar o seu saque de"
                        }), p.jsxs("div", {
                            className: "flex items-center justify-center mb-4",
                            children: [p.jsx("span", {
                                className: "text-2xl mr-2",
                                children: "💰"
                            }), p.jsxs("span", {
                                className: "text-3xl font-bold text-green-600",
                                children: [t.toLocaleString(), " Kz"]
                            })]
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "precisamos confirmar que você é uma pessoa real e não um robô."
                        })]
                    }), p.jsx(V.div, {
                        className: "bg-gray-50 rounded-2xl p-4 mb-6",
                        initial: {
                            opacity: 0,
                            scale: .9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        children: p.jsxs("div", {
                            className: "flex items-start mb-3",
                            children: [p.jsx(mu, {
                                className: "w-5 h-5 text-gray-600 mr-2 mt-0.5"
                            }), p.jsx("p", {
                                className: "text-sm text-gray-700",
                                children: "Para isso, o sistema exige um cadastro de segurança (IBAN ou Número Express) com uma pequena taxa anti-fraude."
                            })]
                        })
                    }), p.jsxs(V.div, {
                        className: "security-check rounded-2xl p-4 mb-6",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .4
                        },
                        children: [p.jsx("p", {
                            className: "font-semibold text-gray-800 mb-3",
                            children: "✅ Essa verificação existe para proteger o seu dinheiro contra:"
                        }), p.jsxs("div", {
                            className: "space-y-2",
                            children: [p.jsxs("div", {
                                className: "flex items-center",
                                children: [p.jsx(jn, {
                                    className: "w-4 h-4 text-green-600 mr-2"
                                }), p.jsx("span", {
                                    className: "text-sm text-gray-700",
                                    children: "Robôs automáticos que estavam explorando o sistema"
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-center",
                                children: [p.jsx(jn, {
                                    className: "w-4 h-4 text-green-600 mr-2"
                                }), p.jsx("span", {
                                    className: "text-sm text-gray-700",
                                    children: "Cadastros falsos que tentavam sacar valores indevidos"
                                })]
                            })]
                        })]
                    }), p.jsxs(V.div, {
                        className: "warning-box rounded-2xl p-4 mb-6",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .6
                        },
                        children: [p.jsxs("div", {
                            className: "flex items-start mb-2",
                            children: [p.jsx(Dc, {
                                className: "w-5 h-5 text-yellow-600 mr-2 mt-0.5"
                            }), p.jsx("span", {
                                className: "font-semibold text-gray-800",
                                children: "Importante:"
                            })]
                        }), p.jsxs("div", {
                            className: "space-y-1 ml-7",
                            children: [p.jsxs("div", {
                                className: "flex items-center",
                                children: [p.jsx(jn, {
                                    className: "w-4 h-4 text-green-600 mr-2"
                                }), p.jsx("span", {
                                    className: "text-sm text-gray-700",
                                    children: "Essa taxa NÃO é um custo."
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-center",
                                children: [p.jsx(jn, {
                                    className: "w-4 h-4 text-green-600 mr-2"
                                }), p.jsx("span", {
                                    className: "text-sm text-gray-700",
                                    children: "Você recebe ela de volta junto com o valor do seu saque."
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-center",
                                children: [p.jsx(jn, {
                                    className: "w-4 h-4 text-green-600 mr-2"
                                }), p.jsx("span", {
                                    className: "text-sm text-gray-700",
                                    children: "Ou seja: o que é seu, volta garantido."
                                })]
                            })]
                        })]
                    }), p.jsxs(V.div, {
                        className: "text-center mb-6",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .6,
                            delay: .8
                        },
                        children: [p.jsx("p", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "👇 Próximo passo"
                        }), p.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Clique no botão abaixo, ative o seu cadastro e libere agora mesmo o seu saque."
                        })]
                    }), p.jsx(V.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: 1
                        },
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        children: p.jsx(Ut, {
                            onClick: r,
                            className: "w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg button-hover pulse-animation",
                            children: "Ativar Cadastro e Liberar Saque"
                        })
                    })]
                })]
            })
        })
    }
    , DA = () => {
        const [e, t] = m.useState(0)
            , [n, r] = m.useState(!1)
            , o = wn();
        m.useEffect(() => {
            const s = parseInt(localStorage.getItem("totalBalance") || "0");
            t(Math.min(s, 2e5));
            const a = setTimeout(() => {
                r(!0)
            }
                , 165e3);
            return () => clearTimeout(a)
        }
            , []);
        const i = () => {
            o("/payment-video")
        }
            ;
        return p.jsxs("div", {
            className: "min-h-screen bg-white flex flex-col",
            children: [p.jsxs(V.div, {
                className: "flex justify-between items-center p-4 bg-white shadow-sm",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [p.jsxs("div", {
                    className: "flex items-center",
                    children: [p.jsx("h1", {
                        className: "text-2xl font-black text-black",
                        children: "cupom"
                    }), p.jsx("div", {
                        className: "w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                        children: p.jsx("span", {
                            className: "text-black font-bold text-xs",
                            children: "$"
                        })
                    }), p.jsx("div", {
                        className: "ml-1",
                        children: p.jsx("span", {
                            className: "text-xs font-medium text-gray-600 block leading-tight",
                            children: "DA VEZ"
                        })
                    })]
                }), p.jsxs("div", {
                    className: "text-right",
                    children: [p.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: "Saldo:"
                    }), p.jsx("p", {
                        className: "text-lg font-bold text-green-600 bg-yellow-200 px-3 py-1 rounded-full",
                        children: e.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "AOA"
                        }).replace("AOA", "Kz")
                    })]
                })]
            }), p.jsxs("main", {
                className: "flex-grow flex flex-col items-center justify-center p-4 text-center",
                children: [p.jsx(V.div, {
                    className: "w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6",
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    children: p.jsx("iframe", {
                        id: "panda-9bd41a71-290e-4a79-8b03-22f4deb6204e",
                        src: "https://player-vz-35d0a572-7e6.tv.pandavideo.com.br/embed/?v=9bd41a71-290e-4a79-8b03-22f4deb6204e",
                        style: {
                            border: "none",
                            width: "100%",
                            height: "100%"
                        },
                        allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
                        allowFullScreen: !0,
                        fetchpriority: "high"
                    })
                }), p.jsxs(V.div, {
                    className: "bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg flex items-center max-w-2xl w-full mb-6",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .4
                    },
                    children: [p.jsx(Dc, {
                        className: "h-6 w-6 mr-3 text-yellow-500"
                    }), p.jsx("p", {
                        className: "font-semibold text-center flex-1",
                        children: "Assista esse vídeo até o final para liberar o seu saque!"
                    })]
                }), p.jsxs("p", {
                    className: "text-gray-500 text-sm mt-auto mb-4",
                    children: ["© ", new Date().getFullYear(), " Todos os direitos reservados - Cupom da Vez"]
                })]
            }), p.jsx("footer", {
                className: "sticky bottom-0 p-4 bg-white/80 backdrop-blur-sm",
                children: p.jsx(_y, {
                    children: n && p.jsx(V.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 50
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: p.jsx(Ut, {
                            onClick: i,
                            className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-2xl text-xl shadow-lg transform transition-transform duration-200",
                            children: "SACAR AGORA"
                        })
                    })
                })
            })]
        })
    }
    , LA = () => {
        const e = wn()
            , t = Jo();
        return n => {
            const r = new URLSearchParams(t.search)
                , o = r.toString() ? `${n}?${r.toString()}` : n;
            e(o)
        }
    }
    , OA = () => {
        const [e, t] = m.useState(0)
            , [n, r] = m.useState(!1)
            , o = LA()
            , i = Jo();
        m.useEffect(() => {
            const a = parseInt(localStorage.getItem("totalBalance") || "0");
            t(Math.min(a, 2e5));
            const l = setTimeout(() => {
                r(!0)
            }
                , 15e4);
            return () => clearTimeout(l)
        }
            , []),
            m.useEffect(() => {
                if (!document.querySelector("#utmify-pixel")) {
                    window.pixelId = "68c183a9bc40cfe42b9716e5";
                    const a = document.createElement("script");
                    a.id = "utmify-pixel",
                        a.async = !0,
                        a.defer = !0,
                        a.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js",
                        document.head.appendChild(a)
                }
                if (!document.querySelector("#utmify-utms")) {
                    const a = document.createElement("script");
                    a.id = "utmify-utms",
                        a.src = "https://cdn.utmify.com.br/scripts/utms/latest.js",
                        a.setAttribute("data-utmify-prevent-xcod-sck", ""),
                        a.setAttribute("data-utmify-prevent-subids", ""),
                        a.async = !0,
                        a.defer = !0,
                        document.body.appendChild(a)
                }
                window.fbq && window.fbq("track", "PageView")
            }
                , []),
            m.useEffect(() => {
                if (typeof window < "u" && i.search) {
                    const a = new URLSearchParams(i.search)
                        , l = new URLSearchParams(window.location.search);
                    let u = !1;
                    if (l.forEach((c, d) => {
                        !a.has(d) && c !== "" && (a.set(d, c),
                            u = !0)
                    }
                    ),
                        u && a.toString() !== l.toString()) {
                        const c = a.toString() ? `?${a.toString()}` : "";
                        c !== window.location.search && window.history.replaceState({}, "", `${window.location.pathname}${c}${window.location.hash}`)
                    }
                }
            }
                , [i.search]);
        const s = () => {
            o("/checkout")
        }
            ;
        return p.jsxs("div", {
            className: "min-h-screen bg-white flex flex-col",
            children: [p.jsxs(V.div, {
                className: "flex justify-between items-center p-4 bg-white shadow-sm",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [p.jsxs("div", {
                    className: "flex items-center",
                    children: [p.jsx("h1", {
                        className: "text-2xl font-black text-black",
                        children: "cupom"
                    }), p.jsx("div", {
                        className: "w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                        children: p.jsx("span", {
                            className: "text-black font-bold text-xs",
                            children: "$"
                        })
                    }), p.jsx("div", {
                        className: "ml-1",
                        children: p.jsx("span", {
                            className: "text-xs font-medium text-gray-600 block leading-tight",
                            children: "DA VEZ"
                        })
                    })]
                }), p.jsxs("div", {
                    className: "text-right",
                    children: [p.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: "Saldo:"
                    }), p.jsxs("p", {
                        className: "text-lg font-bold text-green-600 bg-yellow-200 px-3 py-1 rounded-full",
                        children: [e.toLocaleString(), " Kz"]
                    })]
                })]
            }), p.jsxs("main", {
                className: "flex-grow flex flex-col items-center justify-center p-4 text-center",
                children: [p.jsx(V.div, {
                    className: "w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl mb-6",
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    style: {
                        position: "relative",
                        paddingTop: "216.2962962962963%"
                    },
                    children: p.jsx("iframe", {
                        id: "panda-c5dae6b0-3ec1-42ad-9daa-1ad5432883d6",
                        src: "https://player-vz-35d0a572-7e6.tv.pandavideo.com.br/embed/?v=c5dae6b0-3ec1-42ad-9daa-1ad5432883d6",
                        style: {
                            border: "none",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        },
                        allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
                        allowFullScreen: !0,
                        fetchPriority: "high"
                    })
                }), p.jsxs(V.div, {
                    className: "bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg flex items-center max-w-2xl w-full mb-6",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .4
                    },
                    children: [p.jsx(Dc, {
                        className: "h-6 w-6 mr-3 text-yellow-500"
                    }), p.jsx("p", {
                        className: "font-semibold text-center flex-1",
                        children: "Assista esse vídeo até o final para liberar o seu saque!"
                    })]
                }), p.jsxs("p", {
                    className: "text-gray-500 text-sm mt-auto mb-4",
                    children: ["©️ ", new Date().getFullYear(), " Todos os direitos reservados - Cupom da Vez"]
                })]
            }), p.jsx("footer", {
                className: "sticky bottom-0 p-4 bg-white/80 backdrop-blur-sm",
                children: p.jsx(_y, {
                    children: n && p.jsx(V.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 50
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: p.jsx(Ut, {
                            onClick: s,
                            className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-2xl text-xl shadow-lg transform transition-transform duration-200",
                            children: "SACAR AGORA"
                        })
                    })
                })
            })]
        })
    }
    , V0 = m.memo(() => p.jsx("div", {
        className: "rounded-xl overflow-hidden shadow-md",
        style: {
            opacity: 1,
            transform: "none"
        },
        children: p.jsx("div", {
            style: {
                position: "relative",
                width: "100%",
                paddingTop: "375%"
            },
            children: p.jsx("iframe", {
                src: "https://www.kintu.org/product/bb53a15c-77b8-470f-8f80-82a272df600f",
                title: "Checkout",
                allowFullScreen: !0,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                }
            })
        })
    }));
V0.displayName = "KintuCheckout";
const IA = () => {
    const [e, t] = m.useState(0)
        , [n, r] = m.useState(1200);
    m.useEffect(() => {
        const i = parseInt(localStorage.getItem("totalBalance") || "0");
        t(Math.min(i, 2e5))
    }
        , []),
        m.useEffect(() => {
            if (n <= 0)
                return;
            const i = setInterval(() => {
                r(s => s - 1)
            }
                , 1e3);
            return () => clearInterval(i)
        }
            , [n]);
    const o = i => {
        const s = Math.floor(i / 60)
            , a = i % 60;
        return `${String(s).padStart(2, "0")}:${String(a).padStart(2, "0")}`
    }
        ;
    return p.jsxs("div", {
        className: "min-h-screen bg-white flex flex-col",
        children: [p.jsx("header", {
            className: "w-full p-4 flex justify-center",
            children: p.jsxs("div", {
                className: "flex items-center",
                children: [p.jsx("h1", {
                    className: "text-4xl font-black text-black",
                    children: "cupom"
                }), p.jsx("div", {
                    className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center ml-1",
                    children: p.jsx("span", {
                        className: "text-black font-bold text-sm",
                        children: "$"
                    })
                }), p.jsx("div", {
                    className: "ml-1",
                    children: p.jsx("span", {
                        className: "text-sm font-medium text-gray-600 block leading-tight",
                        children: "DA VEZ"
                    })
                })]
            })
        }), p.jsxs("main", {
            className: "w-full max-w-md p-4 flex-grow flex flex-col mx-auto",
            children: [p.jsxs(V.div, {
                className: "bg-red-600 text-white p-4 rounded-xl text-center mb-6 shadow-lg",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                children: [p.jsx("p", {
                    className: "font-bold text-lg",
                    children: "TEMPO LIMITADO!"
                }), p.jsx("p", {
                    className: "text-5xl font-bold tracking-wider my-2",
                    children: o(n)
                }), p.jsx("p", {
                    className: "text-sm",
                    children: "Complete seu checkout antes que o tempo acabe"
                })]
            }), p.jsxs(V.div, {
                className: "bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center mb-6 shadow-lg",
                initial: {
                    opacity: 0,
                    scale: .9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .5,
                    delay: .2
                },
                children: [p.jsx("h2", {
                    className: "text-2xl font-bold text-green-800",
                    children: "Seu Saque Aprovado!"
                }), p.jsxs("p", {
                    className: "text-4xl font-bold text-green-700 my-4 flex items-center justify-center",
                    children: [p.jsx("span", {
                        className: "text-4xl mr-2",
                        role: "img",
                        "aria-label": "money bag",
                        children: "💰"
                    }), e.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "AOA"
                    }).replace("AOA", "Kz")]
                }), p.jsx("p", {
                    className: "text-green-700 font-medium text-sm",
                    children: "Valor será transferido após confirmação do pagamento"
                })]
            }), p.jsx(V0, {})]
        })]
    })
}
    ;
function _A() {
    return p.jsxs(p.Fragment, {
        children: [p.jsxs(lu, {
            children: [p.jsx("title", {
                children: "Cupom da Vez - Ganhe Dinheiro com Cupons"
            }), p.jsx("meta", {
                name: "description",
                content: "Participe do Cupom da Vez e ganhe dinheiro validando cupons de desconto. Sistema seguro e confiável para renda extra."
            }), p.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }), p.jsx("meta", {
                name: "theme-color",
                content: "#ffd700"
            })]
        }), p.jsxs(aS, {
            children: [p.jsx(OT, {}), p.jsx("div", {
                className: "mobile-container",
                children: p.jsxs(oS, {
                    children: [p.jsx(xt, {
                        path: "/",
                        element: p.jsx(ZN, {})
                    }), p.jsx(xt, {
                        path: "/identificacao",
                        element: p.jsx(JN, {})
                    }), p.jsx(xt, {
                        path: "/validacao/:step",
                        element: p.jsx(AA, {})
                    }), p.jsx(xt, {
                        path: "/limite-atingido",
                        element: p.jsx(jA, {})
                    }), p.jsx(xt, {
                        path: "/metodo-saque",
                        element: p.jsx(RA, {})
                    }), p.jsx(xt, {
                        path: "/confirmacao-seguranca",
                        element: p.jsx(MA, {})
                    }), p.jsx(xt, {
                        path: "/final",
                        element: p.jsx(DA, {})
                    }), p.jsx(xt, {
                        path: "/payment-video",
                        element: p.jsx(OA, {})
                    }), p.jsx(xt, {
                        path: "/checkout",
                        element: p.jsx(IA, {})
                    })]
                })
            }), p.jsx(LT, {})]
        })]
    })
}
cl.createRoot(document.getElementById("root")).render(p.jsx(G.StrictMode, {
    children: p.jsx(_A, {})
}));

function test() { alert("adorable") }