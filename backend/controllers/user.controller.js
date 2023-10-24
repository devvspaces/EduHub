const User = require('../models/user.model');

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) res.status(404).json({ message: 'User does not exist' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) res.status(404).json({ message: 'Email does not exist' });

        const password = userIdGenerator();
        user.password = password;
        await user.save();
        res.status(200).json({ message: 'Password reset successful!' })
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) res.status(404).json({ message: 'User does not exist' });
        await user.deleteOne();
        res.status(200).json({ message: 'User deleted...' });
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
};

module.exports = {
    getUser,
    updateUser,
    forgotPassword,
    deleteUser
}