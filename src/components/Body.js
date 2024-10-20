import React from 'react';
import RestCard from "./RestCard"
import resList from '../utils/mockData';
import {useState,useEffect} from "react"
import Shimmer from "../components/Shimmer"
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body =()=>{
         const [newResList,setNewResList] =useState([])
         const [filterList,setFilterList] =useState([])
         const [searchText,setSearchText] =useState("")

         const onlineStatus = useOnlineStatus()
        
         // fetching the data
         const fetchData = async() => {
            try {
              const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=9.954150799999999&lng=76.37964529999999')
              const jsObj = await data.json()
              const swiggyResList =jsObj?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
              setNewResList(swiggyResList||resList)
              setFilterList(swiggyResList||resList)         
              } catch (error) {
                console.error(`Error fetching data: ${error}`)
            }
        };
          useEffect(() => {
            fetchData();
        }, []);
        
            const filterFunc=()=>{
            let filetrData=newResList.filter((res)=>{ return res.info.avgRating>4.6})
            setFilterList(filetrData)
          }    
          if (onlineStatus===false){return (
            <h1>you are offline</h1>
           )}

    return newResList.length === 0? <Shimmer/>:  (
        <div className="body-class">
          {/* search and filter button */}
          <div className='m-6'>
              <input className=' mx-3 border border-solid border-black' type="text" value ={searchText} onChange={(e)=>{
                let val =e.target.value
                setSearchText(val)
              }}></input>
              <button className='px-4 py-2 mx-3 bg-green-300 rounded-lg' onClick={()=>{
                let filetrData =newResList.filter((res)=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())})
                setFilterList(filetrData)
              }
              }>Filter</button>
              <button className='px-4 py-2 mx-20 bg-gray-200 rounded-lg' onClick={filterFunc} >Top Rated Hotel</button>
          </div>
            
            <div className="flex flex-wrap " >
            {filterList.map((res)=>{
                return(
                  <Link key={res.info.id} to={"/restaurant/"+res.info.id} ><RestCard  resData={res}/></Link>
                    
                )
            })}
            </div>
        </div>
    )
}

export default Body