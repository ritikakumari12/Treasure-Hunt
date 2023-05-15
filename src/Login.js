import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin, handleSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() === '' || password.trim() === '') {
      // Display an error message or take appropriate action for empty fields
      return;
    }
  
    // Perform login logic here with email and password
    handleLogin();
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="black-text-input" // Apply custom CSS class
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="black-text-input" // Apply custom CSS class
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" onClick={handleSignUp}>Sign up</a></p>
    </div>
  );
};

export default Login;
