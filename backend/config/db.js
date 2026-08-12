import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to mongo successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message); // paste what this prints
    process.exit(1);
  }
};

export default connectDB;
