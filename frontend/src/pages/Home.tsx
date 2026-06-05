import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Briefcase, Globe } from 'lucide-react';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="home-container"
    >
      <section className="hero">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%' }}>
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
        <motion.div whileHover={{ y: -10 }} className="feature-card">
          <GraduationCap size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Student Visas</h3>
          <p>Complete guidance for F1 and OPT processes, ensuring you stay compliant and focused on your studies.</p>
        </motion.div>
        <motion.div whileHover={{ y: -10 }} className="feature-card">
          <Briefcase size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Work Authorization</h3>
          <p>Expert assistance for H1B and EAD applications, tailored for working professionals.</p>
        </motion.div>
        <motion.div whileHover={{ y: -10 }} className="feature-card">
          <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Visa Transfers</h3>
          <p>Smooth transitions between employers or status changes with coordinated legal oversight.</p>
        </motion.div>
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: '6rem', padding: '4rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic', fontSize: '1.1rem' }}>
          "To provide seamless, expert immigration support for students and professionals, 
          empowering their journey with clarity and confidence."
        </p>
      </motion.section>
    </div>
  );
};

export default Home;
