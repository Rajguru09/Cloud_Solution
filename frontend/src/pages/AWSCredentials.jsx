import React, { useState } from "react";
import axios from "axios";

const AWSCredentials = () => {
  const [accessKey, setAccessKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValidate = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/auth/validate-aws", {
        access_key: accessKey,
        secret_key: secretKey
      });

      if (response.data.valid) {
        setMessage("✅ AWS credentials are valid!");
      } else {
        setMessage("❌ AWS credentials are invalid.");
      }
    } catch (error) {
      console.error("Validation error:", error);
      setMessage("❌ Error validating credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Enter AWS Credentials</h2>
      <input
        className="w-full p-2 border mb-3"
        placeholder="Access Key ID"
        value={accessKey}
        onChange={(e) => setAccessKey(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-3"
        placeholder="Secret Access Key"
        type="password"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
      />
      <button
        onClick={handleValidate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Validating..." : "Validate Credentials"}
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AWSCredentials;
