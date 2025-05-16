import dotenv from "dotenv";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connect mongodb");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
