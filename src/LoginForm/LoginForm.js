import React from 'react';
import './LoginForm.css';
import SipRateContext from '../SipRateContext';


class LoginForm extends React.Component {
    static contextType = SipRateContext;

    handleLogin = e => {
        e.preventDefault();
        console.log('logged-in')
    }
    render(){
        return(
            <div className="login-form">
                <form className="sign-in-main" onSubmit={e => this.handleLogin(e)}>
                    <fieldset>
                        <legend>Sign In</legend>
                            <label htmlFor='email'>Email</label>
                                <input 
                                    type='text' 
                                    name='email' 
                                    id='email-input' 
                                    onChange={console.log('adding email')} />
                            <label htmlFor='password'>Password</label>
                                <input 
                                    type='text' 
                                    name='password' 
                                    id='password-input' 
                                    onChange={console.log('adding password')} />
                            <button className='sign-in-button'>Sign In</button>
                    </fieldset>
                </form>
            </div>
        )
    }
        
}

export default LoginForm;