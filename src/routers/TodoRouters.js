const router = require("express").Router(); //Router() fonksiyonu, yeni bir router nesnesi yaratmak için
const todoController = require("../controllers/TodoController");
router.post("/todo",todoController.todoAdd); //controller dan çekip bunu /todo ile post ediyor
module.exports = router;
