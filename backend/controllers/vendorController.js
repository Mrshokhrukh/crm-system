import Product from "../models/Products.js";
import Order from "../models/Order.js";

// ✅ Get all products for vendor
export const getVendorProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all orders for vendor
export const getVendorOrders = async (req, res) => {
  try {
    const orders = await Order.find({ "products.product.user": req.user.id }).populate("user", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
