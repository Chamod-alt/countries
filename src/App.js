/*import React , { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Countries from './pages/Countries';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

function App() {


    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login onLogin={(user) => console.log("User logged in:", user)} />} />

      </Routes>
    </Router>
  );
}

export default App;
*/


/*
import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar'; // add your Navbar
import Home from './pages/Home';
import Countries from './pages/Countries';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

// Wrapper component to use useLocation inside Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  // Apply dark/light mode classes to body
  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Pages where navbar should be hidden
  const hideNavbarRoutes = ['/','/login', '/register'];

  return (
    <>
    
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
*/



import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Countries from './pages/Countries';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
 

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
