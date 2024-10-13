import { useRouteError } from "react-router-dom"
import React from "react";
const Error =()=>{
    const err = useRouteError();
    
    return(
        <div>
        <h1>Oops!</h1>
        <h1>some thing went wrong</h1>
        </div>
        
    )
}

export default Error