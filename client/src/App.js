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

export default App;
