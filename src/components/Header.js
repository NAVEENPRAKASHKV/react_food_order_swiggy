import {LOGO_URL} from "../utils/constant"
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Header = ()=>{
    const [loginBtn,setLoginBtn] =useState('Login')
    const loginfunc=()=>{
        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")
    }
    return (
        <div className="header-class"> 
         <img src={LOGO_URL}/>
        <ul className="nav-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">about</Link></li>
            <li><Link to="contact">Contact Us</Link></li>
            <li><Link to="more">more</Link></li>
            <li><button onClick={loginfunc}>{loginBtn}</button></li>
        </ul>

        </div>
    )
}

export default Header