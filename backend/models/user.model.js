const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
            default: uuidv4().split("-").join("")
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['student', 'instructor', 'admin']
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;