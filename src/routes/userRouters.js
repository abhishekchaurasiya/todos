const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { uploadImageMid } = require("../middlewares/uploadMiddleware");
const todoController = require("../controller/todosController")

router.post("/user/register", uploadImageMid, userController.register);
router.post("/todos/add", todoController.addTodo)


module.exports = router;