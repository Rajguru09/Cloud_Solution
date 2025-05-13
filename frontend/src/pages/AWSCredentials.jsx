// src/pages/AWSCredentials.jsx
import React, { useState } from 'react';

const AWSCredentials = () => {
  const [accessKey, setAccessKey] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to verify credentials or process them
    console.log("AWS Access Key:", accessKey);
    console.log("AWS Secret Key:", secretKey);
    // Redirect user to the next page or show error based on credentials validation
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold">Enter AWS Credentials</h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div>
          <label htmlFor="accessKey" className="block text-lg font-medium">AWS Access Key</label>
          <input
            type="text"
            id="accessKey"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="secretKey" className="block text-lg font-medium">AWS Secret Key</label>
          <input
            type="password"
            id="secretKey"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AWSCredentials;
