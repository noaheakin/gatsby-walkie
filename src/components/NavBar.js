import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/walkie-logo.png';

const NavBar = props => {
    return (
        <div className="navbar">
            <div class="container h-8 flex flex-row mx-auto my-5">
                <img className="logo" src={logo}/>
                <div class="flex-grow" />
                <Link to="/features" class="text-gray-500 hover:text-gray-900 px-5">Features</Link>
                <Link to="/roadmap" class="text-gray-500 hover:text-gray-900 px-5">Roadmap</Link>
                <Link to="/contact" class="text-gray-500 hover:text-gray-900 px-5">Contact</Link>
            </div>   
        </div>
    )
}

export default NavBar;