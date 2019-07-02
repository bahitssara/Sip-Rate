import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

class WelcomePage extends React.Component {
    render() {
        return(
            <section className='description'>
                    <h2 className='header-description'>Welcome to Sip and Rate!{' '}<br/><i className="fas fa-beer" />{' '}<i className="fas fa-wine-glass-alt" /></h2>
                        <p>Ever had a wine or beer that you LOVED but can't remember the name? Maybe you're at the store and see a wine that you can't remember if you've had before or if you even liked it all! This is where that ends. Search a wine or beer and add your review! You can revisit whenenver you need, and always keep track of what you loved, and what wasn't your style!</p>
                        <h3>All you have to do is Sign In or <Link  className='signup-link' to='/signup'>Sign Up</Link> now to get started!</h3>
                </section>
        )
    }
}

export default WelcomePage;