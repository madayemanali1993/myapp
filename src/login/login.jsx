import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Reset error if everything is valid
    setError('');

    // Simulate login (for demonstration purposes)
    console.log('Logged in with', { username, password });
    alert('Login successful!');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
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

        <button type="submit" className="login-btn">
          Signin
        </button>

        <button className="logout-btn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
