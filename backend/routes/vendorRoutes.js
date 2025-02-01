import express from "express";
import { getVendorProducts, getVendorOrders } from "../controllers/vendorController.js";
import { protect, roleCheck } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/products", protect, roleCheck(["vendor", "admin"]), getVendorProducts); // ✅ View vendor's products
router.get("/orders", protect, roleCheck(["vendor", "admin"]), getVendorOrders); // ✅ View vendor's orders

export default router;
