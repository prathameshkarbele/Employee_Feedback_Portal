import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-title">
          Employee Feedback Portal
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Submit Feedback
          </Link>
          <Link to="/admin" className="nav-link">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 