import { useState } from "react";

export default function Dish({src,name,ds,dishes,setDishes,getDishSelectionStatus})
{
  
    function handleClick()
    {
        getDishSelectionStatus(name) ? ds("") : ds(name);
        setDishes(name);
    }

   
    return(


        <div className="dish w-2/3 flex flex-col items-center text-nowrap">
           <button onClick={handleClick} className=""><img src={src} alt="" className={ `transition-all duration-300 ease-in-out ${getDishSelectionStatus(name) ? 'ring-4 ring-orange-500 rad scale-110' : ' imgMenu'} `} /> </button> 
            <p className=" mt-2">{name}</p>
           
        </div>


    );
}