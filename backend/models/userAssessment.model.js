const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserAssessmentSchema = new mongoose.Schema({
  user_assessment_id: {
    type: String,
    required: true,
    default: uuidv4().split("-").join("")
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    required: true
  },
  assessment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "assessment",
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const UserAssessment = mongoose.model('UserAssessment', UserAssessmentSchema);

module.exports = UserAssessment;