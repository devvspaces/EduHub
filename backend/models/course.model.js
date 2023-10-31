const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const courseSchema = new mongoose.Schema(
    {
        course_id: {
            type: String,
            required: true,
            default: uuidv4().split("-").join("")
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        }
    },
    { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;