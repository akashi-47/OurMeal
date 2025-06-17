import WarningMessage from "./warningMessage";
import { useState,useContext } from "react";
import Modal from "./signupModal";
import { storeContext } from "../../context/storecontext";
import axios from "axios"
import { toast } from "react-toastify";

const Login = ({isOpen,onClose,setLogin})=>
{
    
    const [signupOpen,setSignup]=useState(false);
    const switchSign=()=>
    {
        setSignup(true);

    }
    const {url,setToken} = useContext(storeContext);
   
  
    const [data,setData] =  useState({
        name:"",
        email:"",
        password:"",
    })
    const onChangeHandler = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }
  
    const onLogin = async (e)=>
    {
        try {
            e.preventDefault();
            let newUrl =`${url}/api/user/login` ;
            const res = await axios.post(newUrl,data);
            if(res.data.success)
            {
                console.log("dakhl")
                setToken(res.data.token);
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("userId",res.data.userId);
                console.log(res.data.userId);
               
                onClose();
            }
            else 
            {
                toast.error(res.data.message)
            }
            
            
        } catch (error) {
            
        }
       

    }

   
    if(!isOpen) return null;
    if(signupOpen) return <Modal isOpen={signupOpen} onClose={onClose}></Modal> ;
    return (
        <div className="overlay">
            
            <div className="modal-login bg-white py-5 px-8  rounded shadow-md max-w-80 lg:max-w-96 w-full relative">
              
                <div className="content relative">
                 <span className="text-xl font-bold">Login</span>
                 <button className="modal-close text-gray-600" onClick={()=>onClose()}>
                    &times;
                </button>
                 <form action="" className=" flex space-y-5 flex-col mt-7 mb-3" onSubmit={onLogin}>
            
                    <input type="text" placeholder="Your email" className="input-modal" name="email" value={data.email} onChange={onChangeHandler} />
                    <input type="password" name="password" value={data.password} placeholder="Your password" id="passwordi" onChange={onChangeHandler} className="input-modal"/>
                    <button type="submit" className="bg-orange-600 p-2 rounded-md text-white font-bold">Login</button>
                 </form>
                 <div className="agree mb-6">
                    <input type="checkbox" name="" id=""  className="mr-2"/>
                    <span className="text-sm lg:text-base text-gray-500">By continuing validating this agree, you will be.</span>
                 </div>
                    <span className="text-sm lg:text-base text-gray-500">Create a new account ? <a href="#" className="text-orange-600" onClick={switchSign}>Sign Up here</a></span>
                </div>
            </div>

        </div>

    );

}
export default Login;