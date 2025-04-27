import React, { useState } from "react";
import Navbar from "./Navbar";
import "./PasswordGenerator.css";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const allChars = upper + lower + numbers + symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      newPassword += randomChar;
    }

    setPassword(newPassword);
  };

  return (
    <div>
        <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 password-card">
        <h2 className="text-center mb-4">🔐 Password Generator</h2>

        <div className="mb-3">
          <label className="form-label">Password Length</label>
          <input
            type="number"
            min="4"
            max="64"
            className="form-control"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={generatePassword}>
          Generate Password
        </button>

        {password && (
          <div className="alert alert-success text-center">
            <strong>{password}</strong>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
