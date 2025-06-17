/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { storeContext } from "../../context/storecontext";
import { useContext } from "react";

const Dropdown = ({order})=>
{

  



    return (
        <ul className="flex justify-center flex-wrap content-center gap-2">
            {
             order.foodsOrder.map((item)=>
             <li>{item.name} <b>x</b> {item.number}</li>
            )
            }

        </ul>
    );
}
export default Dropdown;