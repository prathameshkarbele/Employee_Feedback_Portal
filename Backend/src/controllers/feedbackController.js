const Feedback = require('../models/Feedback');

// Submit new feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { text, category } = req.body;
    const feedback = new Feedback({ text, category });
    console.log(feedback, 'dhdhd');
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all feedback with optional category filter
exports.getAllFeedback = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const feedback = await Feedback.find(query).sort({ createdAt: -1 });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark feedback as reviewed
exports.markAsReviewed = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { isReviewed: true },
      { new: true }
    );
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 