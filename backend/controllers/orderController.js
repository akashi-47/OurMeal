
import delivModel from "../models/delivModel.js";
import orderModel from "../models/orderModel.js";
import { idUser } from "./userController.js";
import pkg from 'mongoose';



const passOrder = async(req,res)=>
{
    const order = new orderModel({
        state: req.body.state,
        totalPrice: req.body.totalPrice,
        foodsOrder: req.body.foodsOrder,
        itemsNumber: req.body.itemsNumber,
        adresse:req.body.adresse,
        userId:req.body.userId
    })

    try {
        await order.save();
        res.json({success:true,message:"Order passed",food:order.foodsOrder})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Order not passed",error:error.message})
        
    }

}
const registerDelivInfo = async(req,res)=>
{
    const delivInfo = new delivModel(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            street:req.body.street,
            state:req.body.state,
            city:req.body.city,
            zip:req.body.zip,
            country:req.body.country,
            phone:req.body.phone,
            idCustomer:req.body.idCustomer

        }
    )
    try {
        await delivInfo.save();
        res.json({success:true,message:"Delivrey info registred"})
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({success:false,error:error.message})
        
    }

}
const getDelivInfo = async (req,res) =>
{
  try {
   const userId = req.params.userId;
   if(!userId)
   {
    return res.status(404).json({success:false,message:"Not logged in"})
   }
    const delivInfo = await delivModel.find({idCustomer:userId});
    return res.json({success:true,delivInfo});
    
  } catch (error) {
    res.status(400).json({success:false,error:error.message});
  }

}
const deleteDelivInfo = async(req,res) =>
{
    try {
       const delivId = req.params.id;
       const result = await delivModel.findByIdAndDelete(delivId);
       if(result)
       {
        return res.status(200).json({success:true,message:"Item deleted"})
       }
       else 
       {
        return res.status(404).json({success:false,message:"Item not found with id " + delivId })
       }

        
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
        
    }
}
const getOrder = async (req,res) =>
{
    try {
        const orders = await orderModel.find();
        if(orders) return res.status(200).json({success:true,orders:orders})
            else return res.status(404).json({success:false,message:"No order"});

    
        
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
        
    }
}
const setStateOrder = async (req,res)=>
{
   
    try {
        const idOrder = req.params.id;
        const state = req.body.state;
       
        const result = await orderModel.findByIdAndUpdate(
            idOrder,
            {
                state:state
            },
            
             { new: true, runValidators: true }
            


        )
        if(result)
        {
            res.json({success:true,message:"The state has changed to "+state});
            return true;
        }
        else 
        {
            res.status(404).json({success:true,message:"Order not found"});
        }
        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
        
    }

    


}
const getOrdersClient = async(req,res)=>
{
    
    try {
        const idClient = req.params.id;
    const ordersClient = await orderModel.find({userId:idClient});
    if(ordersClient)
        return res.json({success:true,ordersClient});
        else 
        return res.status(500).json({success:false,message:"Not found"});
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }


}

export  {passOrder,registerDelivInfo,getDelivInfo,deleteDelivInfo,getOrder,setStateOrder,getOrdersClient};