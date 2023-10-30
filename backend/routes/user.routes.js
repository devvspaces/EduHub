const router = require('express').Router();
const {
    getUser,
    updateUser,
    forgotPassword,
    deleteUser
} = require('../controllers/user.controller');

router.get('/get-user/:id', getUser);

router.patch('/update-user-info/:id', updateUser);

router.post('/forgot-password/:id', forgotPassword);

router.delete('/delete-user/:id', deleteUser);

module.exports = router;