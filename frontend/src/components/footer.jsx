import { useContext } from "react";
import { assets } from "../assets/assets";
import style from "../css/footer.css"
import { storeContext } from "../context/storecontext";

export default function Footer() {
  const {refs}= useContext(storeContext);

  return (
    <footer ref={refs.contact
    }
      className="grid gap-4 place-content-center py-8 md:py-16 md:flex md:justify-evenly md:gap-0"
      style={{ backgroundColor: "#2f2f2f" }}
    >
      <div className=" flex flex-col h-full md:w-2/5 w-auto mx-4 md:mx-0">
        <img src={assets.logo} alt="" className="h-6 w-fit md:h-7 lg:mb-2" />

        <p className="text-white text-sm md:text-base  my-3 md:w-auto text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          soluta accusantium nisi nesciunt , dolor modi commodi fuga hic nostrum
          eius nulla incidunt temporibus adipisci? Facere cum asperiores dolorum
          perferendis odit.
        </p>
        <div className="flex gap-3">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>

      <div className="flex flex-col h-full w-fit mx-4 md:mx-0">
        <p className="text-white font-bold text-xl md:text-3xl lg:mb-2">
          Company
        </p>
        <ul className="footul">
          <li className="text-white text-sm md:text-base">Home</li>
          <li className="text-white text-sm md:text-base">About us</li>
          <li className="text-white text-sm md:text-base">Delivery</li>
          <li className="text-white text-sm md:text-base">Project policy</li>
        </ul>
      </div>
      <div className="flex flex-col h-full w-fit mx-4 md:mx-0">
        <p className="text-white font-bold text-xl md:text-3xl lg:mb-2">
          Get in touch
        </p>
        <ul className="footul">
          <li className="text-white text-sm md:text-base">09 876663 363 6</li>
          <li className="text-white text-sm md:text-base">Contact@djf.com</li>
        </ul>
      </div>
    </footer>
  );
}
