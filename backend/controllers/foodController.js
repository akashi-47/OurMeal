// Controller: add food item

import { log } from "console";
import foodModel from "../models/foodmodel.js";
import fs from "fs"

const addFood = async (req, res) => {
  // Check if file exists
  if (!req.file) {
    return res.status(400).json({success: false, message: "No image uploaded" });
  }

  // Extract filename
  let image_filename = `${req.file.filename}`;

  // Create new food item
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,  // Fixed typo here
    category: req.body.category,
    image: image_filename,
  });

  try {
    // Save the food item to the database
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    // Send the error message back for easier debugging
    res.status(500).json({ success: false, message: "Food not added", error: error.message });
  }
};


//list food
const listFood = async (req,res)=>
  {
    try {
      const foods = await foodModel.find({});
      res.json({success:true,data:foods})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Not get it"})
    }


  } 
  //remove food
  const removeFood = async(req,res) =>
  {
    try {
      const food = await foodModel.findById(req.body.id);
      fs.unlink(`uploads/${food.image}`, ()=>{});
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({success:true,message:"food removed"})
      
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
      
    }

  }

export { addFood,listFood,removeFood};
