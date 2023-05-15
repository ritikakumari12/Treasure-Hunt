import React, { useState } from 'react';
import Puzzle from './Puzzle';
import './Homepage.css';
import Login from './Login';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="navbar">
        <h1>Find the Hidden Treasure!</h1>
        
      </div>
      {isLoggedIn ? (
        <div className="puzzle-container">
          <h2 className="welcome-message">Get ready to solve the Treasure Hunt, one mistake and you will have to start again!</h2>
          <Puzzle />
        </div>
      ) : (
        <div className="login-container">
          <h2 className="welcome-message">Please login to play the puzzle</h2>
          <Login handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
