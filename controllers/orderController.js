import Order from "../models/Order.js";
import Product from "../models/Products.js";

// ✅ Create new order
export const createOrder = async (req, res) => {
  try {
    const { products, totalPrice, paymentMethod } = req.body;

    for (let item of products) {
      const product = await Product.findById(item.product);
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for ${product.name}` });
      }
      product.stock -= item.quantity;
      await product.save();
    }

    const order = new Order({ user: req.user.id, products, totalPrice, paymentMethod });
    await order.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = req.body.status || order.status;
    await order.save();

    res.json({ message: "Order updated", order });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



// import Order from "../models/Order.js";

// // ✅ Place an Order
// export const placeOrder = async (req, res) => {
//   try {
//     const { products, totalPrice, shippingAddress } = req.body;
//     const order = new Order({
//       user: req.user.id,
//       products,
//       totalPrice,
//       shippingAddress,
//       status: "Pending",
//     });

//     await order.save();
//     res.status(201).json(order);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ✅ Get User Orders
// export const getUserOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user.id }).populate("products.product");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ✅ Admin Updates Order Status
// export const updateOrderStatus = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.orderId);
//     if (!order) return res.status(404).json({ message: "Order not found" });

//     order.status = req.body.status;
//     await order.save();
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
