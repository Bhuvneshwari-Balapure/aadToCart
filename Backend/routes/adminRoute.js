const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

router.post("/AdminLogin", adminController.AdminLogin);
module.exports = router;
