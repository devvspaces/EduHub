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
        if (!user) throw new ResourceNotFound('Invalid Email/Password ');
        const { password } = user;
        const compare = await bcrypt.compare(IncomingPassword, password);
        if (!compare)
            throw new ResourceNotFound({ message: 'Invalid Email/Password' });
        return res.status(200).json({ data: user });
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
}

module.exports = { createUser, loginUser }
