import { useEffect, useState } from "react";
import Listitems from "../helpers/listItems";
import axios from "axios";
import { toast } from "react-toastify";
const Items =()=>
    {
        const [list,setList] = useState([]);
        const urll=import.meta.env.REACT_APP_API_URL;
       
        const fetchList = async () =>
        {
            const res= await axios.get(`${urll}/api/food/list`);
            console.log(res.data);
            if(res.data.success)
            {
                setList(res.data.data);
                
            }
            else 
            {
                toast.error("Error");
            }
       
        }
        useEffect(()=>
            {
                fetchList();

            },[])
        return (
            <div className="px-3 mx-2">
                <h2 className="text-lg">All food list</h2>
                    <Listitems list={list} fetch={fetchList}></Listitems>
            </div>
        );
    }
    
    export default Items;
    