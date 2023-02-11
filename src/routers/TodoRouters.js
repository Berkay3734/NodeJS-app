const router = require("express").Router();
const todoController = require("../controllers/TodoController");
router.post("/todo",todoController.todoAdd);
module.exports = router;
