// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    if (service === 'Idle Resources') {
      navigate('/aws-credentials'); // Navigate to AWS Credentials page for Idle Resources
    } else if (service === 'Audit Accountability') {
      navigate('/aws-credentials'); // Navigate to AWS Credentials page for Audit Accountability
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold">Welcome to Cloud Solution</h1>
      <div className="mt-6">
        <h2 className="text-xl">Please select a service:</h2>
        <div className="mt-4">
          <button
            onClick={() => handleServiceSelect('Idle Resources')}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Idle Resources
          </button>
          <button
            onClick={() => handleServiceSelect('Audit Accountability')}
            className="ml-4 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Audit Accountability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
