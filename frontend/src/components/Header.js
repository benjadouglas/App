import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Your App Logo</Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/my-courses">My Courses</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="header-actions">
        {/* Add user profile or login/signup buttons here */}
      </div>
    </header>
  );
};

export default Header;