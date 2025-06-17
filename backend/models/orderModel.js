import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    state: {type: String, required: true},
    totalPrice: {type: Number, required: true},
    foodsOrder: {type: Object, default: {}},
    itemsNumber: {type: Number, required: true},
    adresse:{type:String ,required:true},
    userId:{type:String,required:true,trim:true}
  }, {minimize: false})
const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);
export default orderModel;
