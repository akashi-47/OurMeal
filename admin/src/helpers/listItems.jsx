/* eslint-disable react/jsx-key */
import ItemAdmin from "./itemAdmin";

const Listitems=({list,fetch})=>
{
    return (
        <div className="tableOrders mt-2">
 
        <div className=" orders  flex justify-between pb-1 w-full border-2 bg-slate-100">
            <span>Image</span>
            <span>Name</span>
            <span>Category</span>
            <span>Price</span>
         
            <span>Remove</span>
        </div>
        {
            // eslint-disable-next-line react/prop-types
            list.map((food)=>(
            
                <ItemAdmin food={food} fetch={fetch}></ItemAdmin>

            ))
        }
    
       
       </div>
    )
}
export default Listitems;