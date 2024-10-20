import  { useEffect, useState } from "react"
import {Menu_URL} from "./constant"


const useRestaurantMenu= (resId)=>{
 const [ resInfo,setResInfo] =useState(null)
    useEffect(()=>{
    fetchData()
    },[])
    const fetchData = async ()=>{
        try {
            const data = await fetch(Menu_URL+resId)
            const jsObj =await data.json()
            setResInfo(jsObj)
        } catch (error) {
            console.log(error)
        }
    }
    return (resInfo)
}


export default  useRestaurantMenu