const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { uploadImageMid } = require("../middlewares/uploadMiddleware");


router.post("/user/register", uploadImageMid, userController.register);


module.exports = router;