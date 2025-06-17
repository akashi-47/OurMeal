import { MdHeight } from 'react-icons/md';
import { assets } from '../assets/assets';
import style from '../css/navbar.css';
import React, { useState,useContext } from 'react';
import Navlinks from './helpersComponents/navLinks';
import Modal from './helpersComponents/signupModal';
import { useNavigate,useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { storeContext } from '../context/storecontext';
export default function Navbar() {
    const [isShowed, setShowed] = useState(false);
    const {token,setToken,notif} = useContext(storeContext)
    const Location = useLocation();


    const [isModalOpen, setIsModalOpen] = useState(false);
   

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const navigate=useNavigate();

    function handleVerify()
    {
            navigate("/cart");
    }

    function handleClickNav() {
        setShowed(!isShowed);
    }
   
    const logout = ()=>
    {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");


    }

    return (
        <React.Fragment>
            <nav className='flex items-center justify-between px-4 py-2'>
                <img src={assets.ourmeal} alt="logo" className="w-24 sm:w-28 md:w-32 lg:w-36 jsp" />
                
                <Navlinks></Navlinks>
                <div className='md:hidden'>
                    <a href="#" onClick={handleClickNav}>
                        <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
                    </a>
                </div>
                
                <div className="flex items-center space-x-4 sm:space-x-6 ">
                {
                           (token &&  <button onClick={()=>{navigate("/orders")}} className='bag-icon relative'> {(notif && Location.pathname==="/") ? <div className='notif'></div> : null}<img src={assets.basket_icon} alt="" className='w-5 sm:w-6'/></button>)
                   

                        }
                  
                   

                   {!token ? <button className="signup text-nowrap text-sm px-4 py-1 md:px-6 lg:px-7 md:py-2 hover:text-white
                     hover:bg-orange-600 transition-all duration-500 
                     ease-in-out" onClick={()=>openModal()}>Sign up</button> : 

                     <div className='relative'><img className='cursor-pointer profile-hov' src={assets.profile_icon} alt="" />
                      <div className="dropdown-profile
                       absolute bg-orange-200 ">
                        <ul className='flex flex-col space-y-1 w-max'>
                      
                            <li onClick={handleVerify} className='flex items-center pb-1 cursor-pointer orlog'><img src={assets.bag_icon} className='w-6 h-6 mr-2 ' alt="" /><p>Orders</p></li>
                            <hr className="border-gray-500" />
                            <li onClick={logout} className='flex items-center pt-1 cursor-pointer orlog'><img src={assets.logout_icon} className='w-6 h-6 mr-2 ' alt="" /><p>Logout</p> </li>
                        </ul>
                        
                        </div>

                     </div>
                     }
                </div>
            </nav>
       
        <Modal isOpen={isModalOpen} setModal={setIsModalOpen} onClose={closeModal}> </Modal>

            <ul className={`flex flex-col bg-orange-500 text-lg supnav transition-all duration-500 ease-in-out overflow-hidden md:hidden ${
                isShowed ? 'max-h-96 visible' : 'max-h-0 invisible'
            }`}>
               <Link to="/"> home</Link> 
             <Link to="/menu"> menu</Link> 
             <Link to="/mobileapp"> mobile app</Link> 
             <Link to="/contact"> contact us</Link> 
            </ul>
            
         
        </React.Fragment>
    );
}