import express from "express";
import http from "http";
import dotenv from "dotenv";
// import socketIo from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/authRotes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
// import couponRoutes from "./routes/couponRoutes.js";

// import helmet from "helmet";
// import rateLimit from "express-rate-limit";

const app = express();
dotenv.config();
// const server = http.createServer(app);
// const io = socketIo(server); // Set up Socket.io

app.use(cors());
app.use(express.json());

// Add your API routes
app.use("/api/user", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/admin", adminRoutes);
// app.use("/api/coupons", couponRoutes);

// app.use(helmet());
// Socket.io logic
let users = []; // Keep track of connected users

// Set up a rate limiter to limit requests to 100 per 15 minutes
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per windowMs
//   message: "Too many requests from this IP, please try again later",
// });

// Apply to all routes
// app.use(limiter);

// Handle new connections
// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Add new user to the list
//   socket.on("newUser", (userId) => {
//     users.push({ userId, socketId: socket.id });
//   });

//   // Listen for real-time order updates
//   socket.on("orderStatusUpdate", (orderId, status) => {
//     io.emit("orderUpdated", { orderId, status }); // Emit to all connected clients
//   });

//   // Handle disconnect event
//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//     users = users.filter((user) => user.socketId !== socket.id); // Remove disconnected user
//   });
// });

// const corsOptions = {
//   origin: "https://your-frontend-domain.com", // Allow only your frontend domain
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection failed", error));

const PORT = process.env.PORT || 5723;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
