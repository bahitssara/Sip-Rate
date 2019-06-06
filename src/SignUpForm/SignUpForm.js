import React from 'react';
import './SignUpForm.css';
import SipRateContext from '../SipRateContext'



class SignUpForm extends React.Component {
    static contextType = SipRateContext;
    
    handleCreateAccount = e => {
        this.props.history.push('/searchpage')
    }

    render() {
        return(
            <section className='signup-page'>
                <div className='sign-up-description'>
                    <h3>Sign up to get started rating your favorite wine and beer!</h3>
                </div>
                <form className='sign-up-main' onSubmit={e => this.handleCreateAccount(e)}>
                    <fieldset>
                        <legend>Sign Up</legend>
                            <label>First Name</label>
                            <input 
                                type='text'
                                name='first-name'
                                id='first-name-input'
                            />
                            <label>Last Name</label>
                            <input 
                                type='text'
                                name='last-name'
                                id='last-name-input'
                            />
                            <label>Username</label>
                            <input 
                                type='text' 
                                name='username' 
                                id='username-input' 
                                /*value='username'*/ />
                            <label>Email</label>
                            <input 
                                type='text' 
                                name='email' 
                                id='email-input' 
                                /*value='email'*/ />
                            <label>Password</label>
                            <input 
                                type='text' 
                                name='password' 
                                id='password-input' 
                                /*value='password'*/ />
                            <button className='sign-up-button'>Create Account</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default SignUpForm;