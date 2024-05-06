// App.js
import React from "react";
import Home from "./home/Home.jsx";
import "./home/Home.css";
import Navbar from "./home/navbar.js"; 
import Logo from "./home/logo/logo.jsx";
import Nir from "./home/logo/nir.jsx"


function App() {
  return (
    <div className="App">
      <Logo />
      <Nir />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
