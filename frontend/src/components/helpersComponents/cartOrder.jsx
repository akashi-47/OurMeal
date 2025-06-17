import { assets } from "../../assets/assets"
import Dropdown from "./dropdown";
import { useState,useContext } from "react";
import { storeContext } from "../../context/storecontext";
import axios from "axios";
import { useEffect } from "react";

const CartOrder=()=>
{
   
    const {url,userId} =useContext(storeContext);

  
    const [orders,setOrders]=useState([{isDropped:false}]);
    const fetchOrders = async ()=>
    {
      try {
     console.log("tffff"+userId);
        const newUrl = `${url}/api/order/getOrdersClient/${userId}`;
       
        const result = await axios.get(newUrl);
        if(result.data.success)
        {
          const orders = result.data.ordersClient;
          console.log(orders);
          setOrders(orders);
          console.log(orders);
          return true;
        }
        else 
        {
          console.log(result.data.message);
        }
        
      } catch (error) {
        console.log(error.message)

        
        
      }

    }
  
    useEffect(()=>
    {
      
      
          
      fetchOrders();
    

    },[userId])
    const handleDrop = (index)=>
      {
        setOrders(prev=>prev.map((order,i)=>
          i===index ? {...order,isDropped:!order.isDropped} : order
        ))

      }
    return (
      <div className="">
        {orders.map((order,index)=>
        (
          <div className="ordera flex-wrap mt-4 border-2 py-4 flex-col md:flex-row md:min-h-fit flex items-center  min-h-96 justify-evenly ">
        <img src={assets.parcel_icon} alt="" />
        <button
          className="py-1 px-4 border-2 bg-orange-300 hover:bg-orange-100"
          onClick={() => handleDrop(index)}
        >
          View items
        </button>
             <span style={{order:4}}>{order.totalPrice}$</span>
        <span style={{order:5}}>items: {order.itemsNumber}</span>
        <span  className="order-6 fp relative w-32">{order.state} </span>
        <button className="bg-red-100 py-2 px-5 order-7">Track order</button>
        <div className={`grided dropdown order-3 md:order-8 h-auto w-full flex justify-center   ${!order.isDropped && 'md:justify-start hidden'} `}>

        {order.isDropped ? <Dropdown order={order}></Dropdown> :  ""}
        </div>
      </div>

        ))}
        
      </div>
    )
}
export default CartOrder;