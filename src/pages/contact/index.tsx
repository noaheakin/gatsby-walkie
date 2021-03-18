import React from 'react';
import contactImg from '../../images/contact.webp';
import { Link } from 'gatsby';
import NavBar from '../../components/NavBar';

export default function Contact() {
    return (
        <div>
            <NavBar />
            <div className="flex-col justify-center">
                <p>Too busy! Try again later...</p>
                <img src={contactImg} />
                <div className="flex justify-around my-4">
                    <Link to='/contact/phone'>
                        <button type="button">Call us</button>
                    </Link>
                    <Link to='/contact/email'>
                        <button type="button">Email us</button>
                    </Link>
                    <Link to='/'>
                        <button type="button">Return Home</button>
                    </Link>
                </div> 
            </div>
        </div>
    )
}