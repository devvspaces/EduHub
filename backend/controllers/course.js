require("dotenv").config();

const User = require("../models/user.model");
const Course = require("../models/course.model");

const createCourse = async (req, res) => {
    try{
        const {title, description, user_id} = req.body;
    
        if (!title || !user_id)
            return res.status(400).json({success: false, errors: ["Missing Objects in Request"]});
    
        const user = await User.findOne({$where: {user_id: user_id}});
        if (!user)
            return res.status(404).json({success: false, errors: ["User Not Found"]});
        if (user.role !== "instructor")
            return res.status(400).json({success: false, errors: ["User Not an Instructor"]});
        
        const newCourse = await Course.create({title, description, user_id});
        return res.status(201).json({success: true, newCourse});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success: false, errors: ["Internal Sever Error"]});
    }
}


const getCourses = async (req, res) => {
    try{
        const courses = await Course.find();
        return res.status(200).json({success: true, courses});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success: false, errors: ["Internal Server Error"]});
    }
}


const getCourse = async (req, res) => {
    try {
        const {courseId} = req.params;
        const course = await Course.findOne({course_id: courseId});

        if (!course)
            return res.status(404).json({success: false, errors: ["Course Not Found"]});
        return res.status(200).json({success: true, course});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success: false, errors: ["Internal Server Error"]});
    }
}


const updateCourse = async (req, res) => {
    try{
        const {courseId} = req.params;
        const {title, description, user_id} = req.body;

        let course = await Course.findOne({course_id: courseId});
        if (!course)
            return res.status(404).json({success: false, errors: ["Course Not Found"]});
        const user = await User.findOne({user_id: user_id});

        if (!user)
            return res.status(404).json({success: false, errors: ["User Not Found"]});
        if (user.role !== "instructor")
            return res.status(400).json({success: false, errors: ["User not an Instructor"]});

        const updatedCourse = {user_id: user.user_id};
        if (!title) updatedCourse.title = title;
        if (!description) updatedCourse.description = description;

        course = await Course.findByIdAndUpdate(courseId, { $set: updatedCourse }, { new: true });
        return res.status(200).json({success: true, course});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success: false, errors: ["Internal Server Error"]});
    }
}


const deleteCourse = async (req, res) => {
    try {
        const {courseId} = req.params;
        
        let course = await Course.findOne({course_id: courseId});
        if (!course)
            return res.status(404).json({success: false, errors: ["Course Not Found"]});

        course = await Course.findByIdAndDelete(courseId);
        return res.status(200).json({success: false, course});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success: false, errors: ["Internal Server Error"]});
    } 
}


module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse };