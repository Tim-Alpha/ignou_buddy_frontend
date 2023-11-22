import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className={`d-flex ${isNavCollapsed ? '' : 'toggled'}`} id="wrapper">
      {/* Sidebar */}
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading"><span className='strong font-monospace'>IGNOU BUDDY</span></div>
        <div className="list-group list-group-flush">
          <Link to="/about" className="list-group-item list-group-item-action list-group-item-light p-3">
            About
          </Link>
          <Link to="/signup" className="list-group-item list-group-item-action list-group-item-light p-3">
            Sign Up
          </Link>
          <Link to="/login" className="list-group-item list-group-item-action list-group-item-light p-3">
            Login
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button className="btn btn-primary" id="sidebarToggle" onClick={handleNavCollapse}>
            Toggle Menu
          </button>
          {/* Add other navbar content here */}
        </nav>
        {/* Add main page content here */}
      </div>
    </div>
  );
};

export default Header;
