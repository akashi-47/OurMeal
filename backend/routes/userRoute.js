import express from "express"
import {getUserId, loginUser,registerUser} from "../controllers/userController.js"

const userRouter = express.Router();



userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/getUserId",getUserId);
export default userRouter;