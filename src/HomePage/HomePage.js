import React from 'react';
import './HomePage.css'
import LoginForm from '../LoginForm/LoginForm';
import TokenService from '../services/token-service'
import WelcomePage from '../WelcomePage/WelcomePage';
import Reviews from '../Reviews/Reviews';

class HomePage extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

// Display all reviews path once user is logged in 
    renderLoggedInPath() {
        return (
            <section className='header-logged-in-profile'>
                <Reviews />
            </section>
        )
    }

// Display login form and welcome page when user is logged out
    renderLoginForm() {
        return (
            <section className='login'>
                <WelcomePage />
                <LoginForm />
            </section>
        )
    }
    render() {
        return (
            <section className='home-screen'>
                {TokenService.hasAuthToken()
                    ? this.renderLoggedInPath()
                    : this.renderLoginForm()}
            </section>
        )
    }
}

export default HomePage;