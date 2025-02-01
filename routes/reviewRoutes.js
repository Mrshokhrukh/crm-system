import express from "express";
import { addReview, getReviewsForProduct } from "../controllers/reviewController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addReview); // ✅ Add Review
router.get("/:productId", getReviewsForProduct); // ✅ Get Reviews for Product

export default router;
