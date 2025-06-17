import mongoose from "mongoose";

// Define the schema for the food model
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },  // Fixed typo here
  image: { type: String, required: true },
  category: { type: String, required: true },
});

// Export the model (with safeguard to prevent re-compilation)
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;

