const mongoose = require('mongoose');
const uuidv4 = require('uuidv4');

const userSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
            default: uuidv4.uuid().split("-").join(""),
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