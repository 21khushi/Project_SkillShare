<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';  // ✅ Make sure Navbar is imported correctly
import Home from './components/Home/Home';  
import Dashboard from './components/Dashboard/Dashboard'; 
import SavedPosts from './components/SavedPosts/SavedPosts'; 
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';  
import { getPosts } from './actions/posts';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />  {/* ✅ Ensure Navbar is rendered */}
      
      {/* ✅ Add space below Navbar to avoid overlap */}
      <Container maxWidth="xl" style={{ marginTop: '170px', width: '100vw', paddingTop:'300px' }}>  
        <Routes>
          <Route path="/" element={<Home setCurrentId={setCurrentId} />} />  
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/create-post" element={<Form currentId={currentId} setCurrentId={setCurrentId} />} />
          <Route path="/saved-posts" element={<SavedPosts />} />   
          <Route path="/auth" element={<Auth />} /> 
        </Routes>
      </Container>
    </Router>
  );
};

=======
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import Dashboard from './components/Dashboard/Dashboard';
// import SavedPosts from './components/SavedPosts/SavedPosts';
// import Auth from './components/Auth/Auth';
// import Form from './components/Form/Form';
// import WelcomeScreen from './components/Welcome/WelcomeScreen';
// import { getPosts } from './actions/posts';
// import Profile from './components/Profile/Profile';
// const AppContent = () => {
//   const [currentId, setCurrentId] = useState(null);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   const hideNavbarPaths = ['/', '/auth']; // Add more if needed

//   return (
//     <>
//       {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

//       <Routes>
//         <Route path="/" element={<WelcomeScreen />} />
//         <Route path="/home" element={<Home setCurrentId={setCurrentId} />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/create-post" element={<Form currentId={currentId} setCurrentId={setCurrentId} />} />
//         <Route path="/saved-posts" element={<SavedPosts />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/profile" element={<Profile />} />
        
//       </Routes>
//     </>
//   );
// };

// const App = () => (
//   <Router>
//     <AppContent />
//   </Router>
// );

// export default App;





import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import SavedPosts from './components/SavedPosts/SavedPosts';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import WelcomeScreen from './components/Welcome/WelcomeScreen';
import { getPosts } from './actions/posts';
import Profile from './components/Profile/Profile';
import { AUTH } from './constants/actionTypes';
import FilterPosts from './components/FilterPost/FilterPost';

const AppContent = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector((state) => state.auth.user); // Get user from Redux state
  const userRole = user?.result?.role; // Example: 'admin' or 'user'

  useEffect(() => {
    dispatch(getPosts()); // Fetch posts from API on mount
    const storedProfile = localStorage.getItem('profile'); // Retrieve profile from localStorage
    if (storedProfile) {
      dispatch({ type: AUTH, payload: JSON.parse(storedProfile) }); // Dispatch to store user in Redux state
    }
  }, [dispatch]);

  const hideNavbarPaths = ['/', '/auth']; // Hide navbar on these paths

  const restrictedRoutes = userRole === 'admin' ? ['/dashboard'] : ['/saved-posts']; // Example: restrict routes based on user role

  const isRestricted = restrictedRoutes.includes(location.pathname) && !user; // Check if the route is restricted and user is not logged in

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      {isRestricted && (
        <div>
          <h1>Unauthorized</h1>
          <p>You need to be logged in to access this page.</p>
        </div>
      )}

      {!isRestricted && (
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/home" element={<Home setCurrentId={setCurrentId} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-post" element={<Form currentId={currentId} setCurrentId={setCurrentId} />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view-all-posts" element={<FilterPosts />} />
        </Routes>
      )}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

>>>>>>> bd8644c (final changes)
export default App;
