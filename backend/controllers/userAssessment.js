const UserAssessment = require('../models/UserAssessment.model');

const createUserAssessment = async (req, res) => {
  const { user_id, assessment_id, score } = req.body;

  if (!user_id || !assessment_id || !score) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newUserAssessment = new UserAssessment({
      user_id,
      assessment_id,
      score
    });

    const savedUserAssessment = await newUserAssessment.save();
    res.status(201).json(savedUserAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUserAssessments = async (req, res) => {
  try {
    const allUserAssessments = await UserAssessment.find();
    res.status(200).json(allUserAssessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserAssessmentById = async (req, res) => {
  const { user_assessment_id } = req.params;

  try {
    const userAssessment = await UserAssessment.findById(user_assessment_id);
    if (!userAssessment) {
      return res.status(404).json({ error: "User assessment not found" });
    }
    res.status(200).json(userAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserAssessment = async (req, res) => {
  const { user_assessment_id } = req.params;

  try {
    const userAssessment = await UserAssessment.findByIdAndUpdate(user_assessment_id, req.body, { new: true });
    if (!userAssessment) {
      return res.status(404).json({ error: "User assessment not found" });
    }
    res.status(200).json(userAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserAssessment = async (req, res) => {
  const { user_assessment_id } = req.params;

  try {
    const deletedUserAssessment = await UserAssessment.findByIdAndDelete(user_assessment_id);
    if (!deletedUserAssessment) {
      return res.status(404).json({ error: "User assessment not found" });
    }
    res.status(200).json(deletedUserAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUserAssessment,
  getAllUserAssessments,
  getUserAssessmentById,
  updateUserAssessment,
  deleteUserAssessment
};