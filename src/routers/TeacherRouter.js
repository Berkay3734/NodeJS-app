const router = require("express").Router();
const teacherController = require("../controllers/TeacherController");
router.post("/teacher",teacherController.teacherAdd);
module.exports = router;
