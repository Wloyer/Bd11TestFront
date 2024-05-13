import React from 'react';
import logo from '/public/logo.png';

function Navbar() {

  return (
    <nav>
        <img src={logo} alt='Eventmer' className="sitename"/>
        <p class="menu">Nos Events</p>
        <p class="menu">Nos Tarifs</p>
        <p class="menu">À propos de nous</p>
    </nav>
  )
}

export default Navbar
