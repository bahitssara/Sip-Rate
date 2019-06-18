import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import TokenService from '../services/token-service'
import ProfilePage from '../ProfilePage/ProfilePage'
import WelcomePage from '../WelcomePage/WelcomePage';

class HomePage extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLoggedInLink() {
        return (
            <div className='header-logged-in-profile'>
                <Link to='/addreview' className='logged-in-search'>Add new review <i className="fas fa-wine-glass-alt"></i></Link>
                { ' ' }
                <Link to='/searchpage' className='logged-in-search'>Search for beverage<i className="fas fa-wine-glass-alt"></i></Link>
                <ProfilePage />
            </div>
        )
    } 

    renderLoginForm() {
        return (
            <div className='login'>
            <WelcomePage />
            <LoginForm />
            </div>
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