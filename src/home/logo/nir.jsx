import React from 'react';
import nir from '../Image/nir.png';
import "./nir.css";

function NirApp() {
  return (
    <div>
      <div className="nirContainer">
        <img src={nir} alt="nir" />
      </div>
    </div>
  );
}

export default NirApp;
