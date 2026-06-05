import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Navigate US Immigration with Confidence</h1>
        <p>
          Expert AI-driven support for F1, OPT, H1B, and Visa transfers. 
          Seamlessly bridging the gap between complexity and clarity.
        </p>
        <Link to="/chat" className="btn">Start Consultation</Link>
      </section>

      <div className="features">
        <div className="feature-card">
          <h3>Student Visas</h3>
          <p>Complete guidance for F1 and OPT processes, ensuring you stay compliant and focused on your studies.</p>
        </div>
        <div className="feature-card">
          <h3>Work Authorization</h3>
          <p>Expert assistance for H1B and EAD applications, tailored for working professionals.</p>
        </div>
        <div className="feature-card">
          <h3>Visa Transfers</h3>
          <p>Smooth transitions between employers or status changes with coordinated legal oversight.</p>
        </div>
      </div>

      <section style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic' }}>
          "To provide seamless, expert immigration support for students and professionals, 
          empowering their journey with clarity and confidence."
        </p>
      </section>
    </div>
  );
};

export default Home;
