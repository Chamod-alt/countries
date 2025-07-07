import React from 'react';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
