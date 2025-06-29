import userModel from "../models/userModel.js"
import delivModel from "../models/delivModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// login user
var userId="";
const loginUser = async(req,res) =>
{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user)
        {
          return  res.json({success:false,message:"User does not exist"})

        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch)
        {
            return res.json({success:false,message:"Password invalid"})
        }
        const token = createToken(user._id);
         userId = user._id;

        res.json({success:true,token,userId})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error login"})
    } 

}


const createToken = (id) =>
{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user
const registerUser = async (req,res) =>
{
    const {name,password,email}=req.body;
    try {
        const exist = await userModel.findOne({email});
        if(exist)
        {
            return res.json({success:false,message:"User already exist"})

        }
        if(!validator.isEmail(email))
        {
            return res.json({success:false,message:"Email not valid"})
        }
        if(password.length<8)
        {
            return res.json({success:false,message:"Please enter a strong password"})
        }
        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
       userId = user._id;
        const token = createToken(user._id)
        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
const getUserId = (req,res)=>
{
  try {
    return res.json({success:true,userId})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  } 

}
const idUser = () =>
{
    return userId;
}
export {loginUser,registerUser,getUserId,idUser}


