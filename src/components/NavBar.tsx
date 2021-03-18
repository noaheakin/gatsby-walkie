import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../images/walkie-logo.png';

const activeStyles = {
    background: 'red'
}

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container h-8 flex flex-row mx-auto my-5">
                <Link to="/">
                        <img className="h-8" src={logo}/>
                </Link>
                <div className="flex-grow" />
                <div className="justify-between">
                    <Link id="navLink" to="/features" className="text-gray-500 hover:text-gray-900 mx-1 px-5">Features</Link>
                    <Link id="navLink" to="/roadmap" className="text-gray-500 hover:text-gray-900 mx-1 px-5">Roadmap</Link>
                    <Link id="navLink" to="/contact" className="text-gray-500 hover:text-gray-900 mx-1 px-5">Contact</Link>
                    {/* <a href="/features" class="text-gray-500 hover:text-gray-900 mx-1 px-5">Features</a>
                    <a href="/roadmap" class="text-gray-500 hover:text-gray-900 mx-1 px-5">Roadmap</a>
                    <a href="/contact" class="text-gray-500 hover:text-gray-900 mx-1 px-5">Contact</a> */}
                </div>
            </div>   
        </div>
    )
}

export default NavBar;