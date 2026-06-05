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
      style={{ position: 'relative' }}
    >
      {/* High Visibility Background Image */}
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
          <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            <Globe size={48} color="var(--primary)" />
          </div>
        </motion.div>
        <h1 style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>Navigate US Immigration <br/><span>with Confidence</span></h1>
        <p style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Expert AI-driven support for F1, OPT, H1B, and Visa transfers. 
          Seamlessly bridging the gap between complexity and clarity.
        </p>
        <Link to="/chat" className="btn">Start Consultation</Link>
      </section>

      <div className="features">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -10, borderColor: 'var(--primary)', backgroundColor: 'rgba(17, 17, 20, 0.9)' }} 
          className="feature-card"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <GraduationCap size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Student Visas</h3>
          <p>Complete guidance for F1 and OPT processes, ensuring you stay compliant and focused on your studies.</p>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -10, borderColor: 'var(--primary)', backgroundColor: 'rgba(17, 17, 20, 0.9)' }} 
          className="feature-card"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <Briefcase size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Work Authorization</h3>
          <p>Expert assistance for H1B and EAD applications, tailored for working professionals.</p>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ y: -10, borderColor: 'var(--primary)', backgroundColor: 'rgba(17, 17, 20, 0.9)' }} 
          className="feature-card"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Visa Transfers</h3>
          <p>Smooth transitions between employers or status changes with coordinated legal oversight.</p>
        </motion.div>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          textAlign: 'center', 
          marginTop: '6rem', 
          padding: '4rem', 
          background: 'rgba(17, 17, 20, 0.8)', 
          borderRadius: 'var(--radius)', 
          border: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(5px)'
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic', fontSize: '1.1rem' }}>
            "To provide seamless, expert immigration support for students and professionals, 
            empowering their journey with clarity and confidence."
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
