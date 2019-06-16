import React from 'react';
import './HomePage.css'
import {Link} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import TokenService from '../services/token-service'

class HomePage extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLoggedInLink() {
        return (
            <div className='header-logged-in'>
                <Link to={'/profilepage'}>
                    View Profile!
                </Link>
            </div>
        )
    }

    renderLoginForm() {
        return (
            <div className='login'>
            <LoginForm />
            </div>
        )
    }
    render() {
        return(
            <section className='home-screen'>
                <div className='description'>
                    <h2>Welcome to Sip and Rate!</h2>
                        <p>Ever had a wine or beer that you LOVED but can't remember the name? Maybe you're at the store and see a wine or beer that you can't remember if you've had or if you even liked it all! This is where that ends. <Link to='/searchpage'>Search</Link> a beverage and add your personal opinion and review to your profile. You can revisit whenenver you need, and always keep track of what you loved, and what wasn't your style!</p>
                        <h3>All you have to do is Sign In or <Link to='/signup'>Sign Up</Link> now to get started!</h3>
                </div>
                {TokenService.hasAuthToken()
                    ? this.renderLoggedInLink()
                    : this.renderLoginForm()}
            </section>
        )
    }
}

export default HomePage;