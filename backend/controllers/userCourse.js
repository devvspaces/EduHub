const UserCourses = require('../models/UserCourses'); 

const createCourseForUser = async (req, res) => {
  const { user_id, course_id } = req.body;

  // Logic to check if the user_id and course_id exist in your database, omitted for brevity

  if (!user_id) {
    return res.status(404).json({ error: "User not found" });
  }

  if (!course_id) {
    return res.status(404).json({ error: "Course not found" });
  }

  try {
    // Logic to create a new course for a user in your database, omitted for brevity
    // Assume the UserCourses model and creation logic
    const newCourseForUser = await UserCourses.create({ user_id, course_id });

    res.status(201).json(newCourseForUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserCourses = async (req, res) => {
  const { user_id } = req.params;

  try {
    // Get all courses for a specific user from your database based on user_id
    const coursesForUser = await UserCourses.find({ user_id });

    res.status(200).json(coursesForUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCoursesUser = async (req, res) => {
  const { user_id, course_id } = req.params;

  try {
    // Get all users for a particular course with a particular course_id
    // Logic to fetch users for a course based on course_id, omitted for brevity
    const usersForCourse = await UserCourses.find({ course_id });

    res.status(200).json(usersForCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserCourse = async (req, res) => {
  const { user_id, course_id } = req.params;

  try {
    // Check if the user and course exist and delete the course for the user
    // Logic to check and delete the course for the user, omitted for brevity

    // Assuming successful deletion
    res.status(200).json({ message: `Course ${course_id} for user ${user_id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCourseForUser,
  getUserCourses,
  getCoursesUser,
  deleteUserCourse
};