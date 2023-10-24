const router = require('express').Router();
const {
    getUser,
    updateUser,
    forgotPassword,
    deleteUser
} = require('../controllers/user.controller');

router.get('/get-user', getUser);

router.patch('/update-user-info', updateUser);

router.post('/forgot-password', forgotPassword);

router.delete('/delete-user', deleteUser);

module.exports = router;