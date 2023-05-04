import "./login.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SensorDoorOutlined } from "@mui/icons-material";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic
    };
    return (
        <div className="login">
            
            <div className="loginWrapper">
                <div className="loginLogo">
                    WeSocial

                </div>
                
                <div className="loginFormWrapper">
             
                    <div className="loginForm">
                        <form onSubmit={handleSubmit}>
                            <label> 
                            <div className="loginText">
                Email:
            </div>
                            <input type="email" value={email} onChange={handleEmailChange} />
                            </label>
                           
                            <br />
                            <label>
                            <div className="loginText">
                PassSlovo
            </div>
                                <input type="password" value={password} onChange={handlePasswordChange} />
                            </label>
                            <br />
                            <SensorDoorOutlined />
                            <button type="submit">Sign In</button>
                        </form>
                        <p>Don't have an account yet?</p>
                        <div className="buttonToRegister">
                            <Link className="link" to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
