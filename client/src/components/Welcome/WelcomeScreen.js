import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import './welcome.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="yellow-box">
      <Typography
  className="welcome-heading"
  component="h1"
  style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333', textAlign: 'center' }}
>
  Welcome to SkillShare
</Typography>

        <div className="welcome-buttons">
          <Button className="welcome-btn" onClick={() => navigate('/auth?mode=login')}>
            Login
          </Button>
          <Button className="welcome-btn" onClick={() => navigate('/auth?mode=signup')}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
