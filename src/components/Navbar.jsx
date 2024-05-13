import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/public/logo.png';
import { FaBars } from 'react-icons/fa'; // Importation de l'icône de menu burger

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <img src={logo} alt='Eventmer' className="sitename" />
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`menu-links ${isOpen ? 'open' : ''}`}>
        <Link to="/events" className="menu">Nos Events</Link>
        <Link to="/tarifs" className="menu">Nos Tarifs</Link>
        <Link to="/apropos" className="menu">À propos de nous</Link>
      </div>
    </nav>
  )
}

export default Navbar;
