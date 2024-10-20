import {LOGO_URL} from "../utils/constant"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";




const Header = ()=>{
    const [loginBtn,setLoginBtn] =useState('Login')
    const loginfunc=()=>{
        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")
    }
    const onlineStatus = useOnlineStatus()

    const cartItem =useSelector((store)=>store.cart.items)
    return (
        <div className="flex justify-between bg-pink-300 shadow-lg"> 
         <img className="w-28 h-28" src={LOGO_URL}/>
        <ul className="flex align-middle p-4 m-4">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="about">about</Link></li>
            <li className="px-4"><Link to="contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/cart"  >Cart ({cartItem.length})</Link></li>
            <li className="px-4"><button onClick={loginfunc}>{loginBtn}</button></li>
            <li> Network Status{onlineStatus===true? "🟢" : "🔴"}</li>

        </ul>

        </div>
    )
}

export default Header