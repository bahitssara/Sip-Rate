import React from 'react';
import './LoginForm.css';
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'


class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    };

    state = { error: null }; 

    handleSubmitJwtAuth = ev => {
        ev.preventDefault();
        this.setState({ error: null});
        const { email, password } = ev.target
           AuthApiService.postLogin({
             email: email.value,
             password: password.value,
           })
             .then(res => {
               TokenService.saveEmail(email.value)
               email.value = ''
               password.value = ''
               TokenService.saveAuthToken(res.authToken)
               window.location = '/';
            })
             .catch(res => {
               this.setState({ error: res.error })
             })
    }
    render(){
        return(
            <div className="login-form">
                <form className="sign-in-main" onSubmit={this.handleSubmitJwtAuth}>
                    <fieldset className='login-fieldset'>
                        <legend className='sign-in-legend'>Sign In</legend>
                            <label htmlFor='email' className='sign-in-email'>Email</label>
                                <input 
                                    type='text' 
                                    name='email' 
                                    id='email-input' 
                                />
                            <label htmlFor='password' className='sign-in-password'>Password</label>
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