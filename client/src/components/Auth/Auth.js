import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../actions/auth';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate, setError));
    } else {
      dispatch(login(formData, navigate, setError));
    }
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setError('');
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>
          {isSignup ? "Sign Up" : "Login"}
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <form className={classes.form} onSubmit={handleSubmit}>
          {isSignup && (
            <TextField
              className={classes.input}
              label="Full Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          )}
          <TextField
            className={classes.input}
            label="Email Address"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            className={classes.input}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {isSignup && (
            <TextField
              className={classes.input}
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          )}
          <Button className={classes.button} type="submit" variant="contained" fullWidth>
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        <Button onClick={switchMode} color="primary">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </Button>
      </Paper>
    </Container>
  );
};

export default Auth;
