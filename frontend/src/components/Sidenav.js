import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <nav
      className="navbar navbar-light"
      style={{
        backgroundImage: 'linear-gradient(to right, #2196f3, #4caf50)',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row justify-content-center w-100">
          {/* Horizontal Navigation Links with transitions */}
          <li className="nav-item mx-3">
            <Link
              className="nav-link active"
              to="/"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffdd57';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link"
              to="/about"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffdd57';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link"
              to="/profile"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffdd57';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Quick Portfolio Maker
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link"
              to="/dashboard"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffdd57';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              MNC's Shortlisted Resumes
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link"
              to="/form"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffdd57';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Rapid Resume Maker
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidenav;
