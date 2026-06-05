import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Landmark, Briefcase, GraduationCap, ArrowLeftRight, MessageSquare, HeartHandshake } from 'lucide-react';

const employees = [
  { name: "Imran", role: "CEO", dept: "Executive", size: "span-3 row-2", icon: <Landmark size={24} /> },
  { name: "Yiming", role: "Marketing Director", dept: "Marketing", size: "span-3", icon: <Users size={24} /> },
  { name: "Akanksha", role: "CFO", dept: "Finance", size: "span-3", icon: <Briefcase size={24} /> },
  { name: "Nathan", role: "Immigration Supervisor", dept: "Legal Compliance", size: "span-2 row-2", icon: <User size={24} /> },
  { name: "Sarah", role: "Student Visa Specialist", dept: "F1/OPT Support", size: "span-2", icon: <GraduationCap size={24} /> },
  { name: "David", role: "Work Visa Specialist", dept: "H1B/EAD Support", size: "span-2", icon: <Briefcase size={24} /> },
  { name: "Maria", role: "Visa Transfer Coordinator", dept: "Transfers", size: "span-2", icon: <ArrowLeftRight size={24} /> },
  { name: "James", role: "General Immigration Queries", dept: "Support", size: "span-2", icon: <MessageSquare size={24} /> },
  { name: "Linda", role: "Customer Support & Onboarding", dept: "Onboarding", size: "span-2", icon: <HeartHandshake size={24} /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const OrgChart = () => {
  return (
    <div className="org-page" style={{ position: 'relative' }}>
      <div className="grid-pattern"></div>
      
      {/* Abstract Corporate Background */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '400px',
        background: 'linear-gradient(to top, rgba(59, 130, 246, 0.05), transparent)',
        zIndex: -1
      }}></div>

      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ marginBottom: '4rem', position: 'relative', zIndex: 1 }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Leadership <span>& Team</span></h1>
        <p style={{ color: 'var(--text-dim)' }}>A collective of experts dedicated to your global mobility.</p>
      </motion.header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="org-bento"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {employees.map((emp, index) => (
          <motion.div 
            key={index} 
            variants={item}
            whileHover={{ scale: 1.02, borderColor: 'var(--primary)', backgroundColor: 'rgba(20, 20, 23, 0.8)' }}
            className={`bento-card ${emp.size || ''}`}
          >
            <div style={{ color: 'var(--primary)', marginBottom: 'auto' }}>
              {emp.icon}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <div className="name">{emp.name}</div>
              <div className="role">{emp.role}</div>
              <div className="dept">{emp.dept}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OrgChart;
