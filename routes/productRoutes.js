import express from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productController.js";
import { adminOnly, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createProduct);  // Vendors/Admin can add products
router.get("/", getProducts);  // Get all products
router.get("/:id", getProductById);  // Get single product
router.put("/:id", protect, updateProduct);  // Vendors/Admin can update
router.delete("/:id", protect, adminOnly, deleteProduct);  // Only Admin can delete

router.get("/", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);
    
    res.json(products);
  });
  

export default router;
