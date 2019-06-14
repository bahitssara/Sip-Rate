import React from 'react';
import './LoginForm.css';
import SipRateContext from '../SipRateContext';
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'


class LoginForm extends React.Component {
    static contextType = SipRateContext;

    handleLogin = ev => {
        ev.preventDefault();
        const { email, password } = ev.target
           AuthApiService.postLogin({
             email: email.value,
             password: password.value,
           })
             .then(res => {
               email.value = ''
               password.value = ''
               TokenService.saveAuthToken(res.authToken)
               this.props.history.push('/profilepage') 
            })
             .catch(res => {
               this.setState({ error: res.error })
             })
    }
    render(){
        return(
            <div className="login-form">
                <form className="sign-in-main" onSubmit={this.handleLogin}>
                    <fieldset>
                        <legend>Sign In</legend>
                            <label htmlFor='email'>Email</label>
                                <input 
                                    type='text' 
                                    name='email' 
                                    id='email-input' 
                                />
                            <label htmlFor='password'>Password</label>
                                <input 
                                    type='text' 
                                    name='password' 
                                    id='password-input' 
                                />
                            <button className='sign-in-button'>Sign In</button>
                    </fieldset>
                </form>
            </div>
        )
    }
        
}

export default LoginForm;