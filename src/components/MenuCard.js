import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import {Menu_URL} from "../utils/constant"
import Shimmer from "./Shimmer";

const MenuCard = ()=>{
    const [resInfo,setResInfo] =useState(null)
    const {resId} = useParams();
    const fetchData=async ()=>{
        const data = await fetch(Menu_URL+resId)
        const jsObj =await data.json()
        console.log(jsObj)
        setResInfo(jsObj?.data?.cards[2]?.card?.card?.info)
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(resInfo===null)return <Shimmer/>
    const {name,avgRatingString,totalRatingsString} =resInfo 

    return(
        <div>
            <h1>{name}</h1>
            <h6>the rating {avgRatingString} is done by {totalRatingsString}</h6>
            
            
        </div>
    )

}

export default MenuCard