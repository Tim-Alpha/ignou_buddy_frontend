<<<<<<< HEAD
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
=======

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SidebarMenu from './pages/SidebarMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <span className='m-4 strong font-monospace'>IGNOU BUDDY</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Signup" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Media Query for smaller screens */}
      <style>
        {`
          @media (max-width: 768px) {
            /* Styles for smaller screens go here */
            nav {
              background-color: #FF5733;
            }
          }
        `}
      </style>
    </nav>
    </>
>>>>>>> b55d55c (sidebarmenu is progress)
  );
};

export default Header;






// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light
//     @media (max-width: 768px) {
//       /* Styles for smaller screens go here */
//       header {
//         background-color: #FF5733;
//       }
//     }
//     ">
//       <Link to="/" className="navbar-brand ">
//        <span className=' m-4 strong font-monospace'> IGNOU BUDDY</span>
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>

//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//       <Link to="/about" className="nav-link">
//               About
//             </Link>
//         <ul className="navbar-nav ml-auto"
//         >
//           <li className="nav-item">
//             <Link to="/home" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about" className="nav-link">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/signup" className="nav-link">
//               Sign Up
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Header;


