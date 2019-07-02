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
                <Link to='/profilepage' className='profile-link'>
                <span title='Your Reviews'><i className="far fa-user-circle" /></span>           
                </Link>
                <Link to='/searchpage'>
                <span title='Search'><i className="fas fa-search" /></span>
                </Link>
                <Link
                    className='logout-link'
                    onClick={this.handleLogoutClick}
                    to='/'>
                <span title='Logout'><i className="fas fa-sign-out-alt"/></span>
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='header-logged-out'>
            <Link
              className='register-link'
              to='/signup'>
              Register {' '}
              <i className="fas fa-user-plus" />
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
                    <header>
                        <Link className='banner-link'
                        to='/'>
                        <h1>Sip and Rate</h1>
                        </Link>
                    </header>
            </div>
            )
    }
    
}

export default Header;