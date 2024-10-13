import React from 'react';
import ReactDOM from 'react-dom/client';
import RestCard from "./RestCard"
// import resList from '../utils/mockData';

import {useState,useEffect} from "react"
import Shimmer from "../components/Shimmer"
import { Link } from 'react-router-dom';


const Body =()=>{
         const [newResList,setNewResList] =useState([])
         const [filterList,setFilterList] =useState([])
         const [searchText,setSearchText] =useState("")
// fetching the data
          const fetchData = async() => {
            try {
              const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=9.954150799999999&lng=76.37964529999999')
              const jsObj = await data.json()
    
              const swiggyResList =jsObj?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
              setNewResList(swiggyResList)
              setFilterList(swiggyResList)
                        
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
// return the JSX
    return newResList.length === 0? <Shimmer/>:  (
        <div className="body-class">
          {/* search and filter button */}
          <div className='search-filter'>
              <input type="text" value ={searchText} onChange={(e)=>{
                let val =e.target.value
                setSearchText(val)
              }}></input>
              <button onClick={()=>{
                let filetrData =newResList.filter((res)=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())})
                setFilterList(filetrData)
              }
              }>Search</button>
              <button className='filter-btn' onClick={filterFunc} >filter</button>
          </div>
            
            <div className="rest-card" >
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