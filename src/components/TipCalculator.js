import React, { useState } from "react";
import "./TipCalculator.css";
import Navbar from "./Navbar";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [tipAmount, setTipAmount] = useState(null);

  const calculateTip = () => {
    const billNum = parseFloat(bill);
    const tipNum = parseFloat(tipPercent);
    if (!isNaN(billNum) && !isNaN(tipNum)) {
      const tip = (billNum * tipNum) / 100;
      setTipAmount(tip.toFixed(2));
    } else {
      setTipAmount(null);
    }
  };

  return (
    <div>
        <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 tip-card">
        <h2 className="text-center mb-4">💸 Tip Calculator</h2>
        <div className="mb-3">
          <label className="form-label">Bill Amount ($)</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="form-control"
            placeholder="Enter bill amount"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tip Percentage (%)</label>
          <input
            type="number"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            className="form-control"
            placeholder="Enter tip percentage"
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateTip}>
          Calculate Tip
        </button>
        {tipAmount !== null && (
          <div className="alert alert-success text-center mt-4">
            Tip Amount: <strong>${tipAmount}</strong>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
