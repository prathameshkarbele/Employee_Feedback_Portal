import React, { useState } from 'react';
import axios from 'axios';

const categories = ['Work Environment', 'Leadership', 'Growth', 'Others'];

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    text: '',
    category: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', feedback);
      setStatus({
        type: 'success',
        message: 'Feedback submitted successfully!',
      });
      setFeedback({ text: '', category: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to submit feedback. Please try again.',
      });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Submit Feedback</h1>
        {status.message && (
          <div className={`alert alert-${status.type}`}>
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-control"
              value={feedback.category}
              onChange={(e) =>
                setFeedback({ ...feedback, category: e.target.value })
              }
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Your Feedback</label>
            <textarea
              className="form-control"
              rows="4"
              value={feedback.text}
              onChange={(e) => setFeedback({ ...feedback, text: e.target.value })}
              required
            />
          </div>
          <div style={{ textAlign: 'right' }}>
            <button type="submit" className="btn btn-primary">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm; 