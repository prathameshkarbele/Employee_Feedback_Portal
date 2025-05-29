import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categories = ['All', 'Work Environment', 'Leadership', 'Growth', 'Others'];

function AdminDashboard() {
  const [feedback, setFeedback] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const fetchFeedback = async () => {
    try {
      const url = selectedCategory === 'All'
        ? 'http://localhost:5000/api/feedback'
        : `http://localhost:5000/api/feedback?category=${selectedCategory}`;
      const response = await axios.get(url);
      setFeedback(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [selectedCategory]);

  const handleMarkAsReviewed = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/feedback/${id}/reviewed`);
      fetchFeedback();
    } catch (error) {
      console.error('Error marking feedback as reviewed:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      fetchFeedback();
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Admin Dashboard</h1>
        
        <div className="form-group">
          <label className="form-label">Filter by Category</label>
          <select
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ maxWidth: '200px' }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Feedback</th>
                <th>Category</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map((item) => (
                <tr key={item._id}>
                  <td>{item.text}</td>
                  <td>{item.category}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td>
                    <span className={`chip ${item.isReviewed ? 'chip-success' : 'chip-warning'}`}>
                      {item.isReviewed ? 'Reviewed' : 'Pending'}
                    </span>
                  </td>
                  <td style={{display: 'flex', gap: '10px'}}>
                    {!item.isReviewed && (
                      <button
                      style={{backgroundColor: 'green', color: 'white'}}
                        className="icon-button"
                        onClick={() => handleMarkAsReviewed(item._id)}
                        title="Mark as Reviewed"
                      >
                        Mark Reviewed
                      </button>
                    )}
                    <button
                    style={{backgroundColor: 'red', color: 'white'}}
                      className="icon-button danger"
                      onClick={() => handleDelete(item._id)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard; 