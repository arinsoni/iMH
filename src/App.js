import React from 'react';
import Navbar from './Components/NavBar/NavBar.jsx';
import HomePage from './HomePage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; // Import a CSS file for additional styling if needed
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
