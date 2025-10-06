import axios from "axios";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const ItemAdmin =({food,fetch})=>
{
    const url=import.meta.env.REACT_APP_API_URL+"/";
    
    const removeFood = async (foodid) =>
    {
       
        const res = await axios.post(`${url}api/food/remove`,{id:foodid});
      await  fetch();
      if(res.data.success)
      {
        toast.success(res.data.message)
      }
      else 
      {
        toast.error("Error");
      }

    }
    return (
        <div className=" orders new flex justify-between py-3 w-full border-b-2 items-center border-x-2">
        <span className="flex justify-center"><img src={`${url}images/${food.image}`} className="w-12 md:w-16" alt="" /></span>
        <span>{food.name}</span>
        <span>{food.category}</span>
        <span>{food.price}</span>
        <span>   <button onClick={()=>removeFood(food._id)} className="text-3xl">&times;</button></span>
     
    </div>
    )
}
export default ItemAdmin;