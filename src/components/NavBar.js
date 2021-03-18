"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var gatsby_1 = require("gatsby");
var walkie_logo_png_1 = require("../images/walkie-logo.png");
var NavBar = function () {
    return (jsx_runtime_1.jsx("div", __assign({ className: "navbar" }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "container h-8 flex flex-row mx-auto my-5" }, { children: [jsx_runtime_1.jsx(gatsby_1.Link, __assign({ to: "/" }, { children: jsx_runtime_1.jsx("img", { className: "h-8", src: walkie_logo_png_1["default"] }, void 0) }), void 0),
                jsx_runtime_1.jsx("div", { className: "flex-grow" }, void 0),
                jsx_runtime_1.jsxs("div", __assign({ className: "justify-between" }, { children: [jsx_runtime_1.jsx(gatsby_1.Link, __assign({ id: "navLink", to: "/features", className: "text-gray-500 hover:text-gray-900 mx-1 px-5" }, { children: "Features" }), void 0),
                        jsx_runtime_1.jsx(gatsby_1.Link, __assign({ id: "navLink", to: "/roadmap", className: "text-gray-500 hover:text-gray-900 mx-1 px-5" }, { children: "Roadmap" }), void 0),
                        jsx_runtime_1.jsx(gatsby_1.Link, __assign({ id: "navLink", to: "/contact", className: "text-gray-500 hover:text-gray-900 mx-1 px-5" }, { children: "Contact" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
exports["default"] = NavBar;
