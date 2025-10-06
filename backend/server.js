import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config'
// app config
const app = express();
const port = process.env.PORT || 4000;
const url = import.meta.env.REACT_APP_API_URL

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
    res.send("API Working");
});

// api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter);
app.use("/api/order",orderRouter);


// database connection
connectDB().then(() => {
    // start the server only after the database is connected
    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
    }); 
}).catch((err) => {
    console.error("Database connection failed:", err);
});
