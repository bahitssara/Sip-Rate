import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
    <div className='header'>
        <nav role="navigation">
            <Link to='/' className='title'>Sip and Rate</Link>
            <Link to='/signin' className='sign-in'>Sign-In/Out</Link>
        </nav>
            <header role="banner">
                <h1>Sip and Rate</h1>
            </header>
    </div>
    )
}