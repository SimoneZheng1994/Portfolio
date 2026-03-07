import React, { useState } from 'react';
import "./LoginSignUp.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const LoginSignUp = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login" ? <div></div> :
                <div className="input">
                    <img src={user_icon} alt="/"></img>
                    <input type="text" placeholder="Username"></input>
                </div>}
                <div className="input">
                    <img src={email_icon} alt="/"></img>
                    <input type="e-mail" placeholder="E-mail" ></input>
                </div>
                <div className="input">
                    <img src={password_icon} alt="/"></img>
                    <input type="password" placeholder="Password" ></input>
                </div>
                {action==="Sign Up" ? <div></div> :
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    );
};