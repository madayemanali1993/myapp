import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/Signup'); // Navigates to Dashboard
  };
  const loggedinHome = () => {
    navigate('/LoginHome'); // Navigates to Dashboard
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !password) {
      setError('Both fields are required.');
      return;
    }
  
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
  
    setError('');

    try {
      const response = await fetch("https://mongoapp-production.up.railway.app/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
        mode: "cors",
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("User created successfully!");
        setName('');
        setPassword('');
      } else {
        setError(data.message || "Failed to create user.");
      }
    } catch (error) {
      setError("Error connecting to the server.");
      console.error("Error:", error);
    }
  };
  
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" onClick={loggedinHome} className="login-btn">
          Login
        </button>
        <button onClick={goToSignup}>Signup</button>
      </form>
    </div>
  );
}

