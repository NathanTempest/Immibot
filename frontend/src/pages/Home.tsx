import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="card">
        <h1>Welcome to ImmiBot</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          "To provide seamless, expert immigration support for students and professionals navigating F1, OPT, H1B, EAD, and visa transfer processes, empowering their journey with clarity and confidence."
        </p>
      </div>
      
      <div className="card">
        <h2>Expert Support at Your Fingertips</h2>
        <p>Our AI-powered assistant is trained specifically on USCIS regulations and company protocols to help you navigate the complexities of US immigration.</p>
        <Link to="/chat" className="btn">Chat with ImmiBot</Link>
      </div>

      <div className="card">
        <h2>Our Specialized Areas</h2>
        <ul style={{ lineHeight: '2' }}>
          <li><strong>F1 & OPT:</strong> Comprehensive guidance for international students.</li>
          <li><strong>H1B & EAD:</strong> Expert assistance for working professionals.</li>
          <li><strong>Visa Transfers:</strong> Seamless coordination for status changes.</li>
          <li><strong>Status Tracking:</strong> Real-time help with documentation and deadlines.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
