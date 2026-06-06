import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Briefcase, Globe } from 'lucide-react';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home-page"
    >
      {/* Background Image placed in bg-system via Portal or simple relative placement */}
      {/* For simplicity in this prototype, we'll keep it fixed inside the page component but with correct layering */}
      <img 
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
        className="page-bg-image" 
        alt="Legal Background"
      />

      <section className="hero">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.25)', borderRadius: '50%', border: '1px solid rgba(59, 130, 246, 0.4)', backdropFilter: 'blur(10px)' }}>
            <Globe size={48} color="var(--primary)" />
          </div>
        </motion.div>
        <h1>Navigate US Immigration <br/><span>with Confidence</span></h1>
        <p>
          Expert AI-driven support for F1, OPT, H1B, and Visa transfers. 
          Seamlessly bridging the gap between complexity and clarity.
        </p>
        <Link to="/chat" className="btn">Start Consultation</Link>
      </section>

      <div className="features">
        <motion.div 
          whileHover={{ y: -10, borderColor: 'var(--primary)' }} 
          className="feature-card"
        >
          <GraduationCap size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Student Visas</h3>
          <p>Complete guidance for F1 and OPT processes, ensuring you stay compliant and focused on your studies.</p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -10, borderColor: 'var(--primary)' }} 
          className="feature-card"
        >
          <Briefcase size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Work Authorization</h3>
          <p>Expert assistance for H1B and EAD applications, tailored for working professionals.</p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -10, borderColor: 'var(--primary)' }} 
          className="feature-card"
        >
          <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Visa Transfers</h3>
          <p>Smooth transitions between employers or status changes with coordinated legal oversight.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
