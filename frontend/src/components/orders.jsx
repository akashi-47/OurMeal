import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../context/storecontext";
import Listitems from "./helpersComponents/listItems";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Orders = ()=>
{
 
    const navigate=useNavigate();
    const {getTotalPrice,chosedItems}= useContext(storeContext);

    
    const fee =0;
    
    

    return(
        
       
    <div className="orders-container flex flex-wrap  ">
        
      <Listitems></Listitems>
       <div className="proceed w-full md:w-1/2">
        <span className="text-2xl font-bold">Cart Totals</span>
        <div className="flex flex-col w-4/5 mt-3">
            <div className="border-b-2 flex justify-between  pb-2 mb-1"><span>SubTotal</span> <span>{getTotalPrice()}$</span></div>
            <div className="border-b-2 flex justify-between  pb-2 mb-1"><span>Delivrey fee</span> <span>{fee}$</span></div>
            <div className="border-b-2 flex justify-between  pb-2 mb-1"><span>Total</span> <span>{getTotalPrice()+fee}$</span></div>
        </div>
    
        <button className="mt-4 lg:mt-5 bg-orange-500 py-2 px-4 text-white text-sm  font-mono" onClick={()=>{
                chosedItems.length===0 ? toast.error("Please choose atleast one item") : 
            navigate("/order");

        }}>PROCEED TO CHECKOUT</button>

       </div>
       <div className="promo w-full md:w-1/2">
        <span>If you have any promocode put it here</span>
        <div className="mt-3 w-full relative">
            <input type="text" className="w-2/4 md:w-3/4 bg-slate-200 border-0 py-2 outline-0 px-1" placeholder="Your Promo Code" /> <button className="text-white bg-black absolute px-8 h-10 text-sm xl:px-14">Submit</button>
        </div>
       </div>
       
    </div>
    
    )

}
export default Orders;