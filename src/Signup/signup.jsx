import React, { useState } from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
      <h2>Create New User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Name</label>

           <TextField
                id={`username`}
                key={`username-textbox`}
                onChange={(e) => setName(e.target.value)}
                value={'name'}
              />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
              
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="signup-btn">
          Signup
        </button>
  

      </form>
    </div>
  );
};

export default Signup;
