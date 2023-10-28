require("dotenv").config();

const express = require("express");
const router = express.Router();

const courseController = require("../controllers/course");

router.post("/add", courseController.createCourse);
router.get("/get-all", courseController.getCourses);
router.get("/get/:courseId", courseController.getCourse);
router.put("/update/:courseId", courseController.updateCourse);
router.delete("/delete/:courseId", courseController.deleteCourse);

module.exports = router;