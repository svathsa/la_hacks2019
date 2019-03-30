import React, { Component } from 'react';
import logo from '../logo.png';
import './Login.css'

class Login extends Component {
    render() {
        return(
            <div class="login">
                <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src={logo} class="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3 login_container">
                        <button type="button" name="button" class="btn login_btn">Login</button>
                    </div>
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login