
import { assets } from "../assets/assets"
import CartOrder from "./helpersComponents/cartOrder";
const SelectedOrder=()=>
{
    
        
   
    return (
        <div className="my-5" style={{minHeight:"38rem"}}>
            <h2 className="text-2xl font-bold">My Orders</h2>
           <CartOrder></CartOrder>
        </div>
    )
}

export default SelectedOrder;