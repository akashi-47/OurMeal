import { useCallback, useContext } from "react";
import { assets } from "../assets/assets";
import { storeContext } from "../context/storecontext";



export default function Mainpage()
{
    const {scrollToSection} = useContext(storeContext);

    return(
        <div className="mainpage  my-5 md:my-7 relative flex content-center h-300 md:h-500 lg:h-600">
              <img className="absolute h-full w-screen" src={assets.badil} alt="" />
              <div className="texts z-10 relative flex mx-10 md:mx-20 lg:mx-35 flex-col justify-center lg:w-2/3">
              <p className="lg:text-5xl text-white order md:text-3xl text-xl font-bold z-50 font-serif sh">Order your</p>
            <p className=" lg:text-5xl text-white order md:text-3xl text-xl font-bold lg:my-4 font-serif sh">favourite food here </p>
            <span className=" text-white order text-vsm md:text-sm font-bold text-justify hidden lg:inline lorem sh">Lorem ipsum dolor sit amet consectet
                ur adipisicing ae pariatur alias in laudantium perferendis cumque blanditiis qu sdjfd ashdfjsad  adsjfhd fjhdf ajdf jdhfjhdsjf dsffhjsdhf ajdhf  jdshf dsfjd fhibusd
                am dignissimos magni eaque facilis fhdfsd  voluptate.</span>
                <button onClick={(e)=>{
                    e.preventDefault();
                    scrollToSection("menu");
                }} className="text-start w-fit border-2 shadow-lg text-gray-700 font-serif px-2 rounded-lg bg-white py-0.5 my-2 text-sm md:px-6 md:py-1 lg:my:3 md:text-base lg:px-8 lg:py-1.5 lg:text-lg lg:mt-7 shb">View menu</button>

              </div>
           

        </div>

    );

}