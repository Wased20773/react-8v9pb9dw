import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/Navbar.css';

const NavBar = () => {
  // grab current path
  const location = useLocation();

  return (
    <nav className="d-flex justify-content-end align-items-center gap-2 navbar-container">
      {/* Homepage */}
      <Link
        to="/"
        className={`navbar-button ${
          location.pathname === '/' ? 'active-header' : ''
        }`}
      >
        Homepage
      </Link>
      {/* List */}
      <Link
        to="/list"
        className={`navbar-button ${
          location.pathname === '/list' ? 'active-header' : ''
        }`}
      >
        List
      </Link>
      {/* Population */}
      <Link
        to="/population"
        className={`navbar-button ${
          location.pathname === '/population' ? 'active-header' : ''
        }`}
      >
        Population
      </Link>
      {/* Custome Route */}
      <Link
        to="/custom"
        className={`navbar-button ${
          location.pathname === '/custom' ? 'active-header' : ''
        }`}
      >
        Drivers
      </Link>
    </nav>
  );
};

export default NavBar;
