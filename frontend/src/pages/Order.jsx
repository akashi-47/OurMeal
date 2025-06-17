import { useContext, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../context/storecontext";
import axios from "axios";
import style from "../css/order.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const { getTotalPrice, url, filterChosedItems, chosedItems, userId,setChosedItems } =
    useContext(storeContext);
    const navigate = useNavigate();
  const fee = 0;
  console.log(userId);
  useEffect(()=>
  {
    if(chosedItems.length===0)
    {
      toast.error("Order has been cancelled, don't refresh the page");
      navigate("/orders");
    }

  },[chosedItems])
 
  const [savedDelivsInfo, setSavedDelivsInfo] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      state: "",
      city: "",
      zip: "",
      country: "",
      phone: "",
      idCustomer: null,
    },
  ]);
 
  const handleUseThis= (e)=>
  {
    const index = e.target.name;

    const firstName = Array.from(document.getElementsByClassName("input-modal"));

    firstName.map((item)=> ( item.value=savedDelivsInfo.at(index)[item.name]


))
toast.success("Informations added")
 setDelvInfo(savedDelivsInfo.at(index));
  }
  

  const [delvInfo, setDelvInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
    idCustomer: null,
  });
  const loadDelivsInfo = async () => {
    try {
      const newUrl = `${url}/api/order/getDelivInfo/${userId}`;
      console.log("owarida"+userId);

      const res = await axios.get(newUrl);
      console.log(res.data.message);
      if (!res.data.success) {
        return false;
      }
      setSavedDelivsInfo(res.data.delivInfo);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadDelivsInfo();
  }, [userId]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setDelvInfo((delvInfo) => ({ ...delvInfo, [name]: value, idCustomer: userId }));
  
    
  };
  const checkInfo = () =>
  {
    if(delvInfo.firstName==="")
      return "First Name"
    if(delvInfo.lastName==="")
      return "Last Name";
    if(delvInfo.email==="" || !delvInfo.email.includes("@"))
      return "Email"
    if(delvInfo.city==="")
      return "City"
    if(delvInfo.country==="")
      return "Country"
    if(delvInfo.phone==="")
      return "Phone";
    if(delvInfo.state==="")
      return "State"
    if(delvInfo.street==="")
      return "Street";
    if(delvInfo.zip==="")
      return "Zip Code";

    return false


  }
  const handleDelivrey = async (e) => {
    e.preventDefault();
    try {
      if(checkInfo())
      {
        toast.error(checkInfo() + " is incorrect");
        return;
      }
      const newUrl = `${url}/api/order/delivInfo`;
      const res = await axios.post(newUrl, delvInfo);
      res.data.success ? console.log("work") : alert(res.data.message);
      loadDelivsInfo();
      
    } catch (error) {
      console.log(error.message)
      
    }
   
  };
  const handlePayment = async (e) => {

    try {
      if(checkInfo())
        {
          toast.error(checkInfo() + " is incorrect");
          return;
        }
      const items = filterChosedItems(chosedItems);
      const number = items.length;
      const adresse = delvInfo.street + delvInfo.state + delvInfo.city ;
      const newUrl = `${url}/api/order/passOrder`;
      const order = {
        foodsOrder:items,
        itemsNumber:number,
        userId:userId,
        totalPrice:getTotalPrice(),
        state:"food processing",
        adresse:adresse
      };
  
      console.log(order);
      const res = await axios.post(newUrl, order);
      if(res.data.success)
      {
        setChosedItems([]);
        toast.success("Payment succeed");
        navigate("/cart");
      }
      else 
      {
        toast.error(res.data.message);

      }
    
      
    } catch (error) {
      console.log(error.message)
      
    }
   
  };
  useEffect(() => {
    console.log(delvInfo);
    console.log(savedDelivsInfo);
  }, [delvInfo]);
 

 
  const handleDeleteUseThis = async (e)=>
    {
      const index = e.target.name;
     let idDelivInfo =  savedDelivsInfo.at(index)._id;
     const newUrl = `${url}/api/order/deleteDelivInfo/${idDelivInfo}`;
     const res =await  axios.delete(newUrl);
     if(res.data.success)
      toast.success(res.data.message);
     console.log(res);
     loadDelivsInfo();

    }

  return (
    <div
      className="flex flex-col md:flex-row justify-evenly xl:justify-between w-full space-y-9 md:space-y-0 md:mt-12 items-center md:items-start"
      style={{ minHeight: "38rem" }}
    >
      <div className="flex flex-col items-center md:block md:w-2/5 w-full">
        <h3 className="text-2xl font-bold">Delivery Informations</h3>
        <form className="input-grid grid mt-6 gap-2 w-full md:w-auto">
          <input
            type="text"
            className=" input-modal"
            placeholder="First name"
            name="firstName"
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            className=" input-modal "
            placeholder="Last name"
            name="lastName"
            onChange={changeHandler}
          />
          <input
            type="email"
            className=" input-modal "
            placeholder="Email adress"
            name="email"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="input-modal  "
            placeholder="Street"
            name="street"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="input-modal "
            placeholder="State"
            name="state"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="input-modal"
            placeholder="City"
            name="city"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="input-modal "
            placeholder="Zip code"
            name="zip"
            onChange={changeHandler}
          />
          <input
            type="text"
            className=" input-modal  "
            placeholder="Country"
            name="country"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="input-modal  "
            placeholder="Phone"
            name="phone"
            onChange={changeHandler}
          />
          
          <button
            type="submit" className={`${checkInfo()===false ? `bg-green-500` : `bg-gray-400 pointer-events-none`} py-2 px-4 text-white text-sm input-modal font-mono`}
            onClick={handleDelivrey}
          >
            Save Delivery Informations
          </button>
        </form>
        <div className="my-5 space-y-2">
          {savedDelivsInfo.map((item,index) => (
            <div className="space-y-1 flex flex-col items-center border-2 bg-red-50 rounded-sm min-h-20 justify-evenly px-2 py-2 shadow-md">
              <span className="">{`${item.street} ${item.state} ${item.city}`}</span>
              <div className=" space-x-2">
              <button name={index} className="px-3 py-1 bg-green-600 rounded-md text-white" onClick={handleUseThis}>Use this</button>
              <button name={index} className="px-3 py-1 bg-red-600 rounded-md text-white" onClick={handleDeleteUseThis}>Delete</button>
              </div>

              
            </div>
          ))}
        </div>
      </div>

      <div className=" md:w-2/5 w-full flex flex-col items-center md:block ">
        <span className="text-2xl font-bold">Cart Totals</span>
        <div className="flex flex-col w-4/5 mt-6">
          <div className="border-b-2 flex justify-between  pb-2 mb-1">
            <span>SubTotal</span> <span>{getTotalPrice()}$</span>
          </div>
          <div className="border-b-2 flex justify-between  pb-2 mb-1">
            <span>Delivrey fee</span> <span>{fee}$</span>
          </div>
          <div className="border-b-2 flex justify-between  pb-2 mb-1">
            <span>Total</span> <span>{getTotalPrice()}$</span>
          </div>
        </div>

        <button
          className="mt-4 lg:mt-5 bg-orange-500 py-2 px-4 text-white text-sm  font-mono"
          onClick={handlePayment}
        >
          PAYMENT VERIFY
        </button>
      </div>
    </div>
  );
};

export default Order;
