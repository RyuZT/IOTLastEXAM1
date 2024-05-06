import React from 'react';
import"./navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-logo">
       </div>  
          <div class="navbar-nav">
          <Link class="nav-link" to="./homes">Home</Link>
            <Link class="nav-link active" aria-current="page" to="/">Pariwisata</Link>
            <Link class="nav-link" to="./aboutus">About US</Link>
            <Link class="nav-link" to="/contactus.jsx">Contact US</Link>
          </div>
        </div>
    </div>
  </nav>
  );
}

export default Navbar;