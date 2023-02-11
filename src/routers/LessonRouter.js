const router = require("express").Router();
const lessonController = require("../controllers/LessonController");
router.post("/lesson",lessonController.lessonAdd);
module.exports = router;
