import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const MenuCard = () => {
  const { resId } = useParams();
  // custom hook
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  // using shimmer UI
  if (resInfo === null) return <Shimmer />;

  const { name, avgRatingString, totalRatingsString } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div>
      <h1 className="text-center p-4 text-2xl font-bold">{name}</h1>
      <h6 className="text-center">
        {avgRatingString}⭐ {totalRatingsString}
      </h6> 
      {categories.map((category,index)=>{
         return <RestaurantCategory key={index}  category={category} />

      })}
      </div>
  )

  }
export default MenuCard



