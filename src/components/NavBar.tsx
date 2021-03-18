import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/walkie-logo.png';

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
                </div>
            </div>   
        </div>
    )
}

export default NavBar;