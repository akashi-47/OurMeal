import mongoose from "mongoose";

const delivSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: Number, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  idCustomer:{type:String,required:true}
});
const delivModel = mongoose.models.delivInfo || mongoose.model("delivInfo",delivSchema);
export default delivModel;


