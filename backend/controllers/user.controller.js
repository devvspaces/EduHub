const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const { user_id, email, password, role } = req.body;

    const user = new User({
        user_id,
        email,
        password,
        role
    })
}