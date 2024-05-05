
import React from 'react';
import"./navbar.css";


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-logo">
       </div>  
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="home.jsx">Home</a>
            <a class="nav-link" href="aboutus.jsx">About US</a>
            <a class="nav-link" href="contactus.jsx">Contact US</a>

          </div>
        </div>
    </div>
  </nav>
  );
}

export default Navbar;
