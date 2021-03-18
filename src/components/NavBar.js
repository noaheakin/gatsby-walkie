import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/walkie-logo.png';
const activeStyles = {
    background: 'red'
};
const NavBar = () => {
    return (React.createElement("div", { className: "navbar" },
        React.createElement("div", { className: "container h-8 flex flex-row mx-auto my-5" },
            React.createElement(Link, { to: "/" },
                React.createElement("img", { className: "h-8", src: logo })),
            React.createElement("div", { className: "flex-grow" }),
            React.createElement("div", { className: "justify-between" },
                React.createElement(Link, { id: "navLink", to: "/features", className: "text-gray-500 hover:text-gray-900 mx-1 px-5" }, "Features"),
                React.createElement(Link, { id: "navLink", to: "/roadmap", className: "text-gray-500 hover:text-gray-900 mx-1 px-5" }, "Roadmap"),
                React.createElement(Link, { id: "navLink", to: "/contact", className: "text-gray-500 hover:text-gray-900 mx-1 px-5" }, "Contact")))));
};
export default NavBar;
