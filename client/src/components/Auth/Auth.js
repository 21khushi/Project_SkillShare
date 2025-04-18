<<<<<<< HEAD
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
=======
// import React, { useState,useEffect } from 'react';
// import { Container, Paper, Typography, TextField, Button } from '@mui/material';
// import { useNavigate} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signup, login } from '../../actions/auth';
// import useStyles from './styles';
// import { useLocation } from 'react-router-dom';

// const Auth = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location=useLocation(); // //  Access the URL (to read ?mode=login)
  
//   const [isSignup, setIsSignup] = useState(false);
//     //  Check for mode in query params on component mount
//     useEffect(() => {
//       const query = new URLSearchParams(location.search);
//       const mode = query.get('mode');
//       setIsSignup(mode === 'signup');
//     }, [location.search]);
  
//   const [formData, setFormData] = useState({
//     name: '', email: '', password: '', confirmPassword: ''
//   });
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       dispatch(signup(formData, navigate, setError));
//     } else {
//       dispatch(login(formData, navigate, setError));
//     }
//   };

//   const switchMode = () => {
//     setIsSignup(!isSignup);
//     setError('');
//     navigate(`/auth?mode=${isSignup ? 'login' : 'signup'}`); //  Update URL mode
//   };

//   return (
//     <Container className={classes.container}>
//       <Paper className={classes.paper}>
//         <Typography className={classes.title}>
//           {isSignup ? "Sign Up" : "Login"}
//         </Typography>

//         {error && <Typography color="error">{error}</Typography>}

//         <form className={classes.form} onSubmit={handleSubmit}>
//           {isSignup && (
//             <TextField
//               className={classes.input}
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             />
//           )}
//           <TextField
//             className={classes.input}
//             label="Email Address"
//             variant="outlined"
//             fullWidth
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           />
//           <TextField
//             className={classes.input}
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           {isSignup && (
//             <TextField
//               className={classes.input}
//               label="Confirm Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               value={formData.confirmPassword}
//               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//             />
//           )}
//           <Button className={classes.button} type="submit" variant="contained" fullWidth>
//             {isSignup ? "Sign Up" : "Login"}
//           </Button>
//         </form>

//         <Button onClick={switchMode} color="primary">
//           {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </Button>
//       </Paper>
//     </Container>
//   );
// };

// export default Auth;/





import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
>>>>>>> bd8644c (final changes)
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../actions/auth';
import useStyles from './styles';
<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom';
>>>>>>> bd8644c (final changes)

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD
  
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
=======
  const location = useLocation(); // Access the URL (to read ?mode=login)

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', role: 'user' // Default role is 'user'
  });
  const [error, setError] = useState('');

  //  Check for mode in query params on component mount
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const mode = query.get('mode');
    setIsSignup(mode === 'signup');
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Dispatch signup action
        const data = await dispatch(signup(formData,navigate,setError));  // Make sure formData is passed
        if (data?.error) {
          // If there's an error, set the error message
          setError(data?.error?.message || 'Signup failed');
        } else {
          // If no error, redirect based on role or any other condition
          if (data?.redirectTo) {
            navigate(data.redirectTo); // Redirect based on role or another condition
          }
        }
      } else {
        // Dispatch login action
        const data = await dispatch(login(formData,navigate,setError)); // Handle login in the same way
        if (data?.error) {
          // If there's an error, set the error message
          setError(data?.error?.message || 'Login failed');
        } else {
          // If login is successful, handle redirection or any other logic
          if (data?.redirectTo) {
            navigate(data.redirectTo); // Redirect based on role or another condition
          }
        }
      }
    } catch (err) {
      // If there's any other error, handle it here
      setError('An error occurred, please try again');
>>>>>>> bd8644c (final changes)
    }
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setError('');
<<<<<<< HEAD
=======
    navigate(`/auth?mode=${isSignup ? 'login' : 'signup'}`); // Update URL mode
>>>>>>> bd8644c (final changes)
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
<<<<<<< HEAD
=======

          {/* Role Selection (Dropdown) */}
          {isSignup && (
            <FormControl variant="outlined" fullWidth className={classes.input}>
              <InputLabel>Role</InputLabel>
              <Select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                label="Role"
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          )}

>>>>>>> bd8644c (final changes)
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
