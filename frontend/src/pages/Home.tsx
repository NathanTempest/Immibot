import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="bento-grid">
        <div className="bento-item item-large">
          <h1>Experience Seamless <br/><span>Immigration Support</span></h1>
          <p className="mission-statement">
            "To provide seamless, expert immigration support for students and professionals navigating F1, OPT, H1B, EAD, and visa transfer processes, empowering their journey with clarity and confidence."
          </p>
        </div>
        
        <div className="bento-item">
          <h2>F1 & OPT</h2>
          <p style={{ color: 'var(--text-light)' }}>Specialized guidance for international students and recent graduates.</p>
        </div>

        <div className="bento-item">
          <h2>H1B & EAD</h2>
          <p style={{ color: 'var(--text-light)' }}>Expert assistance for working professionals and employment authorization.</p>
        </div>

        <div className="bento-item item-wide">
          <h2>Ready to get started?</h2>
          <p>Our AI-powered assistant is trained specifically on USCIS regulations and company protocols.</p>
          <Link to="/chat" className="btn" style={{ width: 'fit-content' }}>Consult ImmiBot</Link>
        </div>

        <div className="bento-item">
          <h2>Visa Transfers</h2>
          <p style={{ color: 'var(--text-light)' }}>Seamless coordination for status changes and employer transfers.</p>
        </div>

        <div className="bento-item">
          <h2>Status Tracking</h2>
          <p style={{ color: 'var(--text-light)' }}>Real-time help with documentation and critical deadlines.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
