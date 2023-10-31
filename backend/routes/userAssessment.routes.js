
const express = require("express");
const router = express.Router();

const userAssessmentController = require("../controllers/userAssessment");

// Routes
router.post('/create', userAssessmentController.createUserAssessment);
router.get('/get-all', userAssessmentController.getAllUserAssessments);
router.get('/get/:user_assessment_id', userAssessmentController.getUserAssessmentById);
router.post('/update/:user_assessment_id', userAssessmentController.updateUserAssessment);
router.delete('/delete/:user_assessment_id', userAssessmentController.deleteUserAssessment);

module.exports = router;