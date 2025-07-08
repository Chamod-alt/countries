
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import img from "./ice.jpg";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful please login.....');
      navigate('/login');
    } catch (err) {
      alert('Signup failed: try again ');
    }
  };

  return (
     <div className='login-page'>

      <div className='left-panel'>
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
       <h1 style={{alignItems:"left", marginLeft:"0px",marginTop:"-100px"}}><b>Country Explorer</b></h1>
       
      <h2 className="mb-4 mt-5">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          className="form-control mb-4"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <p>If You All Ready Sign Up Please <Link to="/Login">Login Here</Link></p>
        <button className="btn btn-primary w-100" type="submit">Sign Up</button>
      </form>
    </div>
        </div>     
             
           <div className="right-panel">
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="clip-svg">
  <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
    <path
      d="
        M1,0
        L0.25,0
        C0.15,0.1 0.15,0.2 0.25,0.3
        C0.35,0.4 0.15,0.5 0.25,0.6
        C0.35,0.7 0.15,0.8 0.25,1
        L1,1
        L1,1
        
        Z
      "
    />
  </clipPath>
</svg>

  <img src={img} alt="Mountains" className="clipped-img" />
</div>

     
    </div>
  );
}

export default Signup;

