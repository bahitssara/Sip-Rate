import React from 'react';
import './HomePage.css'
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';

class HomePage extends React.Component {
    render() {
        return(
            <section className='home-screen'>
                <div className='description'>
                    <h2>Welcome to Sip and Rate!</h2>
                        <p>Ever had a wine or beer that you LOVED but can't remember the name? Maybe you're at the store and see a wine or beer that you can't remember if you've had or if you even liked it all! This is where that ends. Search a beverage and add your personal opinion and review to your profile. You can revisit whenenver you need, and always keep track of what you loved, and what wasn't your style!</p>
                        <h3>All you have to do is <Link to='/signin'>Sign In</Link> or <Link to='/signup'>Sign Up</Link> now to get started!</h3>
                </div>
                <LoginForm />
            </section>
        )
    }
}

export default HomePage;