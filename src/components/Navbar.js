import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand">Tools</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Tip Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bill">Bill Splitter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/unit">Unit Converter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bmi">BMI Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/currency">Currency Converter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/password">Password Generator</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;