import React from 'react';
import './SignUpForm.css';



class SignUpForm extends React.Component {
    render() {
        return(
            <section className='signup-page'>
                <div className='sign-up-description'>
                    <h3>Sign up to get started rating your favorite wine and beer!</h3>
                </div>
                <form className='sign-up-main'>
                    <fieldset>
                        <legend>Sign Up</legend>
                            <label>Username</label>
                            <input type='text' name='username' id='username-input' /*value='username'*/ />
                            <label>Email</label>
                            <input type='text' name='email' id='email-input' /*value='email'*/ />
                            <label>Password</label>
                            <input type='text' name='password' id='password-input' /*value='password'*/ />
                            <button className='sign-up-button' /*value='sign-up'*/>Create Account</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default SignUpForm;