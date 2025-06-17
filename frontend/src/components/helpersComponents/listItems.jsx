
import { useContext } from "react";
import { storeContext } from "../../context/storecontext";
const Listitems=()=>

{
const {chosedItems,filterChosedItems,url,removeItem} = useContext(storeContext);
const filtredChosed = filterChosedItems(chosedItems);
console.log(chosedItems);
console.log(filtredChosed);
console.log("Length is "+filtredChosed.length);

    return (
        <div className="tableOrders mt-10 md:mt-24 w-full">
 
        <div className=" orders flex justify-between pb-6 w-full border-b-2">
            <span>Items</span>
            <span>Title</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
        </div>
        {
            filtredChosed.map((food)=>(
                <div className=" orders new flex justify-between py-3 w-full border-b-2 items-center">
                         <span><img src={url+"/images/"+food.image } className="w-12 md:w-16" alt="" /></span>
                         <span>{food.name}</span>
                         <span>{food.price}</span>
                         <span>{food.number}</span>
                         <span>{food.price * food.number}</span>
                         <span className="text-3xl cursor-pointer" onClick={()=>removeItem(food._id)} >&times;</span>
                </div>
            ) 
            )

        }
        
      
       </div>
    )
}
export default Listitems;