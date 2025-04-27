import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TipCalculator from './components/TipCalculator';
import BillSplitter from './components/BillSplitter';
import UnitConverter from './components/UnitConverter';
import BMICalculator from './components/BMICalculator';
import CurrencyConverter from './components/CurrencyConverter';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TipCalculator />} />
        <Route path='/bill' element={<BillSplitter />} />
        <Route path='/unit' element={<UnitConverter />} />
        <Route path='/bmi' element={<BMICalculator />} />
        <Route path='/currency' element={<CurrencyConverter />} />
        <Route path='/password' element={<PasswordGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
