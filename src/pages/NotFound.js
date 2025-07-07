import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Not Found</h1>
      <p>Page doesn't exist.</p>
      <Link to="/" className="btn btn-secondary">Back Home</Link>
    </div>
  );
}

export default NotFound;
