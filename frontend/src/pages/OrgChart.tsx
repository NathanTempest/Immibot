import React from 'react';

const employees = [
  { name: "Imran", role: "CEO", department: "Executive" },
  { name: "Yiming", role: "Marketing Director", department: "Marketing" },
  { name: "Akanksha", role: "CFO", department: "Finance" },
  { name: "Nathan", role: "Immigration Supervisor", department: "Legal/Compliance" },
  { name: "Sarah", role: "Student Visa Specialist", department: "F1/OPT Support" },
  { name: "David", role: "Work Visa Specialist", department: "H1B/EAD Support" },
  { name: "Maria", role: "Visa Transfer Coordinator", department: "Transfers" },
  { name: "James", role: "General Immigration Queries", department: "Support" },
  { name: "Linda", role: "Customer Support & Onboarding", department: "Onboarding" },
];

const OrgChart = () => {
  return (
    <div className="org-chart-page">
      <div className="card">
        <h1>Our Team</h1>
        <p>Meet the experts behind ImmiBot. Our team is dedicated to supporting your immigration journey.</p>
      </div>

      <div className="org-chart">
        {employees.map((emp, index) => (
          <div key={index} className="employee-card card">
            <div className="employee-name">{emp.name}</div>
            <div className="employee-role">{emp.role}</div>
            <div style={{ fontSize: '0.9rem', color: '#888' }}>{emp.department}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgChart;
