import React, { useState } from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const goToSignin = () => {
    navigate('/'); // Navigates to Dashboard
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !password || !email || !phone) {
      setError('All fields are required.');
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
        body: JSON.stringify({ name, password, email, phone }),
        mode: "cors",
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("User created successfully ...Redirecting to login page!");
        setName('');
        setPassword('');
        setEmail('');
        setPhone();
        goToSignin();
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
          <label htmlFor="name">Name</label>

           <TextField
                id={`name`}
                key={`name-textbox`}
                onChange={(e) => setName(e.target.value)}
                value={name}
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
        <div className="input-group">
          <label htmlFor="email">Email</label>

           <TextField
                id={`email`}
                key={`email-textbox`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Contact</label>

           <TextField
                id={`phone`}
                key={`phone-textbox`}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
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
