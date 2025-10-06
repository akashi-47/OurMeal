/* eslint-disable react/prop-types */
import axios from "axios";
import { assets } from "../assets/assets"
import Dropdown from "./dropdown";
import { useEffect, useState } from "react";

const CartOrder=()=>
{
    
    const [orders,setOrders]= useState([]);
    const fetchOrders = async ()=>
      {
       
        try {
          const newUrl = `${import.meta.env.VITE_API_URL}/api/order/getOrder`;
          const result = await axios.get(newUrl);
          if(!result.data.success)
          {
            console.log(result)
            return false;
          }
          const completeOrders = result.data.orders.map((order)=>({...order,isDropped:false}))
           
          console.log(result)
          setOrders(completeOrders)
          console.log(completeOrders);
          
        } catch (error) {
          console.log(error.message)
          
        }

      }
      const handleDrop = (index)=>
      {
        setOrders(prev=>prev.map((order,i)=>
          i===index ? {...order,isDropped:!order.isDropped} : order
        ))

      }
     
    
    useEffect(()=>
    {
   fetchOrders();

    },[])
    const onTrack =async (e)=>
    {
     
      try {
        const selected = e.target.value;
        console.log(selected)
        const i = e.target.name;
        const id = orders.at(i)._id;
        console.log(id);
        const newUrl = `${import.meta.env.VITE_API_URL}/api/order/setStateOrder/`+id;
        const result = await axios.put(newUrl,{state:selected});
          console.log(result.data.message);
          fetchOrders();
        
      } catch (error) {
        console.log(error.message)
        
      }


    }
    return (
      <div className="">
{
  orders.map((order,index)=> ( 
   
    <div key={index} className="ordera mt-4 border-2 py-4 sm:flex-col md:min-h-fit flex items-center  min-h-96 justify-evenly ">
        <img src={assets.parcel_icon} alt="" className="md:hidden lg:block" />
        <button
          className="py-1 px-4 border-2 bg-orange-300 hover:bg-orange-100"
          onClick={()=>handleDrop(index)}
        >
          View items
        </button>
             <span style={{order:4}}>{order.totalPrice}</span>
        <span style={{order:5}}>items:{order.itemsNumber}</span>
        <span  className="order-6 fp relative w-32">{order.state}</span>
        <select name={index} onChange={onTrack} id="track" className="bg-red-100 py-2 px-5 order-7 outline-0">
          <option value="food processing">food processing</option>
          <option value="Out of delivery">Out of delivery</option>
          <option value="delivered">delivered</option>
        </select>
        <div className={`grided dropdown order-3 h-auto w-full flex justify-center  ${!order.isDropped && 'md:justify-start'} `}>

        {order.isDropped ? <Dropdown order={order} ></Dropdown> :  <span>{order.adresse}</span> }
        </div>
      </div>


  ))
}


      </div>
      
    )
}
export default CartOrder;