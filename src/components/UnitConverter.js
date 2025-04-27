import React, { useState } from "react";
import Navbar from "./Navbar";
import "./UnitConverter.css";

const units = {
  distance: {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084,
  },
  speed: {
    "m/s": 1,
    "km/h": 3.6,
    mph: 2.23694,
  },
  time: {
    seconds: 1,
    minutes: 1 / 60,
    hours: 1 / 3600,
  },
};

export default function UnitConverter() {
  const [category, setCategory] = useState("distance");
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [results, setResults] = useState({});

  const convertUnits = (value, category, from) => {
    const base = value / units[category][from];
    const converted = {};
    for (const unit in units[category]) {
      converted[unit] = (base * units[category][unit]).toFixed(4);
    }
    return converted;
  };

  const handleConvert = () => {
    const val = parseFloat(inputValue);
    if (!isNaN(val)) {
      setResults(convertUnits(val, category, fromUnit));
    } else {
      setResults({});
    }
  };

  const unitOptions = Object.keys(units[category]);

  return (
    <div>
        <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 converter-card">
        <h2 className="text-center mb-4">📏 Unit Converter</h2>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setFromUnit(Object.keys(units[e.target.value])[0]);
              setResults({});
              setInputValue("");
            }}
          >
            <option value="distance">Distance</option>
            <option value="speed">Speed</option>
            <option value="time">Time</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Value</label>
          <input
            type="number"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a value"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">From Unit</label>
          <select
            className="form-select"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary w-100" onClick={handleConvert}>
          Convert
        </button>

        {Object.keys(results).length > 0 && (
          <div className="mt-4">
            <h5>Converted Values:</h5>
            <ul className="list-group">
              {Object.entries(results).map(([unit, val]) => (
                <li className="list-group-item d-flex justify-content-between" key={unit}>
                  <span>{unit}</span>
                  <strong>{val}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
