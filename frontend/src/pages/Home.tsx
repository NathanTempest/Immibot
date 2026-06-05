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
      <div className="home-bg"></div>
      
      {/* Background Decorative Image */}
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '-100px',
        width: '600px',
        height: '600px',
        background: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop") center/cover',
        borderRadius: '50%',
        opacity: 0.1,
        filter: 'grayscale(100%)',
        zIndex: -1
      }}></div>

      <section className="hero">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
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
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -10, borderColor: 'var(--primary)' }} 
          className="feature-card"
        >
          <GraduationCap size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Student Visas</h3>
          <p>Complete guidance for F1 and OPT processes, ensuring you stay compliant and focused on your studies.</p>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -10, borderColor: 'var(--primary)' }} 
          className="feature-card"
        >
          <Briefcase size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3>Work Authorization</h3>
          <p>Expert assistance for H1B and EAD applications, tailored for working professionals.</p>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ y: -10, borderColor: 'var(--primary)' }} 
          className="feature-card"
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
          background: 'var(--bg-card)', 
          borderRadius: 'var(--radius)', 
          border: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop") center/cover',
          opacity: 0.03,
          zIndex: 0
        }}></div>
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
