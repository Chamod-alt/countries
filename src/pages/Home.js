import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">🌍 Welcome to Country Explorer</h1>
      <p>Click below to explore countries using the REST API.</p>
      <Link to="/countries" className="btn btn-primary mt-3">View Countries</Link>
    </div>
  );
}

export default Home;
