const router = require('express').Router();
const { getUsers } = require('../controllers/admin.controller');

router.get('/get-all-users', getUsers);

module.exports = router;