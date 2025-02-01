import Cart from "../models/Cart.js";

// ✅ Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({ user: req.user.id, products: [] });
    }

    const item = cart.products.find((p) => p.product.toString() === productId);
    if (item) {
      item.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get user cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("products.product");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter((p) => p.product.toString() !== req.params.productId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
