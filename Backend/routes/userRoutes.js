const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.post("/registration", userController.UserRgistration);
router.post("/login", userController.UserLogin);
router.post("/checkUserValidation", userController.checkUserValidation);

module.exports = router;
