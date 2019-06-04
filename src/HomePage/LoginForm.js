import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {
    render(){
        return(
            <div className="login-form">
                <form className="sign-in-main">
                    <fieldset>
                        <legend>Sign In</legend>
                            <label htmlFor='email'>Email</label>
                                <input type='text' name='email' id='email-input' value='email' />
                            <label htmlFor='password'>Password</label>
                                <input type='text' name='password' id='password-input' value='password' />
                            <button className='sign-in-button' value='sign-in'>Sign In</button>
                    </fieldset>
                </form>
            </div>
        )
    }
        
}

export default LoginForm;