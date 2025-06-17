/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../../context/storecontext";


export default function Navlinks()
{
  const naviga = useNavigate();
  const Location = useLocation();


  const {scrollToSection} = useContext(storeContext);
   

    return (
        <ul className='hidden md:flex space-x-6 flex-grow justify-center pnav'>
          <a href="" onClick={(e)=>{
            e.preventDefault();
            naviga("/");
          }} >Home</a>
          <a href="" onClick={async (e)=>{
            e.preventDefault();
            if(Location.pathname!=="/")
             await  naviga("/");

            scrollToSection("menu");
          
          }}>Menu</a>
           <a href="" onClick={async (e)=>{
            e.preventDefault();
            if(Location.pathname!=="/")
              await  naviga("/");
            scrollToSection("mobileApp")}}>Mobile App</a>
          <a href="" onClick={async (e)=>{
            e.preventDefault();
            if(Location.pathname!=="/")
              await  naviga("/");
            scrollToSection("contact");
          }}>Contact</a>
          
           
        
                  
        </ul>
        

    )
}