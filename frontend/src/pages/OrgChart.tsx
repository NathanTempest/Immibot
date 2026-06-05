import React from 'react';

const employees = [
  { name: "Imran", role: "CEO", department: "Executive Leadership" },
  { name: "Yiming", role: "Marketing Director", department: "Strategy & Outreach" },
  { name: "Akanksha", role: "CFO", department: "Financial Operations" },
  { name: "Nathan", role: "Immigration Supervisor", department: "Legal Compliance" },
  { name: "Sarah", role: "Student Visa Specialist", department: "F1/OPT Processing" },
  { name: "David", role: "Work Visa Specialist", department: "H1B/EAD Specialist" },
  { name: "Maria", role: "Visa Transfer Coordinator", department: "Transitions" },
  { name: "James", role: "General Immigration Queries", department: "Support Services" },
  { name: "Linda", role: "Customer Support & Onboarding", department: "Client Success" },
];

const OrgChart = () => {
  return (
    <div className="org-chart-page">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Our Professional <span>Consultants</span></h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Expert advisors dedicated to your immigration success.</p>
      </div>

      <div className="emp-bento-grid">
        {employees.map((emp, index) => (
          <div key={index} className="bento-item emp-card">
            <div className="emp-name">{emp.name}</div>
            <div className="emp-role">{emp.role}</div>
            <div className="emp-dept">{emp.department}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgChart;
