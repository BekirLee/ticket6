import connectDB from "./app/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRouter from "./src/routes/productRoute.js";

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products/", productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("port in 3000"));
