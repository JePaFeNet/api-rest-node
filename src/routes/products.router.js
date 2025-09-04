import { Router } from "express";

const router = Router();

import {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  updatePatchProduct,
  deleteProduct,
} from "../controllers/products.controller.js";


router.get("/products", getAllProducts);
router.get("/products/search", searchProducts);
router.get("/products/:id", getProductById);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);
router.patch("/products/:id", updatePatchProduct);

router.delete("/products/:id", deleteProduct);

export default router;
