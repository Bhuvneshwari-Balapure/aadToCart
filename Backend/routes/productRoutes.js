const express = require("express");
const router = express.Router();
const ProductController = require("../Controllers/productController");
router.post("/productSave", ProductController.productSave);
router.get("/productDisplay", ProductController.ProductDisplay);
router.post("/productDelete", ProductController.ProductDelete);

module.exports = router;
