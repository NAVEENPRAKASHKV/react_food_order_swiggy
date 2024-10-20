import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../store/CartSlice";

const ItemList = (props) => {
  const { data } = props;
  

  const dispatch = useDispatch()
  const handleAddition=(item)=>{
      dispatch(addItem(item))
      console.log(item)
  }
  
  return (
    <div>
    
    {data?.map((item)=>{
      console.log(item)
      return (
        <div key={item.card.info.id} className="border-b-2 p-4 m-2 flex justify-between ">
          <div className="w-9/12">
          <h4 className="text-lg font-bold">{ item.card?.info.name}</h4>
          <h6>₹ { item.card?.info.price/100}</h6>
          <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative p-2">
            <img src={CDN_URL+item.card?.info?.imageId} alt="food-pic" className="object-fill w-screen h-35" />
            <button className=" px-1 text-neutral-50 bg-black rounded-lg absolute left-9 bottom-2 active:bg-green-400 " onClick={()=>handleAddition(item)}>Add +</button>
          </div>
        </div>
        
      )
    })} 
    
    
    </div>
  )
};

export default ItemList;


{/* <div>
      <h1>{item.card.info.name}</h1>
      <h4>{item.card.info.price/100}</h4>
      <p>{item.card.info.description}</p>
      <hr></hr>
    </div> */}