import React from "react";
import Home from "./home/pariwisata.jsx";
import "./home/pariwisata.css";
import "./home/navbar.css";
import "./homes/home.css";
import "./aboutus/aboutus.css";
import Navbar from "./home/navbar.jsx"; 
import Logo from "./home/logo/logo.jsx";
import Nir from "./home/logo/nir.jsx"
import Aboutus from "./aboutus/aboutus.jsx";
import Homes from "./homes/home.jsx";
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