const express = require('express');
const userCoursesController = require('../controllers/user_courses');

const router = express.Router();

router.post('/:user_id/courses/', userCoursesController.createCourseForUser);
router.delete('/:user_id/courses/:course_id', userCoursesController.deleteUserCourse);
router.get('/:user_id', userCoursesController.getUserCourses);
router.get('/:course_id/users/', userCoursesController.getCoursesUser);

module.exports = router;