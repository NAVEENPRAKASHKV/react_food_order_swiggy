import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../store/CartSlice";


const Cart = () => {
    const cartItem= useSelector((store)=>store.cart.items)
    const dispatch =useDispatch()
    const handleClear =()=>{
        dispatch(clearItem())
    }
  return (
    <div className="w-8/12 mx-auto">
      <h1 className="text-3xl font-bold text-center m-5">Cart</h1>
      <button className="bg-black text-white p-2 active:bg-red-700 rounded-lg" onClick={handleClear}>Clear Cart</button>
      <ItemList data={cartItem} />
    </div>
  );
};

export default Cart;
