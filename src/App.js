// App.js
import React from "react";
import Home from "./home/Home";
import "./home/Home.css";
import Navbar from "./home/navbar.js"; 
import Logo from "./home/logo/logo.jsx";


function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
