import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../controllers/orderController.js";
import { adminOnly, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);  // Create new order
router.get("/", protect, getOrders);  // Get all orders
router.put("/:id", protect, adminOnly, updateOrderStatus);  // Admin updates order status

export default router;
