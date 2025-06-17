
import { useContext } from "react";
import { assets } from "../assets/assets";
import { storeContext } from "../context/storecontext";
export default function Prefooter()
{
  const {refs}= useContext(storeContext);

    return(
      <div className="prefooter my-12" ref={refs.mobileApp}>
        
        <p className="text-center text-2xl  lg:text-6xl md:text-4xl">For Better Experience Download</p>
        <p className="text-center my-2 md:text-4xl lg:text-6xl text-2xl">   Tomato App   </p>
     <div className="flex flex-col items-center justify-center md:flex-row gap-3 h-32">
        <img src={assets.app_store} alt="" className="w-52 h-14" />
        <img src={assets.play_store} alt="" className="w-52 h-14" />
     </div>
      </div>
    );

}