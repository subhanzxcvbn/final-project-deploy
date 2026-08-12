import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";

// Routes
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Add Config
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();

console.log("URI:", process.env.MONGODB_URI);

//API's endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
