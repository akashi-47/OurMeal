import express from "express"
import {deleteDelivInfo, getDelivInfo, getOrder, getOrdersClient, passOrder,registerDelivInfo, setStateOrder} from "../controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/passOrder",passOrder);
orderRouter.post("/delivInfo",registerDelivInfo);
orderRouter.get("/getDelivInfo/:userId",getDelivInfo);
orderRouter.delete("/deleteDelivInfo/:id",deleteDelivInfo);
orderRouter.get("/getOrder",getOrder);
orderRouter.put("/setStateOrder/:id",setStateOrder);
orderRouter.get("/getOrdersClient/:id",getOrdersClient);


export default orderRouter;







