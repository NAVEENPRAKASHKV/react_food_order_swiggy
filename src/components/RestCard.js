import React from 'react';
import { CDN_URL } from '../utils/constant';




const RestCard=(props)=>{
    const {resData}= props;
    const {name,cuisines,avgRating,cloudinaryImageId} = resData.info;

    return(
        
         <div className="m-4 p-3 bg-gray-100 w-[250px] h-[300px] rounded-lg hover:bg-gray-300 ">
         <img className='w-[225px] h-[150px] rounded-lg ' src={CDN_URL+cloudinaryImageId}/>
        <h4 className='font-bold py-1 text-lg '>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h6> rating { avgRating}</h6>
        </div> 
    )
}




export default RestCard