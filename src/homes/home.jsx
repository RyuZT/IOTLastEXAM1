import React from "react";
import "./home.css";
/*import log from "./Images/nira.png"; */
import vid from "./Bali.mp4";

function Nir() {
  return (
    <div className="nirwana">
      <div className="vid">
        <h1>NIRWANA</h1>
      <video autoPlay loop muted className="background-video">
        <source src={vid} type="video/mp4" />
      </video>
      </div>
    </div>
  );
}

export default Nir;
