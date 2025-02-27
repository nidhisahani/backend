const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth");
const wrapsAsync = require("../middlewares/wrapsAsync");

router.post("/register", wrapsAsync(authControllers.registerUser));
router.post("/login", wrapsAsync(authControllers.loginUser));

module.exports = router;