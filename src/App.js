// App.js
import React from "react";
import Home from "./home/Home";
import "./home/Home.css";
import Navbar from "./home/navbar.js"; 


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
