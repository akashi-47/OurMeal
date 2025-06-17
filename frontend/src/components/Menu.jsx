import Dish from './helpersComponents/dish';
import {menu_list } from '../assets/assets';
import { useContext, useEffect, useState } from 'react';
import { storeContext } from '../context/storecontext';
import style from "../css/menu.css"

export default function Menu({setDish}) {
    const {refs} = useContext(storeContext);

    const [dishs,setDishs]=useState(menu_list.map(item=>({
         name:item.menu_name,
         isSelected:false})));

         const dishSelection = (name) => {
            setDishs(dishs.map(dish =>
              dish.name === name ? { ...dish, isSelected: !dish.isSelected } : {...dish, isSelected: false}
            ));
          };
          const getDishSelectionStatus = (name) => {
            const dish = dishs.find(dish => dish.name === name);
            return dish ? dish.isSelected : null;
          };
    return (
        <div className="menu" ref={refs.menu} >
            <p className="text-xl md:text-3xl font-bold ">Explore our menu</p>
            <p className='my-2 md:mb-8 text-sm md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Animi voluptatum quaerat quos, omnis corporis deleniti assumenda perspiciatis cupiditate, 
                officia eveniet provident harum voluptates?</p>
            <div className="listmenu grid justify-between grid-cols-2 place-items-center gap-2 my-3 md:grid-cols-4 xl:grid-cols-8">
                {menu_list.map((dish, index) => (
                    <Dish key={index} src={dish.menu_image} name={dish.menu_name} ds={setDish} dishes={dishs} setDishes={dishSelection} getDishSelectionStatus={getDishSelectionStatus}  />
                ))}
            </div>
            <hr className="text-black my-7" />
        </div>
    );
}