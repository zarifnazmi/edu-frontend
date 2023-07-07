import React from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';

function App() : JSX.Element {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  </Router>
  );
}

export default App;
