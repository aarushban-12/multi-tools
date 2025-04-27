import React, { useState } from "react";
import Navbar from "./Navbar";
import "./CurrencyConverter.css";
const exchangeRates = {
    USD: { USD: 1, EUR: 0.92, INR: 83.3, GBP: 0.79, JPY: 154.6, AUD: 1.53, CAD: 1.37, CNY: 7.25, CHF: 0.91 },
    EUR: { USD: 1.09, EUR: 1, INR: 90.5, GBP: 0.86, JPY: 167.9, AUD: 1.66, CAD: 1.49, CNY: 7.87, CHF: 0.99 },
    INR: { USD: 0.012, EUR: 0.011, INR: 1, GBP: 0.0095, JPY: 1.85, AUD: 0.018, CAD: 0.016, CNY: 0.087, CHF: 0.011 },
    GBP: { USD: 1.27, EUR: 1.16, INR: 105.8, GBP: 1, JPY: 194.5, AUD: 1.93, CAD: 1.73, CNY: 9.1, CHF: 1.15 },
    JPY: { USD: 0.0065, EUR: 0.0059, INR: 0.54, GBP: 0.0051, JPY: 1, AUD: 0.0099, CAD: 0.0089, CNY: 0.047, CHF: 0.0059 },
    AUD: { USD: 0.65, EUR: 0.60, INR: 54.4, GBP: 0.52, JPY: 101.3, AUD: 1, CAD: 0.90, CNY: 4.72, CHF: 0.60 },
    CAD: { USD: 0.73, EUR: 0.67, INR: 60.3, GBP: 0.58, JPY: 112.3, AUD: 1.11, CAD: 1, CNY: 5.26, CHF: 0.67 },
    CNY: { USD: 0.14, EUR: 0.13, INR: 11.4, GBP: 0.11, JPY: 21.3, AUD: 0.21, CAD: 0.19, CNY: 1, CHF: 0.13 }
  };

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = parseFloat(amount) * rate;
    setConvertedAmount(result.toFixed(2));
  };

  const currencies = Object.keys(exchangeRates);

  return (
    <div>
        <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 currency-card">
        <h2 className="text-center mb-4">💱 Currency Converter</h2>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => {
                setAmount(e.target.value);
                setConvertedAmount(null);
            }}
            placeholder="Enter amount"
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">From</label>
            <select
              className="form-select"
              value={fromCurrency}
              onChange={(e) => {
                setFromCurrency(e.target.value);
                setConvertedAmount(null);
            }}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <label className="form-label">To</label>
            <select
              className="form-select"
              value={toCurrency}
              onChange={(e) => {
                setToCurrency(e.target.value);
                setConvertedAmount(null);
            }}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn btn-success w-100" onClick={convertCurrency}>
          Convert
        </button>

        {convertedAmount && (
          <div className="alert alert-primary text-center mt-4">
            {amount} {fromCurrency} = <strong>{convertedAmount} {toCurrency}</strong>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
