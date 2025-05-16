import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProduct);

export default router;
