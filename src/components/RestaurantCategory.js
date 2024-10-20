import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const [show, setShow] = useState(false);
  const { category } = props;
  const data = category.card.card;
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="w-6/12 mx-auto my-4 p-3  bg-gray-50 rounded-md cursor-pointer  shadow-lg"
        
      >
        <div className="flex justify-between " onClick={handleShow}>
          <h1 className="font-bold">
            {data.title} ({data.itemCards.length})
          </h1>
          <h1>⬇️</h1>
        </div>
        <div>{show && <ItemList data={data.itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantCategory;
