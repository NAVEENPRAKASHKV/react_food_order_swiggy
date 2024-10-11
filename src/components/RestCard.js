import React from 'react';
import ReactDOM from 'react-dom/client';


const RestCard=(props)=>{
    const {resData}= props;
    const {name,cuisines,avgRating,cloudinaryImageId} = resData.info;

    return(
        <div className="rest-card-wrapper">
         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h6> rating { avgRating}</h6>

         
        </div>
    )
}


export default RestCard