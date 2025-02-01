import User from "../models/Users.js";
import Order from "../models/Order.js";
import Product from "../models/Products.js";

// ✅ Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
