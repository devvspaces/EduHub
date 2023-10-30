const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        res.status(200).json({ status: 201, data: user })
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!')
    }
}

const loginUser = async (req, res) => {
    try {
        let user;
        const { email: IncomingEmail, password: IncomingPassword } = req.body;
        user = await User.findOne({ email: IncomingEmail });
        if (!user) return res.status(401).json({ message: 'Invalid Email/Password' });
        const { password } = user;
        const compare = await bcrypt.compare(IncomingPassword, password);
        if (!compare) return res.status(401).json({ message: 'Invalid Email/Password' });
        const payload = {
            id: user.user_id,
        };
        const token = jwt.sign(payload, process.env.JWT_SEC);
        return res.status(200).json({ user, token });
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
}

module.exports = { createUser, loginUser }
