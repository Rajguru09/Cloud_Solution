
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AWSCredentials from './pages/AWSCredentials';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aws-credentials" element={<AWSCredentials />} />
      </Routes>
    </Router>
  );
};

export default App;
