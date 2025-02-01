import Review from "../models/Review.js";
import Product from "../models/Products.js";

// ✅ Add a review for a product
export const addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    const review = new Review({
      user: req.user.id,
      product: productId,
      rating,
      comment,
    });

    await review.save();

    // Update product's average rating
    const reviews = await Review.find({ product: productId });
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    await Product.findByIdAndUpdate(productId, { averageRating: avgRating });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all reviews for a specific product
export const getReviewsForProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId }).populate("user", "name");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
