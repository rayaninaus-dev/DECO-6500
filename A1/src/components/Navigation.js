import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Recyclable energy Feedback System</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/analysis" 
              className={`nav-link ${isActive('/analysis') ? 'active' : ''}`}
            >
              Analysis
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/map" 
              className={`nav-link ${isActive('/map') ? 'active' : ''}`}
            >
              Map
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/ai-reflection" 
              className={`nav-link ${isActive('/ai-reflection') ? 'active' : ''}`}
            >
              AI Reflection
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/references" 
              className={`nav-link ${isActive('/references') ? 'active' : ''}`}
            >
              References& Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
