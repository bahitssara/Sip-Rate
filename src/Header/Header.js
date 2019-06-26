import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import TokenService from '../services/token-service';

class Header extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='header-logged-in'>
                <Link to='/' className='title'>Sip and Rate</Link>
                <Link to='/profilepage' className='homepage'>
                    <i class="fas fa-home" />
                </Link>
                <Link
                    className='logout-link'
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='header-logged-out'>
            <Link to='/' className='title'>Sip and Rate</Link>
            <Link
              className='register-link'
              to='/signup'>
              Register
            </Link>
          </div>
        )
    }
    render() {
        return(
            <div className='header'>
                <nav role="navigation">
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </nav>
                    <header role="banner">
                        <h1>Sip and Rate</h1>
                    </header>
            </div>
            )
    }
    
}

export default Header;