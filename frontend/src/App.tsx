import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import OrgChart from './pages/OrgChart';
import Chatbot from './pages/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-system">
        <div className="bg-glow"></div>
      </div>
      <div className="content-wrapper">
        <nav>
          <div className="logo">ImmiBot</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/org-chart">Team</Link>
            <Link to="/chat">Chatbot</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/org-chart" element={<OrgChart />} />
            <Route path="/chat" element={<Chatbot />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
