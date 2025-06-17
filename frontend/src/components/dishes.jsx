"use client";

import { useState, useEffect,useContext } from "react";
import Card from "./helpersComponents/dishCard";
import "../css/dishes.css";
import { storeContext } from "../context/storecontext";

export default function Dishes({ chosen }) {
  const [exist, setExist] = useState(true);
  const {foodList} = useContext(storeContext);
  
  
 
  const filtredFoodList = foodList.filter((item) =>
    item.category.toLowerCase().includes(chosen.toLowerCase())
  );
  useEffect(() => setExist(filtredFoodList.length > 0), [filtredFoodList]);

  return (
    <div className="dishes">
      <p className="text-xl md:text-3xl font-bold block mb-9">
        Top dishes near you and {chosen}
      </p>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center  gap-x-6 gap-y-10">
        {exist ? (
          filtredFoodList.map((card) => (
            <Card
              keyt={card._id}
              name={card.name}
              img={card.image}
              price={card.price}
              desc={card.description}
              category={card.category}
             
            ></Card>
          ))
        ) : (
          <p className="absolute text-lg text-orange-600 font-bold lg:text-2xl">
            Those dishes are not available
          </p>
        )}
      </div>
      <hr className="mt-8" />
    </div>
  );
}
