import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import img from "./ice.jpg";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Call onLogin if passed
      if (typeof onLogin === 'function') {
        onLogin(user);
      }

      navigate('/Countries'); // Redirect to home or dashboard
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
   
    <div className='login-page'>
      <div className='left-panel'>
       <div className="container mt-5" style={{ maxWidth: '600px' }}>
           <h1 style={{alignItems:"left", marginLeft:"-60px",marginTop:"-200px"}}><b>Country Explorer</b></h1>
       <br />
       <br />
      <h2 className="mb-4 mt-5">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        
        <p>If you a not Signup Pleace <Link to="/Register">Signup Here</Link></p>
        <button className="btn btn-primary w-100 py-2" type="submit">
         <b> Login</b>
        </button>
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

export default Login;
