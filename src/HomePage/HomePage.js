import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import TokenService from '../services/token-service'
import WelcomePage from '../WelcomePage/WelcomePage';
import Reviews from '../Reviews/Reviews';

class HomePage extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken() 
    }

    renderLoggedInLink() {
        return (
            <section className='header-logged-in-profile'>
                <Link to='/searchpage' className='logged-in-search'>Search for beverage<i className="fas fa-wine-glass-alt"></i></Link>
                <Reviews />
            </section>
        )
    } 

    renderLoginForm() {
        return (
            <section className='login'>
            <WelcomePage />
            <LoginForm />
            </section>
        )
    }
    render() {
        return(
            <section className='home-screen'>
                {TokenService.hasAuthToken()
                    ? this.renderLoggedInLink()
                    : this.renderLoginForm()}
            </section>
        )
    }
}

export default HomePage;