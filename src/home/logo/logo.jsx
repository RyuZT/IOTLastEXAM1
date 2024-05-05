import React from 'react';
import logo from '../Image/logo.png';
import nir from '../Image/nir.png';
import "./logo.css";

function App() {
  return (
    <div>
      <div className="logoContainer">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nirContainer">
        <img src={nir} alt="nir" />
      </div>
    </div>
  );
}

export default App;
