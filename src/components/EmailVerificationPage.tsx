import React, { useState } from "react";

interface EmailVerificationPageProps {
  onComplete: () => void;
}

const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({
  onComplete,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode === "12345678") {
      setVerificationResult("Verification successful!");
      onComplete();
    } else {
      setVerificationResult("Invalid verification code.");
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
      {verificationResult && <div>{verificationResult}</div>}
    </div>
  );
};

export default EmailVerificationPage;
