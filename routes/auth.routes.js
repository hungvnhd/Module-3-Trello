const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.get("/register", authController.renderRegister);

module.exports = router;
