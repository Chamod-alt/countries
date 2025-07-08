/*
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar({ darkMode, setDarkMode }) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link fw-bold ${isActive ? 'text-dark bg-dark rounded px-2' : 'text-white'}`;

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white" to="/">
          Country Explorer
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-lg-end text-lg-end text-start">
            <li className="nav-item mb-3 me-3 mb-lg-0">
              <NavLink to="/countries" className={navLinkClass}>
                All Countries
              </NavLink>
            </li>
            <li className="nav-item mb-3 me-3 mb-lg-0">
              <NavLink to="/favorites" className={navLinkClass}>
                Favorites
              </NavLink>
            </li>

            {user ? (
              <li className="nav-item mb-3 me-3 mb-lg-0">
                <button className="btn btn-outline-light fw-bold" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item mb-3 mb-lg-0">
                <NavLink className="btn btn-outline-light fw-bold" to="/login">
                  Login
                </NavLink>
              </li>
            )}

            <li className="nav-item mb-3 mb-lg-0 align-self-lg-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeToggle"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  style={{ display: 'none' }}
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="darkModeToggle"
                  style={{ fontSize: '20px', cursor: 'pointer' }}
                >
                  {darkMode ? (
                    <>
                      <FontAwesomeIcon icon={faMoon} /> Dark
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSun} /> Light
                    </>
                  )}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

*/


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link fw-bold ${isActive ? 'text-dark bg-white rounded px-2' : 'text-white'}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white" to="/countries">
          Country Explorer
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-lg-end text-lg-end text-start">
            <li className="nav-item mb-3 me-3 mb-lg-0">
              <NavLink to="/countries" className={navLinkClass}>
                All Countries
              </NavLink>
            </li>
            <li className="nav-item mb-3 me-3 mb-lg-0">
              <NavLink to="/favorites" className={navLinkClass}>
                Favorites
              </NavLink>
            </li>

            {user ? (
              <li className="nav-item mb-3 me-3 mb-lg-0">
                <button className="btn btn-outline-light fw-bold" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item mb-3 mb-lg-0">
                <NavLink className="btn btn-outline-light fw-bold" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


