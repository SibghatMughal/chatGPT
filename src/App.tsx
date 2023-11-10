import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EdgenChat from './components/EdgenChat';
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edgen-chat" element={<EdgenChat />} />
      </Routes>
    </Router>
  );
}

export default App;
