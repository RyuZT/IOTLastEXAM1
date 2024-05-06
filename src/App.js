import React from "react";
import Home from "./home/pariwisata.jsx";
import "./home/pariwisata.css";
import Navbar from "./home/navbar.js"; 
import Logo from "./home/logo/logo.jsx";
import Nir from "./home/logo/nir.jsx"
import Aboutus from "./aboutus/aboutus.js";
import Homes from "./homes/home.js";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Logo />
      <Nir />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/homes" element={<Homes/>}/>

  
      </Routes>
    </div>
  );
}

export default App;