const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes and link them to controller functions
router.post("/signup", userController.createNewUser);
router.post("/login", userController.userLogin)

module.exports = router;
