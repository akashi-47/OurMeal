const { useState } = require("react");

const WarningMessage= ({message,isOpenMessage,setClose})=>
{
  
    
    if(!isOpenMessage) return null;
    setTimeout(()=>
        {
            setClose();
        },3000)
       
    return (
        <div className="info-card fixed top-8  bg-white py-5 px-9 right-3 after:bg-orange-600 flex items-center border-2 z-50">
                <button className="absolute -top-1 right-2 text-2xl text-gray-400" onClick={()=>setClose()}>&times;</button>
            <i class="fa-solid fa-circle-exclamation text-orange-600 mr-1 text-lg "></i> <span className="text-gray-500 ml-2">{message}</span>
            </div>
    )
    
}
export default WarningMessage;