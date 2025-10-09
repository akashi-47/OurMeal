import mongoose from "mongoose";

const password = encodeURIComponent(process.env.DB_PASSWORD);

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ismailsaili07:${password}@ismaili.otmh0.mongodb.net/tomato`);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Database connection failed");
    }
};
