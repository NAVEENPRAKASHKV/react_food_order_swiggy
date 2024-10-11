import React from 'react';
import ReactDOM from 'react-dom/client';
import RestCard from "./RestCard"
import resList from '../utils/mockData';

import {useState,useEffect} from "react"
import Shimmer from "../components/Shimmer"


const Body =()=>{
         const [newResList,setNewResList] =useState([])
         const [filterList,setFilterList] =useState([])
         const [searchText,setSearchText] =useState("")
// fetching the data
          const fetchData =() => {
            try {setTimeout(()=>{
              setNewResList(resList)
              setFilterList(resList)
            },500)
                        
              } catch (error) {
                console.error('Error fetching data:');
            }
        };
          useEffect(() => {
            fetchData();
        }, []);
            const filterFunc=()=>{
            let filetrData=resList.filter((res)=>{ return res.info.avgRating>4.6})
            setNewResList(filetrData)
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
                let filetrData =resList.filter((res)=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())})
                setFilterList(filetrData)
              }
              }>Search</button>
              <button className='filter-btn' onClick={filterFunc} >filter</button>
          </div>
            
            <div className="rest-card" >
            {filterList.map((res)=>{
                return(
                    <RestCard key={res.info.id} resData={res}/>
                )
            })}
            </div>
        </div>
    )
}

export default Body