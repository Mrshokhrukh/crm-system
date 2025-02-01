import express from "express";
import { getAllUsers, getAllOrders, getAllProducts } from "../controllers/adminController.js";
import { protect,roleCheck } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users", protect, roleCheck(["admin"]), getAllUsers); // ✅ Get all users
router.get("/orders", protect, roleCheck(["admin"]), getAllOrders); // ✅ Get all orders
router.get("/products", protect, roleCheck(["admin"]), getAllProducts); // ✅ Get all products

export default router;
