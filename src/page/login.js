import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'


function Login() {
    return (
        <div>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                        <Link className='efect' to="/admin">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </Link>                    
                </form>
            </div>
        </div>
    )
}

export default Login