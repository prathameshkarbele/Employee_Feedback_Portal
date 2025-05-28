const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Submit new feedback
router.post('/', feedbackController.submitFeedback);

// Get all feedback (with optional category filter)
router.get('/', feedbackController.getAllFeedback);

// Mark feedback as reviewed
router.patch('/:id/reviewed', feedbackController.markAsReviewed);

// Delete feedback
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router; 