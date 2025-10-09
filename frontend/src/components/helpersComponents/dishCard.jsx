import { useState,useContext,useEffect } from "react";
import { assets } from "../../assets/assets";
import React from "react";
import { storeContext } from "../../context/storecontext";

export default function Card({keyt,name,img,price,desc,category})
{
    
   
    const {url} = useContext(storeContext);
    const {chosedItems,removeItem,addItemt,setChosedItems,updateNumberItems}= useContext(storeContext)

   var number=0;
    const addClicked =()=>
    {
        
        addItem();
        addItemt(keyt,number);
        number=1;
    
    }
    useEffect(()=>
    {
        console.log(chosedItems)

    },[chosedItems])
    const foundItem = chosedItems.find(item=>item.id===keyt);
 
    if(foundItem)
    {
        number = foundItem.number;
    }
    useEffect(()=>
    {
        console.log(number);

    },[number])
    const addItem=()=>
    {
        updateNumberItems(keyt,++number)
    }
    const mineceItem=()=>
        {
            if(number===1)
            {
                updateNumberItems(keyt,0);
                
                removeItem(keyt);
               return ;
            }
           updateNumberItems(keyt,--number)
        }

    return (
        <React.Fragment>

        <div className="card h-96 max-w-72 shadow-md relative hover:scale-105 transition-transform duration-150">
       
            <img src={url+ "/images/"+img} alt="" className="img-food" /> 
         
          
          {number!==0 ?   <div className="incr">
                <button className="bg-red-200 w-7 rounded-full text-red-500 font-bold text-xl" onClick={mineceItem} >-</button>
                <span>{number}</span>
                <button className="bg-green-200 w-7 rounded-full  text-green-500 text-xl " onClick={addItem}>+</button>
            </div> :  <button onClick={()=> addClicked()} className="absolute addb right-2"><i class="fa-solid fa-plus"></i></button>
    }
          
                <div className="my-5 mx-4">
                    <div className="flex justify-between h-4 items-center mb-2">
                <p className="font-bold text-xl">{name}</p>
                <img className="h-4" src={assets.rating_starts} alt="" />
                </div>
                <p className="text-sm">{desc}</p>
                <p className="text-xl text-orange-600 font-bold mt-4">${price}</p>

            </div>


        </div>
        </React.Fragment>

    );
}