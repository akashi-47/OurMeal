/* eslint-disable no-unused-vars */
import { useState } from "react";

import CartOrder from "../helpers/cartOrder";
const OrdersA = () => {
 
  const [isDrop, setDrop] = useState(false);
  const url= "http://localhost:4000";

  return (
    <div className=" md:mx-0 px-12  md:px-2 lg:px-8 mt-3">
      <h4 className="text-xl">Order Page</h4>
      <CartOrder ></CartOrder>
      
    </div>
  );
};

export default OrdersA;
