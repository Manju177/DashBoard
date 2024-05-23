import { useState } from 'react'
import './App.css'

import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboad';
import SalesAgent from './Components/SalesAgent/SalesAgent';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<SalesAgent/>} />
      </Routes>
    </Router>
  );
}

export default App
