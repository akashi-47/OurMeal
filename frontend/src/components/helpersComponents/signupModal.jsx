import Login from "./loginModal";
import WarningMessage from "./warningMessage";
import { useState,useContext } from "react";
import axios from "axios"
import { storeContext } from "../../context/storecontext";
import { toast } from "react-toastify";

const Modal = ({isOpen,onClose})=>
{
    const [isOpenMessage,changeState]=useState(false);
    const [loginOpen,setLogin]=useState(false);
    const setCloseLogin= ()=>
    {
        setLogin(false);
        onClose();
    }
    const setOpen = ()=> changeState(true);
    const setClose = ()=> changeState(false);
    function switchLog()
    {
        setLogin(true);
    }

  
    const {url,setToken} = useContext(storeContext);
    const [isChecked,setChecked]= useState(false);
  
    const [data,setData] =  useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const checkInfo = ()=>
    {
        try {
                if(data.email==="" || !data.email.includes("@"))
                    return "Email is Invalid"
                if(data.name==="")
                    return "Name is Invalid";
                if(data.password.length<8)
                    return "Password is too short ";
                return false;
            
        } catch (error) {
            
        }
    }
    const onSignup = async (e)=>
    {
        e.preventDefault();
        try {
            if(!isChecked)
            {
                toast.error("Please accept our terms and conditions");
                return ;
            }
          if(checkInfo())
          {
            toast.error(checkInfo());
            return;
          }

        let newUrl =`${url}/api/user/register` ;
        const res = await axios.post(newUrl,data);
        if(res.data.success)
        {
            console.log("dakhl")
            setToken(res.data.token);
            localStorage.setItem("token",res.data.token)
            
            setData({
                name:"",
                email:"",
                password:""
            })
            onClose();
         
        }
        else 
        {
            setOpen();
        }
            
        } catch (error) {
            
        }
        
        

    }

   
    if(!isOpen) return null;
    if(loginOpen) return <Login isOpen={loginOpen} setLogin={setLogin} onClose={setCloseLogin}></Login>;
    return (
        <div className="overlay">
            
            <WarningMessage message="Please enter a strong password" isOpenMessage={isOpenMessage} setClose={setClose}></WarningMessage>
            <div className="modal bg-white py-5 px-8  rounded shadow-md max-w-80 lg:max-w-96 w-full relative">
              
                <div className="content relative">
                 <span className="text-xl font-bold">Sign Up</span>
                 <button className="modal-close text-gray-600" onClick={onClose}>
                    &times;
                </button>
                 <form action="" className=" flex space-y-5 flex-col mt-7 mb-3" onSubmit={onSignup}>
                    <input type="text" name="name" placeholder="Your name"  className="input-modal" onChange={onChangeHandler}/>
                    <input type="text" placeholder="Your email" className="input-modal" name="email" onChange={onChangeHandler}/>
                    <input type="password" placeholder="Your password" id="passwordi" name="password" className="input-modal" onChange={onChangeHandler} />
                    <button className="bg-orange-600 p-2 rounded-md text-white font-bold" type="submit">Create account</button>
                 </form>
                 <div className="agree mb-6">
                    <input type="checkbox" name="" checked={isChecked} onChange={(e)=>{
                        setChecked(e.target.checked);
                    }} id="checkSignup"  className="mr-2"/>
                    <span className="text-sm lg:text-base text-gray-500">By continuing validating this agree, you will be.</span>
                 </div>
                    <span className="text-sm lg:text-base text-gray-500">Already have an account ? <a href="#" className="text-orange-600" onClick={switchLog}>Login here</a></span>
                </div>
            </div>

        </div>

    );

}
export default Modal;