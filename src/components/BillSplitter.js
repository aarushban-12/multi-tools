import React, { useState } from "react";
import Navbar from "./Navbar";
import "./BillSplitter.css";

export default function BillSplitter() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [amountPerPerson, setAmountPerPerson] = useState(null);

  const splitBill = () => {
    const billNum = parseFloat(bill);
    const peopleNum = parseInt(people);

    if (!isNaN(billNum) && peopleNum > 0) {
      const share = billNum / peopleNum;
      setAmountPerPerson(share.toFixed(2));
    } else {
      setAmountPerPerson(null);
    }
  };

  return (
    <div>
        <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 splitter-card">
        <h2 className="text-center mb-4">👥 Bill Splitter</h2>
        <div className="mb-3">
          <label className="form-label">Total Bill ($)</label>
          <input
            type="number"
            className="form-control"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="Enter bill amount"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of People</label>
          <input
            type="number"
            className="form-control"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="Enter number of people"
            min="1"
          />
        </div>
        <button className="btn btn-success w-100" onClick={splitBill}>
          Split Bill
        </button>

        {amountPerPerson !== null && (
          <div className="alert alert-info text-center mt-4">
            Each Person Pays: <strong>${amountPerPerson}</strong>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
