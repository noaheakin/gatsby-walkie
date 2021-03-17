import React from 'react';
import contactImg from '../../images/contact.webp';
import { Link } from 'gatsby';

const ContactLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
export default function Contact() {
    return (
        <div class="flex-col justify-center">
            <p>Too busy! Try again later...</p>
            <img src={contactImg} />
            <div class="flex justify-around my-4">
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
            <ul>
                <ContactLink to='/contact/email'>Email us</ContactLink>
                <ContactLink to='/contact/phone'>Call us</ContactLink>
            </ul> 
        </div>
    )
}