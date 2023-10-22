const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const { user_id, email, password, role } = req.body;

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const user = new User({
            user_id,
            email,
            password: hash,
            role
        })

        await user.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err?.message)
    }
}

