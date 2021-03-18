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
var NavBar_1 = require("../components/NavBar");
var walkie_screen_jpg_1 = require("../images/walkie-screen.jpg");
var closer_together_png_1 = require("../images/closer-together.png");
var distraction_free_png_1 = require("../images/distraction-free.png");
var voice_only_png_1 = require("../images/voice-only.png");
var App = function () {
    return (jsx_runtime_1.jsxs("div", __assign({ className: "App" }, { children: [jsx_runtime_1.jsx(NavBar_1["default"], {}, void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "flex pt-8 bg-white mt-28 mx-auto space-y-2 xs:py-0 xs:flex-col xs:items-center xs:space-y-0" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "sm:order-10 w-1/2 text-left px-20" }, { children: [jsx_runtime_1.jsx("h1", __assign({ className: "text-4xl py-5 font-extrabold tracking-wide leading-snug" }, { children: "Simple, real time voice chat for your remote team." }), void 0),
                            jsx_runtime_1.jsx("h3", __assign({ className: "text-xl" }, { children: "Walkie is a better way to communicate for distributed teams that don't want to spend all day in dry text channels." }), void 0),
                            jsx_runtime_1.jsxs("form", __assign({ className: "my-10" }, { children: [jsx_runtime_1.jsx("input", { className: "border border-r-0 rounded-l-lg py-3 border-gray-300", type: "text", placeholder: "   > work email", required: true }, void 0),
                                    jsx_runtime_1.jsx("button", __assign({ className: "border border-black bg-black text-white px-3 py-3 font-bold rounded-r-lg" }, { children: "Become Founding User" }), void 0)] }), void 0)] }), void 0),
                    jsx_runtime_1.jsx("img", { className: "md:w-1/2", src: walkie_screen_jpg_1["default"] }, void 0)] }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "bg-black flex py-20 justify-items-center px-14 text-white" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col space-y-3 pr-12" }, { children: [jsx_runtime_1.jsx("img", { className: "h-15 w-20", src: voice_only_png_1["default"] }, void 0),
                            jsx_runtime_1.jsx("h2", __assign({ className: "text-2xl" }, { children: "Voice Only" }), void 0),
                            jsx_runtime_1.jsx("p", { children: "A voice only communication tool that enables teams to communicate with emotion and purpose." }, void 0)] }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col space-y-3 pr-12" }, { children: [jsx_runtime_1.jsx("img", { className: "h-14 w-14", src: distraction_free_png_1["default"] }, void 0),
                            jsx_runtime_1.jsx("h2", __assign({ className: "text-2xl" }, { children: "Distraction Free" }), void 0),
                            jsx_runtime_1.jsx("p", { children: "No more \u2318-tabbing. Spend less time in slack channels and more time on the work that actually matters." }, void 0)] }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col space-y-3" }, { children: [jsx_runtime_1.jsx("img", { className: "h-15 w-20", src: closer_together_png_1["default"] }, void 0),
                            jsx_runtime_1.jsx("h2", __assign({ className: "text-2xl" }, { children: "Closer Together" }), void 0),
                            jsx_runtime_1.jsx("p", { children: "Subtle hints of presence so that even the most distributed teams feel connected across continents." }, void 0)] }), void 0)] }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-column" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "flex" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-column" }, { children: [jsx_runtime_1.jsx("h2", { children: "Have fewer meetings and make faster decisions" }, void 0),
                                    jsx_runtime_1.jsx("p", { children: "Walkie keeps people out of unnecessary meetings by providing the value of real time communication with out the need for everyone to drop everything." }, void 0)] }), void 0),
                            jsx_runtime_1.jsx("img", { src: process.env.PUBLIC_URL + '/images/request-access1.png' }, void 0)] }), void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "flex" }, { children: jsx_runtime_1.jsx("img", { src: process.env.PUBLIC_URL + '/images/send-us-feedback.jpg' }, void 0) }), void 0),
                    jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("img", { src: process.env.PUBLIC_URL + '/images/request-access2.jpg' }, void 0) }, void 0)] }), void 0)] }), void 0));
};
exports["default"] = App;
