import React from 'react';

const employees = [
  { name: "Imran", role: "CEO", dept: "Executive", size: "span-3 row-2" },
  { name: "Yiming", role: "Marketing Director", dept: "Marketing", size: "span-3" },
  { name: "Akanksha", role: "CFO", dept: "Finance", size: "span-3" },
  { name: "Nathan", role: "Immigration Supervisor", dept: "Legal Compliance", size: "span-2 row-2" },
  { name: "Sarah", role: "Student Visa Specialist", dept: "F1/OPT Support", size: "span-2" },
  { name: "David", role: "Work Visa Specialist", dept: "H1B/EAD Support", size: "span-2" },
  { name: "Maria", role: "Visa Transfer Coordinator", dept: "Transfers", size: "span-2" },
  { name: "James", role: "General Immigration Queries", dept: "Support", size: "span-2" },
  { name: "Linda", role: "Customer Support & Onboarding", dept: "Onboarding", size: "span-2" },
];

const OrgChart = () => {
  return (
    <div className="org-page">
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Leadership <span>& Team</span></h1>
        <p style={{ color: 'var(--text-dim)' }}>A collective of experts dedicated to your global mobility.</p>
      </header>

      <div className="org-bento">
        {employees.map((emp, index) => (
          <div key={index} className={`bento-card ${emp.size || ''}`}>
            <div className="name">{emp.name}</div>
            <div className="role">{emp.role}</div>
            <div className="dept">{emp.dept}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgChart;
