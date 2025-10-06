import React, { createContext, useRef } from 'react';
import {useState,useEffect,useCallback} from "react"
import axios from 'axios';

export const storeContext = createContext(null)
const StoreContextProvider = (props) =>
{
    const [foodList,setFoodList] = useState([])
    const [notif,setNotif]=useState(false);
     const [chosedItems,setChosedItems] = useState([]);
     const [userId,setUserId]=useState("");
     const refs = {
        home : useRef(null),
        menu : useRef(null),
        mobileApp : useRef(null),
        contact : useRef(null)

     }
    const url =process.env.REACT_APP_API_URL;
    const [token,setToken] = useState("");
   
    const scrollToSection = (sectionName) => {
        console.log("tff");
        
        refs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth' });
      };
   
    const getUserId = async ()=>
    {
        let newUrl =`${url}/api/user/getUserId` ;
        try {
            const res = await axios.get(newUrl);
          
             console.log(res.data.userId)
             setUserId(res.data.userId);
            
         
             return res.data.userId;
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    
    const addItemt = useCallback((id,number)=>
    {
        const item ={
            id:id,
            number:number
        };
        const exist = chosedItems.findIndex(item=>item.id===id);
        console.log("Dkhl")
        console.log(exist);
        if(exist!==-1)
        {
            updateNumberItems(id,number);
          
        }
        else 
        {
            setChosedItems(prevItems => [...prevItems, item]);
        }
       
    },[chosedItems])
    const removeItem = (id)=>
    {
        setChosedItems(chosedItems.filter(item=>item.id!==id))
    }
    const updateNumberItems = (id,newNumber)=>
        {
            setChosedItems(prev=>prev.map(item=>
    
                item.id===id ? {...item,number:newNumber} : item)
            );
        }
    const filterChosedItems = (chosed)=>
    {
        const mapChosed = new Map(chosed.map(item=>[item.id,item.number]));
        return foodList.filter(food=>mapChosed.has(food._id)).map(food=>({
            ...food,
            number:mapChosed.get(food._id)
        }));
    }
    useEffect(()=>
    {
        chosedItems.length !==0 ? setNotif(true) : setNotif(false);

    },[chosedItems])
  
    console.log(userId);
    useEffect(()=>
    {
        async function loadData()
        {
            await fetchFoodList();
           
            if(localStorage.getItem("token"))
                {
                    setToken(localStorage.getItem("token"));
                    
                }
              
        }
        loadData(); 
     

    },[])
    useEffect(()=>
    {
        if(localStorage.getItem("userId"))
            {
                setUserId(localStorage.getItem("userId"));
            }
           

    },[])
    console.log("last"+userId);
    const getTotalPrice = ()=>
    {
        let totalPrice=0;
        filterChosedItems(chosedItems).map((item)=>
        {
            totalPrice = item.price * item.number + totalPrice;
        })
        return totalPrice;

    }
    const contextValue = {
        url,
        token,
        setToken,
        foodList,
        chosedItems,
        setChosedItems,
        addItemt,
        removeItem,
        updateNumberItems,
        filterChosedItems,
        notif,
        getTotalPrice,
        userId,
        refs,
        scrollToSection,
        getUserId
    }
    const fetchFoodList = async () => {
        try {
            const res = await axios.get(url + "/api/food/list");
            setFoodList(res.data.data);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    };

    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}
export default StoreContextProvider;

