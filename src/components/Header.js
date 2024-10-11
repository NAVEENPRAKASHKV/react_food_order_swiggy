import {LOGO_URL} from "../utils/constant"
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';



const Header = ()=>{
    const [loginBtn,setLoginBtn] =useState('Login')
    const loginfunc=()=>{
        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")
    }
    return (
        <div className="header-class"> 
         <img src={LOGO_URL}/>
        <ul className="nav-bar">
            <li>Home</li>
            <li>about</li>
            <li>more</li>
            <li><button onClick={loginfunc}>{loginBtn}</button></li>
        </ul>

        </div>
    )
}

export default Header